import React, {useEffect, useState, useContext} from 'react';
import {useNavigate, Link} from "react-router-dom";
import Axios from "axios";
import {AuthContext} from '../../Context/Context';

const LoginForm = () => {
    const navigate = useNavigate();
    const {user, setUser} = useContext(AuthContext)
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    
    const handleLogin = (e) =>{
        e.preventDefault();
        Axios
            .post("http://localhost:3001/api/signin", { username, password })
            .then(response => {
                localStorage.setItem("token", JSON.stringify(response.data))
                setUser(response.data)
            })
            .catch(err => console.log(err));
            console.log('user on login.js', user);
            navigate("/homepage");
    }
    
  return (
    <div>
 <div>
            <div>
                <div md={5} className="login__bg"></div>
                <div md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
                    
                            <label>Username</label>
                            <input type="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} value={username} required />
                        

                            <label>Password</label>
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                       
                        <button variant="primary" type="submit">
                        </button>

                    </form>
                </div>
            </div>
        </div>

 {/* <button onClick={handleauth}>hello</button> */}
    </div>

  )
}

export default LoginForm;