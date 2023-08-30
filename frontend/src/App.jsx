import { Landing, Profile, Dashboard } from "./pages";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { UserIdProvider } from "./components";

const App = () => {
  return (
    <UserIdProvider>
       <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>}></Route>
        <Route exact path='/me'element={<Dashboard/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
      </Routes>
    </Router> 
    </UserIdProvider>
   
  );
};

export default App;
