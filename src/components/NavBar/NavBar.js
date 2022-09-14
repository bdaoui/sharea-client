import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import "./NavBar.css"
import service from '../../Context/AppContext';

const NavBar = () => {
    const navigate = useNavigate();
    function doLogout () {
        service
            .handleLogout()
            .then(navigate('/'))
    }

  return (
    <div className='navbar dark light'>
<nav>


        <a href="/homepage" className="Links dark" >Homepage</a>
        <a href="/profile" className="Links dark" >Profile</a>

        <a href="/" className="Links dark">Log In</a>
        <button onClick={doLogout}  className="Links dark btn-danger ">Log Out</button>
</nav>
{/* <Navbar bg="dark" expand="lg">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                    
                        <LinkContainer to="/chat">
                            <Nav.Link>Chat</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/feed">
                            <Nav.Link>Feed</Nav.Link>
                        </LinkContainer>
                       
                            <NavDropdown
                                
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                                <NavDropdown.Item>
                                    <Button variant="danger" >
                                        Logout
                                    </Button>
                                </NavDropdown.Item>
                            </NavDropdown>
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */}

    </div>
  )
}

export default NavBar;