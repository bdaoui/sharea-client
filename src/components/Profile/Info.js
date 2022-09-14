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
      <h3>Hello <span className='font-bold'>{user.username}</span> </h3>
      <span>Welcome to your profile page</span><br></br>
      <button onClick={toggler} className='italic'>Feel free to add your info here! </button>
    </div>
  )
}

export default Info