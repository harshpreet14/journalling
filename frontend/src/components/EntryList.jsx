//import { useAuth0 } from "@auth0/auth0-react";


const EntryList = () => {
    return (
        <>
        <div className='text-xl mb-4 font-bold '>Your journals</div>
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