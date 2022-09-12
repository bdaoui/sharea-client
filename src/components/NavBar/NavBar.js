import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink, Button } from 'react-bootstrap';
import "./NavBar.css"
import service from '../../context/AppContext';
import axios from 'axios'

const NavBar = () => {
    // Set conditional to listen to window size and inject that size into status
    // use status to determine when to display Links otherwise present in sidebar
    const [screen, setScreen] = useState(window.innerWidth);
    const navigate = useNavigate();

    const resizeScreen = () =>{
        setScreen(window.innerWidth);
    }
    window.addEventListener('resize', resizeScreen);
    console.log(screen)

    function doLogout () {
        service
            .handleLogout()
            .then(navigate('/'))
    }

  return (
    <div className='navbar'>

        {
            screen <= 600 && <div>
                <NavLink to="/homepage" className="Links" >Homepage</NavLink>
                <NavLink to="/profile" className="Links" >Profile</NavLink>

            </div>
        }
        <NavLink to="/login" className="Links">Log In</NavLink>
        <Button onClick={doLogout} className="Links">Log Out</Button>

    </div>
  )
}

export default NavBar;