import React, {useState} from 'react';
import {ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';

import {FiAlignJustify, FiGrid, FiUser, FiHome} from "react-icons/fi";

const SideBar = () => {
  const [collapse, setCollapse] = useState(false)
  const [profilePic, setprofilePic] = useState(false)


  const profImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s";
  const profName = "Soufiane";

  const changeState = () =>{
    collapse ? setCollapse(false) : setCollapse(true);

  }


  return (
    <div style={{height: '100vh', position: "relative"}}>
      <ProSidebar collapsed={collapse} breakPoint='sm'>
        <SidebarHeader >

        <img src={profilePic} alt='Soufiane' onError={i => i.this.style.display='none'}></img>   

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