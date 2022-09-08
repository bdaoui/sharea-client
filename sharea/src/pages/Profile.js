import React from 'react'
import RandomFeed from '../components/RandomFeed';
import SideBar from '../components/SideBar';
import SavedFeed from '../components/SavedFeed';
import OwnFeed from '../components/OwnFeed';

const Profile = () => {
  return (
    <div>
        <SideBar />
        <RandomFeed />
        <SavedFeed />
        <OwnFeed />

    </div>
  )
}

export default Profile