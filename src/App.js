import Signin from "./components/signin";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Edit from "./components/editMember";
import AuthManager from "./components/auth_manager";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
     <Navbar></Navbar>
     <Routes>
     <Route exact path="/" element={<AuthManager><Home/></AuthManager>}/>
     <Route exact path="/signin" element={<Signin/>}></Route>
     <Route exact path="/edit/:id" element={<Edit/>}></Route>
     
     </Routes>
   </Router>
  
   </>
  );
}

export default App;
