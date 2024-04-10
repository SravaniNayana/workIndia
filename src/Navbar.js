// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        Movies
      </div>
      <div className="navbar-links">
        <Link to="/homepage" className="navbar-link">Popular</Link>
        <Link to="/top-rated" className="navbar-link">Top Rated</Link>
        <Link to="/upcoming" className="navbar-link">Upcoming</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
    </nav>
  );
}

export default Navbar;