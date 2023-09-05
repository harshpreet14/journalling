import { useSelectedentryId } from "./SelectedEntryIdContext";
import { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { UserIdContext} from "./UserIdContext";
const API_BASE = "http://127.0.01:3000/api/journal-ease"


const Analysis = () => {
  const[analysis, setAnalysis] = useState("Here is your analysis");
  const {getAccessTokenSilently} = useAuth0();
  const {userId} = useContext(UserIdContext);
  const {selectedentryId, setSelectedentryId} = useSelectedentryId();

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
        const obtained_insights =  response.data.data.entry.ai_insights;
        console.log(obtained_insights);
        setAnalysis(obtained_insights);
        } catch (error) {
        console.error('Error:', error);
      }
  };

  useEffect(() => {
    getEntry(selectedentryId);
  }, [selectedentryId]);

    return (
      <div className="min-h-screen rounded-tl-3xl rounded-bl-3xl w-4/12  border border-yellow-600 bg-[#ffffff]">
        <div className="flex flex-col m-3 h-5/6 mt-6 mb-10 rounded-3xl  p-3 overflow-hidden">
          <p className="text-xl mb-4 font-bold ">AI Insights</p>
            <div className="text-sm p-2 border border-yellow-400 h-full rounded-xl bg-[#faefb6] shadow-lg  hover:bg-[#f8e99e] ">
             {analysis}
            <div/>
        </div>
      </div>
      </div>
    ); 
};

export default Analysis;