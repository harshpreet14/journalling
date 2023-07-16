//import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="px-8 py-3 rounded-md bg-[#FFC000] text-white font-bold"
      onClick={loginWithRedirect}
    >
      Sign Up
    </button>
  );
};

export default SignUp;
