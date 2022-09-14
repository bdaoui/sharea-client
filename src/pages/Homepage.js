import React, { useContext, useState } from "react";
import Feed from "../Components/Homepage/Feed";
import { AuthContext } from "../Context/Context";
import Upload from '../Components/Homepage/Upload'

const Homepage = () => {
  const { user, setUser } = useContext(AuthContext);
  console.log("user in Home ", user);


  return (
    <div style={{ display: "flex" }}>
      <h1>Hello {user && user.username}</h1>
      <Upload />
      <Feed />

      </div>
  );
};

export default Homepage;