//import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from 'react-router-dom';

const GetStarted = () => {
    const navigate = useNavigate();

    const navigatetome = () =>{
        navigate('/me');
    }

  return (
    <button
      className="px-8 py-3 rounded-md bg-[#FFC000] text-white hover:bg-yellow-500 font-bold"
      onClick= {navigatetome}
    >
      Get Started
    </button>
  );
};

export default GetStarted;