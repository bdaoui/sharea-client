import React, { useContext, useState, useEffect } from "react";
import Feed from "../Components/Homepage/Feed";
import { AuthContext } from "../Context/Context";
import Upload from '../Components/Homepage/Upload';
import Search from "../Components/Homepage/Search";
import axios from 'axios';

const Homepage = () => {
  const { user, setUser } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [image, setImage] = useState("")

  useEffect(() => {
    const searchResult = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/image' + `/search?q=${search}`);
        setImage(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    searchResult();
  }, [search]);
 
  const searchHandler = (result) => {
    setSearch(result);
  };
 


  return (
    <div className="flex flex-col">
      <h1>Welcome to SHAREA, {user && user.username}</h1>
      <Search searchHandler={searchHandler} />
      <div className="flex flex-row"> 
      
    <aside className="h-screen sticky top-0">
        <Upload />
    </aside>
   
      <Feed />
      </div>
     

      </div>
  );
};

export default Homepage;