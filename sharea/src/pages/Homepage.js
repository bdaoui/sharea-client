import React from 'react'
import Feed from "../components/Feed";
import SideBar from '../components/SideBar';

const Homepage = () => {
  return (
    <div style={{display: "flex"}}>
        <SideBar />
        <Feed />
    </div>
  )
}

export default Homepage