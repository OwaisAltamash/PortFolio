import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/myp2-removebg-previeww.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='head'>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Owais Altamash</h1>
        <h5 className="text-light">
          Mern Stack Developer
        </h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;