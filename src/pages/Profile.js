import React, {useContext, useEffect, useState} from 'react'
import Info from '../Components/Profile/Info'
import RandomImages from '../Components/Profile/RandomImages'
import Images from '../Components/Profile/Images'
import {AuthContext} from '../Context/Context';
import ProfileInfo from '../Components/Profile/ProfileInfo';


const Profile = () => {
  const {toggle, setToggle} = useContext(AuthContext)
  const [page, setPage] = useState("Images");

  return (
    <div>
      
     <div className='bg-sky-400'>
        <button className="w-full bg-sky-400 px-4 py-2 font-amita text-gray-50 text-lg font-black tracking-widest transition-colors duration-200 transform rounded-md hover:bg-gray-50 hover:text-sky-400 focus:outline-none focus:bg-gray-50 focus:text-sky-400" onClick={()=>setPage("RandomImages")}>Random Images</button>

        <button  className="w-full bg-sky-40 px-4 py-2 font-amita text-gray-50 text-lg font-black tracking-widest transition-colors duration-200 transform rounded-md hover:bg-gray-50 hover:text-sky-400 focus:outline-none focus:bg-gray-50 focus:text-sky-400" onClick={() =>setPage('Images')}>My Images</button>
    </div>
       

    <div>
    {page === "Images" && <>
    <Info /> 
    <ProfileInfo />
    <Images />
    </>}
    
    {page === "RandomImages" && 
    <>
    <Info />
    <ProfileInfo />
    <RandomImages /> 
    </>}    
    </div>

    </div>
  )
}

export default Profile