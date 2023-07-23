//import AudioRecording from './AudioRecording'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Audio from "./Audio";
import axios from "axios";


const Sidebar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex h-screen bg-[#FFF9BA]">
      <SidebarNav />
      <MainContent />
    </div>
  );
};

const SidebarNav = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Function to fetch user's entries
    const fetchUserEntries = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(
          "http://localhost:3000/journal-api/v1/entries",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              user_id: user.sub,
            },
          }
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.status || "Failed to fetch entries");
        }

        const data = await response.json();
        setEntries(data.entries);
      } catch (error) {
        console.error("Error fetching entries:", error.message);
      }
    };

    // Call the fetch function to get the user's entries
    fetchUserEntries();
  }, []);

  /*const addNewEntryToSidebar = (newEntry) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };*/

  return (
    <div className="w-80 bg-white p-6 ml-10 rounded-2xl border-2 border-black mt-20 mb-10 ">
      <div className="mb-4">
        <button className="bg-[#FFC000] ml-20 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-2xl ">
          New Entry
        </button>
      </div>
      <ul className="space-y-2">
        {entries.map((entry) => (
          <SidebarItem key={entry._id} text={entry.content} />
        ))}
      </ul>
    </div>
  );
};

const SidebarItem = (props) => {
  const text = props.text;
  return (
    <li className="w-50 bg-white p-3 ml-15 rounded-2xl border border-black mt-3 mb-3 border-opacity-50">
      <a href="#" className="text-black hover:text-gray-700">
        {text}
      </a>
    </li>
  );
};

const MainContent = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  const postEntry = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        "http://localhost:3000/journal-api/v1/entries",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            user_id: user.sub,
          },
          body: {
            content: "This is my first entry ever.",
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.status || "Failed to fetch entries");
      }
    } catch (error) {
      console.error("Error posting entries:", error.message);
    }
  };

  return (
    <div className="flex-grow w-1100 bg-white p-6 ml-10 mr-10 rounded-2xl border-2 border-black mt-20 mb-10 flex flex-col justify-between">
      {/* Main content */}
      <div>
        <h1 className="text-gray-800 text-2xl font-bold mb-4">
          You Entry here...
        </h1>
        <p className="text-gray-800">Hi from main content</p>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Audio />
        <button
          className="bg-[#FFC000] ml-10 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-2xl"
          onClick={postEntry}
        >
          Save
        </button>

        <button
          className="bg-[#FFC000] ml-5 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-2xl"
          onClick={postEntry}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
