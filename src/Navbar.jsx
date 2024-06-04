// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faBell, faUserCircle,faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons';

function Navbar({ items }) {
  return (
    <>
    <div className="navbar navbar1">
      <div className="left-section">
        <FontAwesomeIcon icon={faBars} className="icon" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8dMUN-33agcSX_sI9qWZWfb7-ZPiqGbLSg&s" alt="Logo" className="logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon  icon={faMicrophone} className="icon1" /> 
      </div>
      <div className="right-section">
      <FontAwesomeIcon icon={faVideo} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faUserCircle} className="icon" />
      </div>
      </div>
      <div className="nav-items">
        {items.map((item, index) => (
          <button key={index} className="nav-item">
            {item}
          </button>
        ))}
      
    </div>
    </>
  );
}

export default Navbar;
