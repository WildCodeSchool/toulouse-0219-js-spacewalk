import React from 'react';
import headerImage from './images/header-1.jpg';
import logo from './images/logo-spacewalk.svg';
import './header.css';

const Header = () => (
  <header>
    <div className="containerOverlay">
      <img src={headerImage} alt="Dark blue starry sky" className="imageHeader" />
    </div>
    <div><img src={logo} alt="Logo of the website : a rocket launching from Earth" className="overlay" /></div>
    <div className="display-1 titreOverlay text-white">SpaceWalk</div>
  </header>

);

export default Header;
