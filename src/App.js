import './App.css';
import {Routes, Route } from "react-router-dom";
import OutletComponent from "./components/NavBar/OutletComponent";
import Homepage from './pages/Homepage';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

function App() {
  //middleware and protect

  return (
    <div className="App">
  
    <Routes>
    
      <Route element={< OutletComponent /> } >
      
        <Route path={"/homepage" }  element={< Homepage /> } />
        <Route path={"/profile" }  element={< Profile /> } />

        <Route path={"/" }  element={< Auth /> } />

      </Route>
    </Routes>

    </div>
  );
}

export default App;
