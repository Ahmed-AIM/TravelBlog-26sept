import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Travel Blog</Link>
        <SearchBar/>
        <span className="navbar-toggle" onClick={toggleNav}>&#9776;</span>
        <ul className={`navbar-nav ms-auto ${isNavOpen ? 'active' : ''}`}>
          <li><Link className="nav-link" to="/"> <FontAwesomeIcon icon={faHome} />Home</Link></li>
          <li><Link className="nav-link" to="/destinations">Destinations</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
          <li><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
