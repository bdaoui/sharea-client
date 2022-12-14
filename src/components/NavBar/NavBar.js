import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css"
import service from '../../context/AppContext';
import {AuthContext} from '../../context/Context';

const NavBar = () => {
    const {user} = useContext(AuthContext);
    const authUser = user;
    const [isNavOpen, setIsNavOpen] = useState(false);


    function doLogout () {
        service
            .handleLogout()
            .then(setTimeout(function(){ window.location.reload()}))
            .catch((err) => console.log(err));
    }

  return(
    
    <div className="bg-sky-400 flex items-center justify-between py-4 px-5">
      
      <Link  to="/homepage" className='text-white font-black font-amita text-3xl'>SHH-AREA</Link>
      
      <nav>

        <section className="MOBILE-MENU flex lg:hidden">
          <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>  
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="CROSS-ICON absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
              
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="MENU-LINK-MOBILE-OPEN font-black font-amita text-xl flex flex-col items-center justify-between min-h-[250px]">
              
            {authUser && 
              
              <li className="border-b border-gray-400 my-8">
                <Link  to="/profile">PROFILE</Link>
              </li>
            }
          

            {!authUser &&

              <li className="border-b border-gray-400 my-8">
                <Link  to="/">LOGIN</Link>
              </li>

            }
              {authUser &&

              <li className="border-b border-gray-400 my-8">
                <button onClick={doLogout}>LOGOUT</button>
              </li>
            

              }

            
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU font-black font-amita text-lg text-white hidden space-x-8 lg:flex font-amita">
         
         {authUser &&

          <li>
            <Link  to="/profile">PROFILE</Link>
          </li>
         
         

         }
          
          {!authUser &&
          <li>
            <Link  to="/">LOGIN</Link>
          </li>
          
          }
          
          {authUser &&

          <li>
            <button onClick={doLogout}>LOGOUT</button>
          </li>

          }



        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
export default NavBar
