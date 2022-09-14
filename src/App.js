import './App.css';
import {Routes, Route } from "react-router-dom";
import OutletComponent from "./Components/NavBar/OutletComponent";
import Homepage from './Pages/Homepage';
import Auth from './Pages/Auth';
import Profile from './Pages/Profile';
import {AuthContext} from './Context/Context'
import {useContext} from 'react';

function App() {
  //middleware and protect
  const {user, setUser} = useContext(AuthContext)
  console.log(user)
  const authUser = user;

  return (
    <div className="App">
    { authUser && 
    <Routes>
      <Route element={<OutletComponent /> } >
      <Route path={"/homepage" }  element={<Homepage /> } /> 
      <Route path={"/profile" }  element={<Profile /> } />
      <Route path={"/" }  element={<Auth /> } />
      </Route>
    </Routes>
    }

  { !authUser && 
  <Routes>
    <Route element={<OutletComponent /> } >
    <Route path={"/homepage" }  element={<Auth /> } /> 
    <Route path={"/profile" }  element={<Auth /> } /> 
    <Route path={"/" }  element={<Auth /> } />
    </Route>
  </Routes>
  }

  </div>
  );
}

export default App;
