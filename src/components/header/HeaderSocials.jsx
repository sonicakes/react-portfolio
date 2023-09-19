import React from 'react';
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='linkedin'>
            <BsLinkedin />
        </a>
        <a href='github'>
            <BsGithub />
        </a>
        <a href="facebook">
        <BsFacebook />
        </a>
    </div>
  )
}

export default HeaderSocials