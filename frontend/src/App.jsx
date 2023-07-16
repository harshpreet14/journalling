import { Navbar, Hero} from "./components";
import {BrowserRouter} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Hero />
    </div>
    
    </BrowserRouter>
    )  
};

export default App;
