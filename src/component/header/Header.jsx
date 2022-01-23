import React, { useState } from 'react';
import  './header.scss';

export default function Header(props) {

  return (
    <div className="header">
        <div className="left">
          <div className={`hamburger ${props.menuOpen ? "active" : ""}`} onClick={() => props.setMenuOpen(!props.menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          <img src="assets/images/eSellerLogo.png" alt="logo" />
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="navlink">
              <a href="#"> Signin </a>/
              <a href="#">&nbsp;Register </a>
            </div>
          </div>
        </div>
    </div>
  );
}
