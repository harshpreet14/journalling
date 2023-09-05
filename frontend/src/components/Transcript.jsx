import { useSelectedentryId } from "./SelectedEntryIdContext";
import { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { UserIdContext} from "./UserIdContext";
const API_BASE = "http://127.0.01:3000/api/journal-ease"

const Transcript = () => {
  const[transcript, setTranscript] = useState("Here is your transcript");
  const {getAccessTokenSilently} = useAuth0();
  const {userId} = useContext(UserIdContext);
  const {selectedentryId, setSelectedentryId} = useSelectedentryId();
  console.log(selectedentryId);


  const getEntry = async (selectedentryId) => {
    console.log('Adding entry...');
      try {
        const token = await getAccessTokenSilently();
        console.log('Token:', token);
        const response = await axios.get(
          API_BASE + '/users/'+ userId + '/entries/' + selectedentryId,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Response:', response);
        const obtained_transcript =  response.data.data.entry.transcript;
        console.log(obtained_transcript);
        setTranscript(obtained_transcript);
        } catch (error) {
        console.error('Error:', error);
      }
  };

  useEffect(() => {
    getEntry(selectedentryId);
  }, [selectedentryId]);

  return (
    <div className="rounded-3xl w-4/12  border border-purple-700 bg-[#ffffff]">
      <div className="flex flex-col m-3 h-5/6 mt-6 mb-10 rounded-3xl  p-3 overflow-hidden">
        <p className="text-xl mb-4 font-bold "> Record here...</p>
        <div className="text-sm border max-h-[500px] border-purple-700 p-5 mb-2 h-full rounded-xl bg-[#cdc1fc] shadow-xl  hover:bg-[#bbacf4] overflow-y-auto">
          {transcript }
        </div>
      </div>
    </div>
  );
};


export default Transcript;
