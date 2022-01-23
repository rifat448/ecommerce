import React from 'react';
import CategoryMenu from './../landingPage/categories/CategoryMenu';
import Banner from './../landingPage/banner/Banner';

export default function LandingPage(props) {
  return (
    <div className='landingPage'>
        <div className={`content ${props.menuOpen ? "active" : ""}`}>
            <div className="leftContentBlock">
                <CategoryMenu menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
            </div>
            <div className="rightContentBlock">
                <Banner />
            </div>
        </div>
    </div>
  );
}
