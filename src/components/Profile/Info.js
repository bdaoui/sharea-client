import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/Context';
import Axios from 'axios';


const Info = () => {
const {toggle, setToggle} = useContext(AuthContext)
const {user, setUser} = useContext(AuthContext)

const toggler = () => {
  if(toggle === false){
      setToggle(true)
  } else {
      setToggle(false)
  }
} 

  return (
    <div>
<<<<<<< HEAD
      <h3>Hello {user.username} </h3>
      <span>Welcome to your profile page</span>


=======
      <h3>Hello <span className='font-bold'>{user.username}</span> </h3>
      <span>Welcome to your profile page</span><br></br>
      <button onClick={toggler} className='italic'>Feel free to add your info here! </button>
>>>>>>> 04c3f64d0883c559b17c10d8969fb40c27e7687a
    </div>
  )
}

export default Info