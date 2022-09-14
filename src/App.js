import './App.css';
import {Routes, Route } from "react-router-dom";
import OutletComponent from "./Components/NavBar/OutletComponent";
import Homepage from './Pages/Homepage';
import Auth from './Pages/Auth';
import Profile from './Pages/Profile';

function App() {
  //middleware and protect

  return (
    <div className="App">
  
    <Routes>
    
      <Route element={<OutletComponent /> } >
      
        <Route path={"/homepage" }  element={<Homepage /> } />
        <Route path={"/profile" }  element={<Profile /> } />

        <Route path={"/" }  element={<Auth /> } />

      </Route>
    </Routes>

    </div>
  );
}

export default App;
