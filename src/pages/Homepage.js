import React, {useContext} from 'react'
import Feed from "../components/Profile/Feed";
import {AuthContext} from '../context/Context';

const Homepage = () => {
  const {user, setUser} = useContext(AuthContext)
  console.log("user in Homepage.js", user)
  return (
    <div style={{display: "flex"}}>
        <h1>Hello {user && user.email}</h1>       
        <Feed />
    </div>
  )
}

export default Homepage