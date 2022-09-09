import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Axios from "axios";


const SignUpForm = () => {
    const navigate = useNavigate();

    const [userValue, setUserValue] = useState({
        username: "",
        password: "",
    })

    // const userNameRef = useRef();
    // const userPassRef = useRef();
    // const userEmailRef = useRef();

    // const newUser = {
    //     username: userNameRef.current.value, 
    //     password: userPassRef.current.value,
    //     // email: userEmailRef.current.value,        
    // }

    const handleUser = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setUserValue({...userValue, [name]:value})
    }
    

    const handleSubmit = (e) =>{
        e.preventDefault();

        Axios.post("http://localhost:5000/auth/signup", userValue)
            .then(response => console.log(response))
            .catch(err => console.log(err));

        navigate("/");

    }

    



  return (
    <div>

        <form onSubmit={handleSubmit} >
            <input type="text" value={userValue.name} name="username" onChange={handleUser} /> 
            <input type='password'  value={userValue.password} name="password" onChange={handleUser} />
            <input type='email' />
            <button type='submit'> Sign Up</button>
        </form>



    </div>

  )
}

export default SignUpForm;