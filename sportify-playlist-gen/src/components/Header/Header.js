import React, { useState } from 'react';
import Button from '../Button/Button.js';
import './Header.css';
import mainLogo from '../../BoilerPlates/images/logo/temp.png';
import { IoMenuSharp } from "react-icons/io5";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const expandContainer = () => {
    setMenuVisible(prev => !prev);
  };

  return (
    <div id="header">
      <div className="mainHeader">
        <img src={mainLogo} alt="logo" className='logo' />

        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Playlist Generator</a></li>
          <li><a href="">Contact</a></li>
          
        </ul>

        <Button name={"Sign up"} />
      </div>

      <div className="mobileMenu">
        <div className="blankMenu">
          <img src={mainLogo} alt="logo" className='logo' />
          <IoMenuSharp color='3cb428' onClick={expandContainer} />
        </div>

        {menuVisible && (
          <div className="menuExpanded" id='menuExpanded'>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Playlist Generator</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Sign Up</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
