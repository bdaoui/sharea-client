import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import "./NavBar.css"
import service from '../../Context/AppContext';

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navigate = useNavigate();

    function doLogout () {
        service
            .handleLogout()
            .then(navigate('/'))
    }

  return(
    
    <div className="bg-gray-700 flex items-center justify-between border-b border-gray-400 py-4 px-5">
      
      <a href="/homepage" className='text-white font-black'>SHAREA</a>
      
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

            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/profile">Profile</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Login</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <button onClick={doLogout}>LOGOUT</button>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU text-white hidden space-x-8 lg:flex">
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button onClick={doLogout}>Logout</button>
          </li>
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
export default NavBar;   

// <div>
    //     <header className='flex bg-gray-700 justify-between text-white py-4 px-8'>

    //         <a href="/homepage" className='text-lg font-bold'>SHAREA</a>

    //         <ul className='hidden md:flex flex-row items-center align-middle gap-4'>
    //             <li><a href="/profile">Profile</a></li>
    //             <li><a href="/">Login</a></li>
    //             <li><a href="/logout">Logout</a></li>
    //         </ul>

    //         <button x-data="{ open: false }" onClick={"open = !open"} className='md:hidden'>
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //                 <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //             </svg>
    //         </button>
    //     </header>
    // </div>