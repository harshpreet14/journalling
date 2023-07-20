//import AudioRecording from './AudioRecording'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
//import Audio from "./Audio";

const Sidebar = () => {
  //const { user } = useAuth0();

  return (
    <div className="flex h-screen bg-[#FFF9BA]">
      <SidebarNav />
      <MainContent />
    </div>
  );
};

const SidebarNav = () => {
  return (
    <div className="w-80 bg-white p-6 ml-10 rounded-2xl border-2 border-black mt-20 mb-10 ">
      {/* Sidebar content */}
      <div className="mb-4">
        <button className="bg-[#FFC000] ml-20 hover:bg-yellow-500 text-white  font-bold py-3 px-6 rounded-2xl ">
          New Entry
        </button>
      </div>
      <ul className="space-y-2">
        <SidebarItem text="Item 1" />
        <SidebarItem text="Item 2" />
        <SidebarItem text="Item 3" />
      </ul>
    </div>
  );
};

const SidebarItem = ({ text }) => {
  return (
    <li className="w-50 bg-white p-3 ml-15 rounded-2xl border border-black mt-3 mb-3 border-opacity-50">
      <a href="#" className="text-black hover:text-gray-700">
        {text}
      </a>
    </li>
  );
};

const MainContent = () => {
  return (
    <div className="flex-grow w-1100 bg-white p-6 ml-10 mr-10 rounded-2xl border-2 border-black mt-20 mb-10 flex flex-col justify-between">
      {/* Main content */}
      <div>
        <h1 className="text-gray-800 text-2xl font-bold mb-4">
          You Entry here...
        </h1>
        <p className="text-gray-800">
          Hi from main content 
        </p>
      </div>
      <div className="flex items-center justify-center mt-6">
      {/* <Audio/> */}
      </div>
    </div>
  );
};

export default Sidebar;
