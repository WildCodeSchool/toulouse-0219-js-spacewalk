import React from 'react';
import headerImage from './images/header2.png';
import logo from './images/logo-spacewalk.svg';
import './header.css';

const Header = () => (
  <header>
    <div className="containerOverlay">
      <img src={headerImage} alt="Dark blue starry sky" className="imageHeader" />
    </div>
    <div><img src={logo} alt="Logo of the website : a rocket launching from Earth" className="overlayHeader" /></div>
    <div className="titreOverlay text-white">SpaceWalk</div>
  </header>

);

export default Header;
