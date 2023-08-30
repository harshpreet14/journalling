import { useAuth0 } from "@auth0/auth0-react";
import Audio from "./Audio";
import axios from "axios";
import { useEffect, useState } from "react";
import Logout from "./Logout";
import { useUserId} from "./UserIdContext";


const API_BASE = "http://127.0.01:3000/api/journal-ease"

const Sidebar = () => {
  
  const { isAuthenticated, getAccessTokenSilently, user} = useAuth0();

  const [entries, setEntries] = useState([]);

  const [popupActive, setPopupActive] = useState('false');

  const [newEntry, setNewEntry] = useState("");

  const { userId, setUserId } = useUserId();

 
  const addUser = async () => {
    console.log('Adding user...');
    if (user && isAuthenticated) {
      try {
        const token = await getAccessTokenSilently();
        console.log('Token:', token);
        const response = await axios.post(
          API_BASE + '/users',
          {
            auth0_id: user.sub,
            name: user.name,
            email: user.email,
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Response:', response);
        const user_id = response.data.data.user._id;
        setUserId(user_id);
        console.log(userId);
        console.log(user_id);
        } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  

  const getEntries = async() =>{
    console.log('Getting entries...');
    if (user && isAuthenticated) {
      try {
        const token = await getAccessTokenSilently();
        console.log('Token:', token);
        const response = await axios.get(
          API_BASE + '/users/' + userId +'/entries',
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Response:', response);
        const entries_data = response.data.data.entries;
        setEntries(entries_data);
        console.log(entries_data);
        } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  const getEntry = async() =>{
    console.log("hi")
  }

  const deleteEntry =async() =>{
    console.log("hi")
  }

  const updateEntry = async() =>{
    console.log("hi")
  }

  const addEntry = async() =>{
    console.log("hi")
  }


  useEffect(() => {
    console.log('useEffect called');
    addUser();
    getEntries();
  }, []);

    return (
      <>
        <div className="flex flex-row gap-3 p-4px bg-[#ffffff]">
          <div className="rounded-tr-3xl  rounded-br-3xl w-4/12 bg-[#ffffd6]">
            <div className="flex flex-col m-3 h-5/6 mt-6 mb-10 rounded-tr-3xl rounded-br-3xl p-3 overflow-hidden">
              <div className='flex flex-row justify-between'>
                <div className='text-xl mb-4 font-bold text-start'>Your journals</div>
                  <Logout/>
                  </div>
                        <div className="flex flex-col border border-yellow-400 gap-y-3 h-20 rounded-xl  mb-4 px-4   py-2 bg-[#faefb6] ">
                          <div className="flex flex-row  justify-between font-bold  text-sm">
                               <div >Title</div>
                               <div >10.40 am</div>
                               </div>
                             <div className="text-xs">
                               Walking my dogs made me feel...
                          </div>
                        </div>
                  </div>
          </div>
          <Transcript />
          <Analysis />
        </div>
      </>
    );
} 
  


  const EntryList = () => {
   
    return (
        <>
        <div className='flex flex-row justify-between'>
        <div className='text-xl mb-4 font-bold text-start'>Your journals</div>
        <Logout/>
        </div>
       
        <Entry/>
        <Entry/>
        <Entry/>
        <Entry/>
        <Entry/>
        </>
    ); 
};


const Entry = () => {
    return (
        <div className="flex flex-col border border-yellow-400 gap-y-3 h-20 rounded-xl  mb-4 px-4 py-2 bg-[#faefb6] ">
            <div className="flex flex-row  justify-between font-bold  text-sm">
               <div >Title</div>
               <div >10.40 am</div>
            </div>
            <div className="text-xs">
            Walking my dogs made me feel...
            </div>
        </div>
        )
}


const Transcript = () => {
  return (
    <div className="rounded-3xl w-4/12 bg-[#e0d9fc]">
      <div className="flex flex-col m-3 h-5/6 mt-6 mb-10 rounded-3xl  p-3 overflow-hidden">
        <p className="text-xl mb-4 font-bold "> Record here...</p>
        <div className="text-sm border border-purple-700 p-2  mb-2 h-full rounded-xl bg-[#cdc1fc]">
          Hi, here goes the transcript
        </div>
        <Audio/>
      </div>
    </div>
  );
};


const Analysis = () => {
  return (
    <div className="min-h-screen rounded-tl-3xl rounded-bl-3xl w-4/12 bg-[#ffffd6]">
      <div className="flex flex-col m-3 h-5/6 mt-6 mb-10 rounded-3xl  p-3 overflow-hidden">
        <p className="text-xl mb-4 font-bold ">AI Insights</p>
          <div className="text-sm p-2 border border-yellow-400 h-full rounded-xl bg-[#faefb6] ">
            Here is your AI Analysis
          <div/>
      </div>
    </div>
    </div>
  ); 
};


export default Sidebar;
