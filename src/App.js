import './App.css';
import {Routes, Route } from "react-router-dom";
import OutletComponent from "./Components/NavBar/OutletComponent";
import Homepage from './Pages/Homepage';
import Auth from './Pages/Auth';
import Profile from './Pages/Profile';
import Error from './Pages/Error';
import {AuthContext} from './Context/Context'
import {useContext} from 'react';
import ImageId from './Pages/ImageId';

function App() {
  //middleware and protect
  const {user} = useContext(AuthContext);
  const authUser = user;

  return (
    <div className="App scrollbar-hide md:scrollbar-hide lg:scrollbar-hide">
    { authUser && 
    <Routes>
      <Route element={<OutletComponent /> } >
      <Route path={"/homepage" }  element={<Homepage /> } /> 
      <Route path={"/profile" }  element={<Profile /> } />
      <Route path={"/profile/:id" }  element={<Profile /> } />
      <Route path={"/image/:id" }  element={<ImageId /> } />
      <Route path={"/" }  element={<Auth /> } />
      <Route path={'*'} element={<Error />} />
      </Route>
    </Routes>
    }

  { !authUser && 
  <Routes>
    <Route element={<OutletComponent /> } >
    <Route path={"/homepage" }  element={<Auth /> } /> 
    <Route path={"/profile" }  element={<Auth /> } />
    <Route path={"/profile:id" }  element={<Auth /> } />
    <Route path={"/image/:id" }  element={<Auth /> } />
    <Route path={"/" }  element={<Auth /> } />
    <Route path={'*'} element={<Error />} />
    </Route>
  </Routes>
  }
  </div>
  );
}

export default App;
