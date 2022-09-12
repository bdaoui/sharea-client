import React, {useState} from 'react'
import Feed from "../components/Feed";
import SideBar from '../components/SideBar';
import Axios from "axios";
import Auth from './Auth';

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
        <Auth />
    </div>
  )
}

export default Homepage