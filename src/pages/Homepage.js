import React, {useState} from 'react'
import Feed from "../components/Feed";
import SideBar from '../components/SideBar';
import Axios from "axios";
 

const Homepage = () => {
  
  const [auth, setAuth] = useState("");

  const autoriz =() =>{
  }
  Axios.get("http://localhost:3001/api/auth")
  .then(response => console.log(response))
    

  return (
    <div style={{display: "flex"}}>
        <SideBar />
        <Feed />
        <button onClick={autoriz}>Auth</button>
    </div>
  )
}

export default Homepage