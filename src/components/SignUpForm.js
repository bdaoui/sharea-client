import React, {useRef, useState} from 'react';
import {useNavigate , Link} from "react-router-dom";
import Axios from "axios";
import {Col, Container, Row, Form, Button} from "react-bootstrap";

const SignUpForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");



    const handleSubmit = (e) =>{
        e.preventDefault();

        Axios.post("http://localhost:3001/api/signup", {email, password, username})
            .then(response => console.log(response))
            .catch(err => console.log(err));

        navigate("/");

    }

    



  return (

    <Container>
    <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
            <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSubmit}>
                <h1 className="text-center">Create an account!!!</h1>
                <div className="signup-profile-pic__container">
                    <label htmlFor="image-upload" className="image-upload-label">
                        <i className="fas fa-plus-circle add-picture-icon"></i>
                    </label>
                    <input type="file" id="image-upload" hidden accept="image/png, image/jpeg"  />
                </div>
              
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" onChange={(e) => setUsername(e.target.value)} value={username}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value={password} />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-primary">
             
                </Button>
           
            </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
    </Row>
</Container>
);

}


export default SignUpForm;