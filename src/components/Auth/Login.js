import React, {useEffect, useState, useContext} from 'react';
import {useNavigate, Link} from "react-router-dom";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Axios from "axios";
import {AuthContext} from '../../context/Context';


const LoginForm = () => {
    const navigate = useNavigate();
    const {user, setUser} = useContext(AuthContext)
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    

    const handleLogin = (e) =>{
        e.preventDefault();

        Axios
            .post("http://localhost:3001/api/signin", { username, password })
            .then(response => setUser(response.data.currentUser._id))
            .catch(err => console.log(err));
            navigate("/homepage");
            console.log(user);
    }
    



  return (
    <div>
 <Container>
            <Row>
                <Col md={5} className="login__bg"></Col>
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} value={username} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        </Button>
                        <div className="py-4">
                            <p className="text-center">
                                Need an account ? <Link to="/signup">Signup</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>

 {/* <button onClick={handleauth}>hello</button> */}
    </div>

  )
}

export default LoginForm;