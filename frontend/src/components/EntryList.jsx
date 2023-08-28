import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

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
export default EntryList;