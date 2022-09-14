import React, {useRef, useState} from 'react';
import {useNavigate , Link} from "react-router-dom";
import Axios from "axios";

const SignUpForm = ({signUp}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        signUp()
        Axios.post("http://localhost:3001/api/signup", {email, password, username})
            .then(response => console.log(response))
            .catch(err => console.log(err));
            navigate("/");
    }

  return (
    <div>
    <div>
        <div md={12} className="d-flex align-items-center justify-content-center flex-direction-divumn pt-5">
            <form style={{ width: "100%", maxWidth: 500 }} onSubmit={handleSubmit}>

                <h1 className="text-center">Create an account!!!</h1>

               
                    <label>Name</label>
                    <input type="text" placeholder="Your name" onChange={(e) => setUsername(e.target.value)} value={username}/>
             
                
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <p className="text-muted">We'll never share your email with anyone else.</p>
            

                    <label>Password</label>
                    <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value={password} />
                
                <button variant="primary" type="submit" className="btn-primary">
             
                </button>
           
            </form>
        </div>
    </div>
</div>
);

}


export default SignUpForm;