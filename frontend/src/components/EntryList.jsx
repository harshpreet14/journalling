import { useEntryId } from "./EntryIdContext";
import Logout from "./Logout";
import { UserIdContext} from "./UserIdContext"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

const API_BASE = "http://127.0.01:3000/api/journal-ease"


const EntryList = () => {

    const { userId } = useContext(UserIdContext);
    const { getAccessTokenSilently} = useAuth0();
    const [entries, setEntries] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const {newEntry, setNewEntry} = useState("")
    

    const addEntry = async () => {
        console.log('Adding entry...');
          try {
            const token = await getAccessTokenSilently();
            console.log('Token:', token);
            const response = await axios.post(
              API_BASE + '/users/'+ userId + '/entries',
              {
                transcript:"hi"
              },
              {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              }
            );
            console.log('Response:', response);
            const newEntry =  response.data.data.entries;
            console.log(newEntry);
            } catch (error) {
            console.error('Error:', error);
          }
      };

      const getEntries = async(userId) =>{
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
            console.log('Response for getEntries:', response);
            const entries_data = response.data.data.entries;
            setEntries(entries_data);
            console.log(entries_data);
            } catch (error) {
            console.error('Error:', error);
          }
      }

      useEffect(() => {
        console.log('useEffect called');
        getEntries(userId);
      }, [userId]);


    return (
        <>
        <div className='flex flex-row justify-between'>
        <div className='text-xl mb-4 font-bold text-start'>Your journals</div>
        <Logout/>  
        </div>
        {entries.map((entry) => (<Entry entry={entry} key={entry._id} />))}
        <div>
        <button className='text-sm p-0.5 border bg-[#fbe98f] border-yellow-400 rounded-md justify-end cursor-pointer' onClick={() => setPopupActive(true)}>➕</button>
        </div>

			{ popupActive ? (
				<div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center ">
					<div className="absolute top-16 right-16 w-20 h-20 text-2xl text-dark cursor-pointer" onClick={() => setPopupActive(false)}>X</div>
					<div className="content">
						<h3 className="text-dark mb-4 font-normal uppercase">Add Entry</h3>
						<input type="text" className="appearance-none outline-none border-none bg-white p-4 rounded-lg w-full shadow-md text-lg" onChange={e => setNewEntry(e.target.value)} value={newEntry} />
						<div className="button" onClick={addEntry}>Create Entry</div>
					</div>
				</div>
			) : null }
        </>
    ); 
};


const Entry = ({entry}) => {  

    const {entryId, setEntryId} = useEntryId();
    const { getAccessTokenSilently} = useAuth0();
    const { userId, setUserId } = useContext(UserIdContext);
    const [entries, setEntries] = useState([]);

    const deleteEntry =async() =>{
        try {
            const token = await getAccessTokenSilently();
            console.log('Token:', token);
            const response = await axios.delete(
              API_BASE + '/users/'+ userId + '/entries/' + entryId,
              {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              }
            );
            console.log('Response:', response);
            } catch (error) {
            console.error('Error:', error);
          }
      }

      
    const updateEntry = async() =>{
        console.log("hi")
      }


    const handleDeleteEntry =(e)=>{
        e.preventDefault();
        deleteEntry();
        setEntries(entries => entries.filter(entry => entry._id ==! entryId))
    }

    return (
        <div className="flex flex-col border border-yellow-400 gap-y-3 h-20 rounded-xl  mb-4 px-4 py-2 bg-[#faefb6] hover:selection:backdrop: " onClick={setEntryId(entry._id)}>
            {console.log('Entry id', entryId)}
            <div className="flex flex-row  justify-between font-bold  text-sm">
               <div >{entry.title}</div>
               <div >{new Date(entry.updated_at).toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}</div>
            </div>
            <div className="flex flex-row  justify-between">
            <div className="text-xs">
            {entry.transcript}
            </div>
            <div>
            <button className="text-xs p-0.5 border bg-[#fbe98f] border-yellow-400 rounded-md" >✏️</button>
            <button className="text-xs p-0.5 border bg-[#fbe98f] border-yellow-400 rounded-md" onClick={handleDeleteEntry}>🗑️</button>
            </div>
            
            </div> 
        </div>
        )
}

export default EntryList;