import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import "./NavBar.css"
import service from '../../Context/AppContext';



const NavBar = () => {
    const [collapse, setCollapse] = useState(false);


    const navigate = useNavigate();
    function doLogout () {
        service
            .handleLogout()
            .then(navigate('/'))
    }


    const dropdown = () =>{
        console.log("Dropdown please ", collapse)
        
        if(collapse){
            setCollapse(false)
        }

        else{
            setCollapse(true)
        }

    }
        

  return (
    <div className='shadow-md w-full sticky top-0 left-0 p-2 text-slate-800'>
        <nav className='flex justify-between py-4 ms:flex-column' >
            <span><a href='/homepage'>ShArea</a></span>

            <div className='flex flex-col md:flex-row justify-content: center justify-items: center gap-5 px-5   border border-sky-500 '>
           
                <button onClick={ () => dropdown() } >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  md:hidden " >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
    
                </button>


                <NavLink to="/profile" className="  hidden md:flex  " >Profile</NavLink>
                <NavLink to="/" className=" hidden md:flex">Log In</NavLink>
                <button onClick={doLogout}  className="  btn-danger hidden md:flex" >Log Out</button>        
            

                {collapse && 
                
                <div className='flex flex-col justify-content: center justify-items: center
md:hidden border border-sky-500'>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/" >Log In</NavLink>
                    <button onClick={doLogout}  className="btn-danger" >Log Out</button>    
                </div>
            
           
                }

            </div>

            
        </nav>


        

    </div>
  )
}

export default NavBar;