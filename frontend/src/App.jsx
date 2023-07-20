import { Landing, Profile, Dashboard } from "./pages";
//import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Landing/> 
        <Dashboard/>
        <Profile/>
    </div>
     
  );
};

export default App;
