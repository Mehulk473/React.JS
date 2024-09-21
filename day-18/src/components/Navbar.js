import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <h1>Bank Management System</h1>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
