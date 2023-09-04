import { useAuth0 } from "@auth0/auth0-react";
import Audio from "./Audio";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Logout from "./Logout";
import { UserIdContext} from "./UserIdContext"
import Transcript from "./Transcript";
import Analysis from "./Insights";
import EntryList from "./EntryList";

const API_BASE = "http://127.0.01:3000/api/journal-ease"

const Sidebar = () => {
  
  const { isAuthenticated, getAccessTokenSilently, user} = useAuth0();

  const { userId, setUserId } = useContext(UserIdContext);

 
  const addUser = async () => {
    console.log('Adding user...');
    console.log('user', user);
    console.log('isAuthenticated', isAuthenticated);
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
        console.log('Response for addUser:', response);
        const user_id =  response.data.data.user._id;
        setUserId(user_id);

        console.log(userId);
        console.log(user_id);

        } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  

  useEffect(() => {
    console.log("Checking setUserId: " , setUserId );
    addUser();
    
      
  }, [setUserId]);

  return (
    <>
      <div className="flex flex-row gap-3 p-4px bg-[#ffffff]">
        <div className="rounded-tr-3xl  rounded-br-3xl w-4/12 bg-[#ffffd6]">
          <div className="flex flex-col m-3 h-5/6 mt-6 mb-10 rounded-tr-3xl rounded-br-3xl p-3 overflow-hidden">
            <EntryList/>
          </div>
        </div>
        <Transcript />
        <Analysis />
      </div>
    </>
  );
} 


export default Sidebar;
