import React from 'react';
import './Nav.css';
import Topbar from './Topbar';
import Logo from '../../../../images/logo.png';
import CustomLink from './CustomLink';

const Nav = () => {
  return (
    <div className='nav-container'>
      <Topbar></Topbar>
      <nav className='navbar'>
        <div className="brand-logo">
          <img src={Logo} alt="Online Tutor" />
        </div>
        <div className='menu-items'>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/cources">Cources</CustomLink>
          <CustomLink to="/aboutme">About me</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;