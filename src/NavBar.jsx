// src/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav-bar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/lessons">Lessons</Link></li>
      <li><Link to="/characters">Characters</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
  </nav>
);

export default NavBar;
