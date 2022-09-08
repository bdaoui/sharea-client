import React from 'react'
import NavBar from '../components/NavBar';
import RandomFeed from '../components/RandomFeed';

const Profile = () => {
  return (
    <div>
        <NavBar />

        <SideBar />
        <RandomFeed />
        <SavedFeed />
        <OwnFeed />

    </div>
  )
}

export default Profile