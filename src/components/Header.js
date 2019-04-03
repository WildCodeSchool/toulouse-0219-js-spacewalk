import React from 'react';
import headerImage from './images/header.jpg';

const Header = () => (
  <header>
    <div className="containerFluid mx-auto">
      <img src={headerImage} alt="Dark blue starry sky" className="img-fluid" />
    </div>
  </header>

);

export default Header;
