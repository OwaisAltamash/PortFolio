import React from 'react';
import './navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineGppGood } from "react-icons/md";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#head" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <AiOutlineUser /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <MdOutlineGppGood /> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <BsFileEarmarkCheckFill /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <MdMessage /> </a>
    </nav>
  )
}

export default Navbar;