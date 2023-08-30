import { useAuth0 } from "@auth0/auth0-react";
import Transcript from "./Transcript";
import Analysis from "./Insights";
import EntryList from "./EntryList";
import axios from "axios";
import { useEffect } from "react";



const Sidebar = () => {
  const { isAuthenticated, getAccessTokenSilently, user} = useAuth0();
  console.log(user);

  if (user && isAuthenticated){ 

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
  }
    


export default Sidebar;