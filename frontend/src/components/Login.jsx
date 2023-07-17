import { useAuth0 } from '@auth0/auth0-react';
import {lock } from "../assets";

const Login = () =>{
    const {loginWithRedirect}= useAuth0();

    return(
        <button
            className="flex justify-between items-center  bg-transparent  px-6 gap-2"
            onClick={loginWithRedirect}
          >
            <img src={lock} />
            Login
          </button>
    )
}

export default Login