import './App.css';
import {Routes, Route } from "react-router-dom";
import OutletComponent from "../src/components/OutletComponent";
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={< OutletComponent /> } >
        <Route path={"/" }  element={< Landing /> } />
      </Route>
    </Routes>
    
    </div>
  );
}

export default App;
