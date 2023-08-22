import { useAuth0 } from "@auth0/auth0-react";
import Main from "./Main";

const Sidebar = () => {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className="flex gap-3 p-4px bg-[#ffffff]">
        <Main />
        <div className="min-h-screen rounded-tl-3xl rounded-bl-3xl w-2/6 bg-[#48cae4]">
          <div className="rounded-md bg-[#f8f9fa]"> 
          </div>
        </div>
        
      </div>
    );
  } else
    <div>
      <p>Login Required</p>
    </div>;
};

export default Sidebar;
