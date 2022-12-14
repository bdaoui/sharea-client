import React, {useState} from 'react'
import Info from '../components/Profile/Info'
import RandomImages from '../components/Profile/RandomImages'
import Images from '../components/Profile/Images'
import ProfileInfo from '../components/Profile/ProfileInfo';


const Profile = () => {
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