import { useAuth0 } from "@auth0/auth0-react";
import Main from "./Main";
import Analysis from "./Analysis";
import EntryList from "./EntryList";

const Sidebar = () => {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <>
       <div className="flex flex-row gap-3 p-4px bg-[#ffffff]">
        <div className="rounded-tr-3xl  rounded-br-3xl w-4/12 bg-[#ffffe7]">
          <div className="flex flex-col m-3 h-5/6 mt-6 mb-10 rounded-tr-3xl rounded-br-3xl p-3 overflow-hidden">
          <EntryList />
          </div>
        </div>
        <Main />
        <Analysis />
      </div>
      </>
     

    );
  } else
    <div>
      <p>Login Required</p>
    </div>;
};

export default Sidebar;
