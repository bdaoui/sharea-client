import React, {useState, useContext} from 'react'
import Login from '../Components/Auth/Login';
import Signup from '../Components/Auth/Signup';
import {AuthContext} from '../Context/Context';



function Auth() {
  const {toggle, setToggle} = useContext(AuthContext);


  return (
    <>
    <div className='bg-gray-50 bg-cover bg-center'>
    {toggle && <Login/>}
    {!toggle && <Signup/>}
    </div>
    </>
  ) 
}

export default Auth;