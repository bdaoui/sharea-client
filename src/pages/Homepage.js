<<<<<<< HEAD
import React, {useState} from 'react'
import Feed from "../components/Feed";
import SideBar from '../components/SideBar';
import Axios from "axios";
=======
import React from 'react'
import Feed from "../components/Profile/Feed";
>>>>>>> 3a1f57b6f01e81cee979afccd7935f6ddb5b4637
import Auth from './Auth';

const Homepage = () => {
  
  const [auth, setAuth] = useState("");

  const autoriz =() =>{
  }

  Axios.get("http://localhost:3001/api/auth")
  .then(response => console.log(response))
    

  return (
    <div style={{display: "flex"}}>
        <Feed />
    </div>
  )
}

export default Homepage