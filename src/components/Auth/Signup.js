import React, {useState, useContext} from 'react';
import {useNavigate , Link} from "react-router-dom";
import Axios from "axios";
import {AuthContext} from '../../Context/Context';


const SignUpForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const {toggle, setToggle} = useContext(AuthContext);

console.log(toggle)
    const handleSubmit = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/api/signup", {email, password, username})
            .then(response => console.log(response))
            .catch(err => console.log(err));
            navigate("/");
    }

    const toggler = () => {
        if(toggle === false){
            setToggle(true)
        } else {
            setToggle(false)
        }
    } 

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-600/40 ring-2 ring-gray-600 lg:max-w-xl">

                <h1 className="text-3xl font-semibold text-center text-gray-700 uppercase decoration-wavy">
                    Create an account
                </h1>

                <form className="mt-6" onSubmit={handleSubmit}>

                    <div className="mb-2">
                        <label
                            for="username"
                            className="block text-sm font-semibold text-gray-800">
                            Username
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 mb-5 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Enter your username'
                            onChange={(e) => setUsername(e.target.value)} value={username}
                            />
                    </div>
                    
                    <div className="mb-2">
                        <label for="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input type="email"
                            className="block w-full px-4 py-2 mt-2 mb-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Enter your email'
                            onChange={(e) => setEmail(e.target.value)} value={email}
                            />
                        <p className='text-xs font-medium mb-5'>We'll never share your email with anyone else. </p>
                    </div>

                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 mb-5 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)} value={password}
                            />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        type="submit">
                            Login
                        </button>
                    </div>

                    <a className='text-gray-500 pt-5' onClick={toggler}>Already part of the family? <button className='font-semibold'> Log in</button></a>
                

                </form>
            </div>
        </div>
);

}


export default SignUpForm;