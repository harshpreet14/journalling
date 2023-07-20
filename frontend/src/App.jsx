import { Landing, Profile, Dashboard } from "./pages";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' > <Landing/> </Route>
        <Route exact path='/me'><Dashboard/></Route>
        <Route exact path='/profile'><Profile/></Route>
      </Routes>
    </Router>
  );
};

export default App;
