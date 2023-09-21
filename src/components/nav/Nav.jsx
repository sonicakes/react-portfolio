import React from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {RiServiceLine, RiUserFill} from 'react-icons/ri';
import {MdWorkHistory, MdChat} from 'react-icons/md';

const Nav = () => {
  return (
    <nav>
      <a class="active" href="#"><FaHome/></a>
      <a href="#about"><RiUserFill/></a>
      <a href="#experience"><MdWorkHistory/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><MdChat/></a>

    </nav>
  )
}

export default Nav