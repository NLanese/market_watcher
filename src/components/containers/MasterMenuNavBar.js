import React from 'react';
import { NavLink } from 'react-router-dom';

const MasterMenuNavBar = () => {
    return (
      <div className="navbar">
        <NavLink to="/"><p id="YourList">YOur Stock Watchlist</p></NavLink>
        <br></br>
        <NavLink to="/StockLookup"><p id="StockLookup">Search</p></NavLink>
        <br></br>
        <NavLink to="/SetTargets"><p id="SetTargets">Set Targets</p></NavLink>
        <br></br>
        <NavLink to="/Settings"><p id="Settings">Settings</p></NavLink>
      </div>
    );
  };

export default MasterMenuNavBar