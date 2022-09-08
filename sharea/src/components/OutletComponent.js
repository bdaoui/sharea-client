import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from './NavBar';

function OutletComponent() {
  return (
    <div>
        <NavBar />
        <Outlet />

    </div>
  )
}

export default OutletComponent