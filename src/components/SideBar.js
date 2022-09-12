import React, {useState} from 'react';
import {ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';

import {FiAlignJustify, FiGrid, FiUser, FiHome} from "react-icons/fi";

const SideBar = () => {
  const [collapse, setCollapse] = useState(false)

// This should be assigned to User Name and User Profile Pic when we have them available 

  let profImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s";
  let profName = "Soufiane";

  // This conditionally displays Name/ Pic based on sidebar status

  const Identity = () =>{

    if(collapse) {
      return <img src={profImage} alt="profile_pic" />
    }

    else{

      return <p>{profName} </p> ;
    }

  }

  // This collapses sidebar based on user imput


  const changeState = () =>{
    collapse ? setCollapse(false) : setCollapse(true);

  }


  return (
    <div style={{height: '100vh', position: "relative", width: "25vw"}}>
      <ProSidebar collapsed={collapse} breakPoint='sm'>
        <SidebarHeader >

          {Identity()} 

          <div onClick={changeState}>{<FiAlignJustify />}</div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem active={true} icon={<FiHome />}> Home</MenuItem>
            <MenuItem active={true} icon={<FiUser />}> Profile</MenuItem>
          </Menu>
        </SidebarContent>
        
        <SidebarHeader>
          <h2>{collapse ? null : "Categories"}</h2>
        </SidebarHeader>

        <SidebarContent>
              <Menu iconShape="square">
              <MenuItem active={true} icon={<FiGrid />}> Category</MenuItem>
              <MenuItem active={true} icon={<FiGrid />}> Category</MenuItem>
              <MenuItem active={true} icon={<FiGrid />}> Category</MenuItem>
              <MenuItem active={true} icon={<FiGrid />}> Category</MenuItem>
              <MenuItem active={true} icon={<FiGrid />}> Category</MenuItem>
              <MenuItem active={true} icon={<FiGrid />}> Category</MenuItem>
              <MenuItem active={true} icon={<FiGrid />}> Category</MenuItem>
              <MenuItem active={true} icon={<FiGrid />}> Category</MenuItem>
              <MenuItem active={true} icon={<FiGrid />}> Category</MenuItem>
              <MenuItem active={true} icon={<FiGrid />}> Category</MenuItem>
          </Menu>

        </SidebarContent>
        
      </ProSidebar>  
    </div>
  )
}

export default SideBar