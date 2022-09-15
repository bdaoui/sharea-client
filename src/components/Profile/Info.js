import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/Context';
import Axios from 'axios';



const Info = () => {
const {toggle, setToggle} = useContext(AuthContext)
const {user, setUser} = useContext(AuthContext)
const [location, setLocation] = useState('')
const [occupation, setOccupation] = useState('')
const [info, setInfo] = useState('')
const id = user._id;


const toggler = () => {
    if(toggle === false){
        setToggle(true)
    } else {
        setToggle(false)
    }
} 

const handleUpdate = (e) =>{
  console.log(location ,occupation, info, id)
  e.preventDefault();
  Axios
      .post("http://localhost:3001/api/profile", { location, occupation, info, id })
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
      toggler();
}




  return (
    <>
    
   {!toggle &&
    <div>
      <h3>Hello <span className='font-bold'>{user.username}</span> </h3><br></br>
      <p>Welcome to your profile page</p><br></br>
      <a className="flex flex-row italic justify-center" onClick={toggler}>Feel free to add your info here!  
       <svg onClick={toggler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg></a>

     </div>

       
    } 
  
    {toggle  &&
   
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-600/40 ring-2 ring-gray-600 lg:max-w-xl">
    
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={toggler}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>

        <h3 className="text-3xl font-semibold text-center text-gray-700 uppercase decoration-wavy">
            Add you profile info
        </h3>

        <form className="mt-6" onSubmit={handleUpdate}>

            <div className="mb-2">
                <label
                    for="location"
                    className="block text-sm font-semibold text-gray-800">
                    Location
                </label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 mb-5 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder='London, UK'
                    onChange={(e) => setLocation(e.target.value)} value={location}
                    />
            </div>
            
            <div className="mb-2">
                <label for="occupation" className="block text-sm font-semibold text-gray-800">
                    Occupation
                </label>
                <input type="text"
                    className="block w-full px-4 py-2 mt-2 mb-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder='Enter your occupation'
                    onChange={(e) => setOccupation(e.target.value)} value={occupation}
                    />
            </div>

            <div className="mb-2">
                <label
                    for="info"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Info
                </label>
                <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 mb-5 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder='Enter your info'
                    onChange={(e) => setInfo(e.target.value)} value={info}
                    />
            </div>

            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit">
                    Add your profile information!
                </button>
            </div>
        

        </form>
    </div>
</div>
    }
    
    
   
    </>
  )
}

export default Info