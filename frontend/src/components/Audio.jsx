import { useState, useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import axios from "axios";
import { useScript } from "./ScriptContext";

//bitRate option is set to 128, which means the audio recorder will use a bit rate of 128 kbps (kilobits per second) when encoding the recorded audio into an MP3 file.
//Bit rate refers to the number of bits (binary digits) that are processed or transmitted per unit of time. In the context of audio recording, the bit rate determines the quality and size of the recorded audio file.

const recorder = new MicRecorder({ bitRate: 128 });

const AudioRecording = () => {
  const { script,setScript } = useScript();
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  

  useEffect(() => {
    const checkPermission = async () => {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          await navigator.mediaDevices.getUserMedia({ audio: true });
          console.log("Permission Granted");
          setIsBlocked(false);
        } else {
          const getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;

          if (getUserMedia) {
            getUserMedia(
              { audio: true },
              () => {
                console.log("Permission Granted");
                setIsBlocked(false);
              },
              () => {
                console.log("Permission Denied");
                setIsBlocked(true);
              }
            );
          } else {
            console.log("getUserMedia is not supported in this browser.");
          }
        }
      } catch (error) {
        console.error("Error checking permission:", error);
        setIsBlocked(true);
      }
    };

    checkPermission();
  }, []);

  const start = () => {
    if (isBlocked) {
      console.log("Permission Denied");
    } else {
      recorder
        .start()
        .then(() => {
          setIsRecording(true);
        })
        .catch((e) => console.error(e));
    }
  };

  const stop = () => {
    recorder
      .stop()
      .getMp3()
      .then(async ([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setBlobURL(blobURL);

        const file = new File(buffer, "audio.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        });

        const baseAudio = await audioToBase64(file);

        const createFormDataFromBase64 = (
          base64String,
          fieldName,
          fileName
        ) => {
          const byteString = atob(base64String.split(",")[1]);
          const mimeType = base64String.split(";")[0].split(":")[1];

          const arrayBuffer = new ArrayBuffer(byteString.length);
          const intArray = new Uint8Array(arrayBuffer);

          for (let i = 0; i < byteString.length; i += 1) {
            intArray[i] = byteString.charCodeAt(i);
          }

          const blob = new Blob([intArray], { type: mimeType });
          const model = "whisper-1";
          const formData = new FormData();
          formData.append(fieldName, blob, fileName);
          formData.append("model", model);

          return formData;
        };

        axios({
          method: "post",
          url: "https://api.openai.com/v1/audio/transcriptions",
          data: createFormDataFromBase64(
            baseAudio,
            "file",
            "audio.webm",
            "whisper-1"
          ),
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer ",
          },
        })
          .then((response) => {
            const transcript = response.data.text;
            console.log(transcript);
           
            setScript(transcript);
            console.log(script);
          })
          .catch((error) => {
            console.error("Transcription error:", error);
          });

        setIsRecording(false);
      })
      .catch((e) => console.error(e));
  };

  const audioToBase64 = async (audioFile) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onerror = reject;
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(audioFile);
    });
  };

  return (
    <div className='flex flex-column gap-3'>
      <div className="flex flex-row gap-3">
        <button onClick={start} disabled={isRecording} className='text-xs bg-[#ffffff] border border-purple-400 p-4 rounded-full hover:bg-[#6181f3]'>
        🎤
        </button>
        <button onClick={stop} disabled={!isRecording} className='bg-[#ffffff] text-xs border border-purple-400 p-4 rounded-full hover:bg-[#fc5c5c]'>
        🖐️🎤
        </button>
      </div>
      <audio src={blobURL} controls="controls"  />
    </div>
    
    
  );
};



const Audio = () => {
  return (
    <div >
      <AudioRecording/>
    </div>
  );
};

export default Audio;