import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <NavLink to="/Homepage" >Homepage</NavLink>
        <NavLink to="/Profile" >Profile</NavLink>
        <NavLink to="/LogIn">Log In</NavLink>

        <NavLink to="/LogOut">Log Out</NavLink>

    </div>
  )
}

export default NavBar