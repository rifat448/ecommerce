import React, { useState } from 'react';
import  './header.scss';
import SearchBar from './SearchBar';
import { 
  ShoppingCart,
  User,
 } from 'react-feather';



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
          <SearchBar />
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="navlink">
              <a href="#" > 
                <span><ShoppingCart className="navbarIcon" /></span>
                <span>Cart</span>
              </a>
            </div>
            <div className="navlink">
              <a href="#" > 
                <span><User className="navbarIcon" /></span>
                <span>Signin</span>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}
