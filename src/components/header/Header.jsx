import React from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/me-portrait.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>How is it going?</h5>
      <h1>Sonia Parker</h1>
       
        <h5><span>Qualified</span> UX/UI Designer and <span>Experienced</span> Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="me-photo" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header