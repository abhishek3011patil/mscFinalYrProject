
'use client'
import React, { useState } from 'react';
import Button from '../Button/Button.js';
//import './Header.css';
import mainLogo from '../../BoilerPlates/images/logo/temp.png';
import { IoMenuSharp } from "react-icons/io5";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const expandContainer = () => {
    setMenuVisible(prev => !prev);
  };

  return (
    <div id="header " className="bg-black  text-lime-500 font-bold  flex justify-between p-3 items-center">
      <IoMenuSharp></IoMenuSharp>
      <div className='flex gap-6 '>
      <a href="">Home</a><a href="">Saved Playlists</a><a href="">Contact Us</a>
      </div>
      <button>Sign up</button>
      </div>
  );
}

export default Header;
