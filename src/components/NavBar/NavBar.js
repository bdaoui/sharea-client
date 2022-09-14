import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import "./NavBar.css"
import service from '../../Context/AppContext';
import axios from 'axios'

const NavBar = () => {
    const navigate = useNavigate();
    function doLogout () {
        service
            .handleLogout()
            .then(navigate('/'))
    }

  return (
    <div className='shadow-md w-full sticky top-0 left-0 p-2'>
        <nav className='flex justify-between  bg-white py-4 ms:flex-column' >
            <span><a href='/homepage'>ShArea</a></span>

            <div className='flex flex-col md:flex-row justify-center gap-5'>
                <NavLink to="/profile" className="Links dark" >Profile</NavLink>

                <NavLink to="/" className="Links dark">Log In</NavLink>
                <button onClick={doLogout}  className="Links dark btn-danger ">Log Out</button>
            </div>
        </nav>


        

    </div>
  )
}

export default NavBar;