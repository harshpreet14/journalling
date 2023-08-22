import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const SidebarNav = () => {
    const { user, getAccessTokenSilently } = useAuth0();
    console.log(user);
    const [entries, setEntries] = useState([]);
  
    /*useEffect(() => {
      // Function to fetch user's entries
      const fetchUserEntries = async () => {
        try {
          const token = await getAccessTokenSilently();
          console.log(token);
          const response = await fetch(
            "http://127.0.01:3000/journal/me/entries/",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                //user: user.sub,
              },
            }
          );
  
          if (!response.ok) {
            const data = await response.json();
            throw new Error(data.status || "Failed to fetch entries");
          }
  
          const data = await response.json();
          const entries = data.entries;
        } catch (error) {
          console.error("Error fetching entries:", error.message);
        }
      };
  
      // Call the fetch function to get the user's entries
      fetchUserEntries();
    }, []);*/
  
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

export default SidebarNav;