import React from 'react';
import "./Header.css"
import logo from '../../assets/logo-peoples-purse.png';

function Header() {
  return (

    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  )
}

export default Header;