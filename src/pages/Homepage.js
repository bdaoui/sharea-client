import React, { useContext, useState, useEffect } from "react";
import Feed from "../Components/Homepage/Feed";
import { AuthContext } from "../Context/Context";
import Upload from '../Components/Homepage/Upload';
import Search from "../Components/Homepage/Search";
import service from "../Context/AppContext";


const Homepage = () => {
  const { user, setUser } = useContext(AuthContext);
  const {images, setImages} = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [character, setCharacter] = useState("");
  const [allImages, setAllImages] = useState([]);
//   const [small, setSmall] = useState(null)
//   const [screen, setScreen] = useState(window.innerWidth)

//  const smScreen = window.innerWidth>500 
// useEffect(() => {
//   setSmall(smScreen)
// }, [screen])

useEffect(() =>{
    service
        .image()
        .then(allImages =>{
          setAllImages(allImages);
          setImages(allImages);
        })
        .catch(err => console.log(err));
    
}, [])






  return (
    <div className="flex flex-col bg-gray-50 mt-0">
      <h1 className="bg-sky-400 font-amita tracking-widest font-black text-gray-50 mt-0">Welcome to SHH-AREA, {user && user.username}</h1>
      <Search character={character} setCharacter={setCharacter} />
      <div className="flex flex-row"> 
      
     <div className="sm:hidden md:flex lg:flex h-screen sticky top-0">
        <Upload />
    </div>
     
    
   
      <Feed allImages={allImages} setAllImages={setAllImages} character={character} />
      </div>
     

      </div>
  );
};

export default Homepage;