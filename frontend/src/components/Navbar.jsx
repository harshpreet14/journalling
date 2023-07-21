import { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";
import Login from './Login';
import SignUp from './SignUp'
import { useAuth0 } from "@auth0/auth0-react";
import GetStarted from "./GetStarted";

const Navbar = () => {

  const {isAuthenticated} = useAuth0();

  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1200px] max-w-[500px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logo} className="h-[78px] w-[90px]" />

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <Login/>
          {isAuthenticated ? <GetStarted/>:<SignUp/>}
          {/*<button
            className="flex justify-between items-center  bg-transparent  px-6 gap-2"
            onClick={loginWithRedirect}
          >
            <img src={lock} />
            Login
          </button>
          <button
            className="px-8 py-3 rounded-md bg-[#FFC000] text-white font-bold"
            onClick={loginWithRedirect}
          >
            Sign Up
          </button> */}
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Contact</li>
          <div className="flex flex-col my-4 gap-4">
            <button
              className="border border-[#FFC000] flex justify-center items-center  bg-transparent 
                        rounded-md px-6 gap-2 py-4"
            >
              <img src={lock} />
              Login
            </button>
            <button className="px-8 py-5 rounded-md bg-[#FFC000] text-white font-bold">
              Sign Up{" "}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
