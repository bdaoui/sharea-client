import './App.css';
import {Routes, Route } from "react-router-dom";
import OutletComponent from "../src/components/OutletComponent";
import Landing from './pages/Landing';
import Homepage from './pages/Homepage';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={< OutletComponent /> } >
        <Route path={"/" }  element={< Landing /> } />
        <Route path={"/homepage" }  element={< Homepage /> } />
        <Route path={"/login" }  element={< LogIn /> } />
        <Route path={"/profile" }  element={< Profile /> } />
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;
