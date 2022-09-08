import React from 'react'
import NavBar from '../components/NavBar';
import RandomFeed from "../components/RandomFeed";
import Auth from "../components/Auth";

function Landing() {
  return (

    <div>
        <NavBar />
        <RandomFeed />
        <Auth />
    </div>
  )
}

export default Landing