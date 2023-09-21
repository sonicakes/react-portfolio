import React from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {RiServiceLine, RiUserFill} from 'react-icons/ri';
import {MdWorkHistory, MdChat} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} href="#"><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUserFill/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkHistory/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdChat/></a>

    </nav>
  )
}

export default Nav