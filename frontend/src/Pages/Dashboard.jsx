import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {useAuth0} from '@auth0/auth0-react';

const Dashboard = ()=>{
    return(
        <>
        <Header/>
        <Sidebar/>
        </>
        
    )
}

export default Dashboard