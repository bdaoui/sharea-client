import React from 'react'
import Feed from "../components/Feed";
import SideBar from '../components/SideBar';
import Auth from './Auth';

const Homepage = () => {
  return (
    <div style={{display: "flex"}}>
        <SideBar />
        <Feed />
        <Auth />
    </div>
  )
}

export default Homepage