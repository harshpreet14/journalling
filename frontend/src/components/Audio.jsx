import { Component } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import axios from 'axios';

const OPEN_API_KEY=''

//bitRate option is set to 128, which means the audio recorder will use a bit rate of 128 kbps (kilobits per second) when encoding the recorded audio into an MP3 file.
//Bit rate refers to the number of bits (binary digits) that are processed or transmitted per unit of time. In the context of audio recording, the bit rate determines the quality and size of the recorded audio file.

const recorder = new MicRecorder({ bitRate: 128 });

class AudioRecording extends Component {
  state = {
    isRecording: false, //isRecording is a boolean value that represents the current recording status.
    blobURL: "",    //A Blob (Binary Large Object) is a data type used to store binary data, such as audio or video.
    //In this code, blobURL is initially an empty string, and it gets updated with the URL of the recorded audio file when the recording is stopped and the audio is processed.
    isBlocked: false //isBlocked is a boolean value that indicates whether the permission to access the user's microphone is blocked or denied.
  };

  componentDidMount() {
    //It requests permission to access the user's microphone using the navigator.getUserMedia method.
    //*navigator.getUserMedia*: This is an API method that prompts the user to grant access to their microphone. It takes three arguments: constraints, a success callback, and an error callback.
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
  }


  
  start = () => {
    if (this.state.isBlocked) {
      console.log("Permission Denied");
    } else {
      recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };


  stop = () => {
    recorder
      .stop()
      .getMp3() //This method is called on the recorder.stop() promise to retrieve the recorded audio in MP3 format as a blob object.
      .then(async([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        const file = new File(buffer, 'audio.mp3', {
            type: blob.type,
            lastModified: Date.now()
          });
        const baseAudio = await this.audioToBase64(file);
        const createFormDataFromBase64 = (base64String, fieldName, fileName) => {
            const byteString = atob(base64String.split(',')[1]);
            const mimeType = base64String.split(';')[0].split(':')[1];
          
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const intArray = new Uint8Array(arrayBuffer);
          
            for (let i = 0; i < byteString.length; i += 1) {
              intArray[i] = byteString.charCodeAt(i);
            }
          
            const blob = new Blob([intArray], { type: mimeType });
            const model = "whisper-1"
            const formData = new FormData();
            formData.append(fieldName, blob, fileName);
            formData.append("model", model);
            
            return formData;
          }
        
        axios({  
            method: 'post',
            url: 'https://api.openai.com/v1/audio/transcriptions',
            data: createFormDataFromBase64(baseAudio, 'file','audio.webm',"whisper-1"),
            headers: { 
              'Content-Type': 'multipart/form-data',
              'Authorization': 'Bearer ' + OPEN_API_KEY
            },
          })
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response.data);
            });
        
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  audioToBase64 = async(audioFile) =>{
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onerror = reject;
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(audioFile);
    })
  }
  render() {
    return (
      <div className='flex'>
        <button onClick={this.start} disabled={this.state.isRecording}>
          {" "}
          ⏺️
        </button>
        <button onClick={this.stop} disabled={!this.state.isRecording}>
          ⏹️
        </button>
        <audio src={this.state.blobURL} controls="controls" />
      </div>
    );
  }
}


const Audio = ()=>{
  return(
    <div>
    <AudioRecording/>
  </div>
  )
  
}

export default Audio;