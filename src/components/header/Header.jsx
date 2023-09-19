import React from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hi</h5>
        <h1>John Smith</h1>
        <h5 className="text-light">FE dev</h5>
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