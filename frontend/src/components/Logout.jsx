
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="px-4 -py-0.5 rounded-xl bg-[#FFC000] text-white hover:bg-yellow-500 font-bold text-sm"
      onClick={logout}
    >
      Log out
    </button>
  );
};

export default Logout;
