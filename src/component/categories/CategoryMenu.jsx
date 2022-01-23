import React from 'react';
import './categoryMenu.scss'

export default function CategoryMenu(props) {
  return (
    <div className="categoryMenu">
        <div className={`wrapper ${props.menuOpen ? "active" : ""}`}>
            <div className="categoryContent">
                <ul>
                    <li>Men's Fashion</li> <br />
                    <li>Women's Fashion</li><br />
                    <li>Electronics</li><br />
                    <li>Beauty Health</li><br />
                    <li>Baby and Toys</li><br />
                    <li>Watches and Accessories</li><br />
                    <li>Sports and Outdors</li><br />
                    <li>Home Appliances</li><br />
                    <li>Men's Fashion</li><br />
                    <li>Women's Fashion</li><br />
                    <li>Electronics</li><br />
                    <li>Beauty Health</li><br />
                    <li>Baby and Toys</li><br />
                    <li>Watches and Accessories</li><br />
                    <li>Sports and Outdors</li><br />
                    <li>Home Appliances</li><br />
                    <li>Men's Fashion</li><br />
                    <li>Women's Fashion</li><br />
                    <li>Electronics</li><br />
                    <li>Beauty Health</li><br />
                    <li>Baby and Toys</li><br />
                    <li>Watches and Accessories</li><br />
                    <li>Sports and Outdors</li><br />
                    <li>Home Appliances</li><br />
                    <li>Men's Fashion</li><br />
                    <li>Women's Fashion</li><br />
                    <li>Electronics</li><br />
                    <li>Beauty Health</li><br />
                    <li>Baby and Toys</li><br />
                    <li>Watches and Accessories</li><br />
                    <li>Sports and Outdors</li><br />
                    <li>Home Appliances</li><br />
                </ul>
            </div>
        </div>
    </div>
  );
}
