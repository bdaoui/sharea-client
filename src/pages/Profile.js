import React, {useContext, useEffect, useState} from 'react'
import Info from '../Components/Profile/Info'
import RandomImages from '../Components/Profile/RandomImages'
import Images from '../Components/Profile/Images'
import {AuthContext} from '../Context/Context';
import ProfileInfo from '../Components/Profile/ProfileInfo';


const Profile = () => {
  const {toggle, setToggle} = useContext(AuthContext)
  const [page, setPage] = useState("Images");
  
 
  // Show Buttons for Feed and Feed
  // const visibility = () =>{
  //   let element = document.getElementById("hidden");
  //   const style = getComputedStyle(element).display;
  //   if(style === "none"){
  //     document.getElementById("hidden").style.display = "unset";
  //   }
  //   else{
  //     document.getElementById("hidden").style.display = "none"; 
  //   }
  // }

  // if(toggle === true){
  //   visibility();
  // }
  


  return (
    <div>
      
      <section id='hidden' className='flex justify-center gap-9 m-5'>
     <div>
        <button className="w-50 px-4 m-8 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={()=>setPage("RandomImages")}>Random Images</button>

        <button  className="w-51 px-4 m-8 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={() =>setPage('Images')}>My Images</button>
    </div>
      </section> 

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