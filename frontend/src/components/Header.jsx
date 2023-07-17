import { logo} from "../assets";
import Logout from './Logout';

const Header = ()=>{
    return(
            <div className="w-full h-[80px] bg-white border-b">
              <div className="md:max-w-[1200px] max-w-[500px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
              <img src={logo} className="h-[78px] w-[90px]" />
              <div className="hidden md:flex">
                <Logout/>
                </div>
                </div>
                
            </div>
        
    )
}

export default Header;