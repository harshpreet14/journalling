
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="px-8 py-3 rounded-md bg-[#FFC000] text-white hover:bg-yellow-500 font-bold"
      onClick={logout}
    >
      Log out
    </button>
  );
};

export default Logout;
