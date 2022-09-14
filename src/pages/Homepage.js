import React, { useContext, useState } from "react";
import Feed from "../Components/Homepage/Feed";
import { AuthContext } from "../Context/Context";
import Upload from '../Components/Homepage/Upload'

const Homepage = () => {
  const { user, setUser } = useContext(AuthContext);
  console.log("user in Home ", user);


  return (
    <div className="flex flex-col">
      <h1>Welcome to SHAREA, {user && user.currentUser.username}</h1>
      
      <div className="flex flex-row"> 
      
    <aside class="h-screen sticky top-0">
        <Upload />
    </aside>
   

      
      <Feed />
      </div>
     

      </div>
  );
};

export default Homepage;