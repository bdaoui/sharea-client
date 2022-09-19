import React, { useContext, useState, useEffect } from "react";
import Feed from "../components/Homepage/Feed";
import { AuthContext } from "../context/Context";
import Upload from '../components/Homepage/Upload';
import Search from "../components/Homepage/Search";
import service from "../context/AppContext";


const Homepage = () => {
  const { user } = useContext(AuthContext);
  const {setImages} = useContext(AuthContext);
  const [character, setCharacter] = useState("");
  const [allImages, setAllImages] = useState([]);

useEffect(() =>{
    service
        .image()
        .then(allImages =>{
          setAllImages(allImages);
          setImages(allImages);
        })
        .catch(err => console.log(err));
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])






  return (
    <div className="flex flex-col bg-gray-50 mt-0">
      <h1 className="bg-sky-400 font-amita tracking-widest font-black text-gray-50 mt-0">Welcome to SHH-AREA, {user && user.username}</h1>
      <Search character={character} setCharacter={setCharacter} />
      
      <div className="flex flex-row"> 
      
     <div className="hidden md:flex lg:flex h-screen sticky top-0">
        <Upload />
    </div>
      <Feed allImages={allImages} setAllImages={setAllImages} character={character} />
      </div>
      </div>
  );
};

export default Homepage;