import { Landing, Profile, Dashboard } from "./Pages";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//import {Audio} from './components/Audio';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>}></Route>
        <Route exact path='/me'element={<Dashboard/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
      </Routes>
    </Router> 
  );
};

export default App;
