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
        <Route path={"/Homepage" }  element={< Homepage /> } />
        <Route path={"/Login" }  element={< LogIn /> } />
        <Route path={"/Profile" }  element={< Profile /> } />
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;
