import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/MasterMenuNavBar.css'

const MasterMenuNavBar = () => {
    return (
      <div className="navbar">
        <NavLink to="/"><p class="navLink" id="Info">Info</p></NavLink>
        <br></br>
        <NavLink to="/YourList"><p class="navLink" id="YourList">Your List</p></NavLink>
        <br></br>
        <NavLink to="/StockLookup"><p class="navLink" id="StockLookup">Search</p></NavLink>
        <br></br>
        <NavLink to="/Settings"><p class="navLink" id="Settings">Settings</p></NavLink>
      </div>
    );
  };

export default MasterMenuNavBar