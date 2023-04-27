import React from 'react';
import './navbar.css';

        
function Navbar() {
  return (
    <nav>
      <input id="nav-toggle" type="checkbox" />
      <img className="logo" src="logo.png" alt="" style={{width: "100px"}} />
      <ul className="links">
        <li><a href='#'>HOME</a></li>
        <li><a href="/aboutus">ABOUT US </a></li>
        <li><a href="#work">STOCKS</a></li>
        <li><a href="/blog">BLOG</a></li>
        <div className="banner-btn-n">
          <a href="/login"><span></span>LOGIN</a> 
        </div>
      </ul>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
  );
}

export default Navbar;






