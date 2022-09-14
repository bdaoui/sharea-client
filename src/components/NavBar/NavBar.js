import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
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
    <div className='navbar dark light'>

        <NavLink to="/homepage" className="Links dark" >Homepage</NavLink>
        <NavLink to="/profile" className="Links dark" >Profile</NavLink>

        <NavLink to="/" className="Links dark">Log In</NavLink>
        <Button onClick={doLogout}  className="Links dark btn-danger ">Log Out</Button>

        <Navbar bg="dark" expand="lg">
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
                </Navbar>

    </div>
  )
}

export default NavBar;