import './App.css';
import {Routes, Route } from "react-router-dom";
import OutletComponent from "./components/NavBar/OutletComponent";
import Homepage from "./pages/Homepage";
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Error from './pages/Error';
import {AuthContext} from './context/Context'
import {useContext} from 'react';
import ImageId from './pages/ImageId';

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
