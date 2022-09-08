import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {

    const [screen, setScreen] = useState(window.innerWidth);

    const resizeScreen = () =>{
        setScreen(window.innerWidth);
    }

  

    window.addEventListener('resize', resizeScreen);
    
    console.log(screen)

  return (
    <div className='navbar'>

        {
            screen <= 600 && <div>
                <NavLink to="/homepage" className="Links" >Homepage</NavLink>
                <NavLink to="/profile" className="Links" >Profile</NavLink>

            </div>
        }


        <NavLink to="/logIn" className="Links">Log In</NavLink>
        <NavLink to="/logout" className="Links">Log Out</NavLink>

    </div>
  )
}

export default NavBar;