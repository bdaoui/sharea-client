import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/Context';
import Axios from 'axios';
import {Link} from "react-router-dom";



const Info = () => {
const {toggle, setToggle} = useContext(AuthContext)
const {user} = useContext(AuthContext)
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
      .post("https://smoggy-yak-top-hat.cyclic.app/api/profile", { location, occupation, info, id })
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
      setTimeout(function(){ window.location.reload(); }, 1000)
}




  return (
    <>
    
   {!toggle &&
    <div className='bg-gray-50'>
      <h3 className='rounded-md font-amita font-black text-sky-400 font-bold text-lg tracking-widest' >Hello, <span className='font-black'>{user.username}</span> </h3><br></br>
      <p className='rounded-md font-amita font-bold text-sky-400 text-lg tracking-widest' >Welcome to your SHH-AREA</p><br></br>
      <h3 className="flex flex-row italic justify-center rounded-md font-amita font-bold text-sky-400 text-lg tracking-widest" onClick={toggler}>Feel free to add your info here!  
       <svg onClick={toggler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 inline w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      </h3>

     </div>

       
    } 
  
    {toggle  &&
   
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-50">
    <div className="w-full p-6 m-auto bg-sky-400 rounded-md shadow-xl shadow-gray-600/40 ring-2 ring-gray-600 lg:max-w-xl">
    
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={toggler}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>

        <h3 className="text-3xl text-gray-50 font-amita font-semibold text-center ppercase decoration-wavy">
            Add you profile info
        </h3>

        <form className="mt-6" onSubmit={handleUpdate}>

            <div className="mb-2">
                <label
                    for="location"
                    className="block text-base text-gray-50 font-amita font-semibold">
                    Location
                </label>
                <input
                    type="text"
                    className="block font-amita w-full px-4 py-2 mt-2 mb-5 tracking-widest font-amita text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder='London, UK'
                    onChange={(e) => setLocation(e.target.value)} value={location}
                    />
            </div>
            
            <div className="mb-2">
                <label for="occupation" className="block text-base text-gray-50 font-amita font-semibold">
                    Occupation
                </label>
                <input type="text"
                    className="block font-amita w-full px-4 py-2 mt-2 mb-5 tracking-widest font-amita text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder='Software Developer'
                    onChange={(e) => setOccupation(e.target.value)} value={occupation}
                    />
            </div>

            <div className="mb-2">
                <label
                    for="info"
                    className="block text-base text-gray-50 font-amita font-semibold"
                >
                    Info
                </label>
                <textarea
                    type="text"
                    className="block font-amita w-full px-4 py-2 mt-2 mb-5 tracking-widest font-amita text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder='Follow me@ tweeter:SoftwareDude420 Snipchat:The420Dev LinkedOut:@ThatSoftwareGuy'
                    onChange={(e) => setInfo(e.target.value)} value={info}
                    />
            </div>

            <div className="mt-6">
                <button className="w-full bg-gray-50 px-4 py-2 font-amita text-gray-700 text-lg font-black tracking-widest transition-colors duration-200 transform rounded-md hover:bg-slate-300 focus:outline-none focus:bg-slate-300"
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