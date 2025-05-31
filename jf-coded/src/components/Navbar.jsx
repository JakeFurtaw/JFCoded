import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';  // Make sure this path is correct based on your project structure

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}end>Home</NavLink>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}end>Virtual Resume</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}end>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}end>Contact</NavLink>
            {/* <NavLink to="/setup" className={({ isActive }) => (isActive ? 'active' : '')}end>Services</NavLink> */}
        </nav>
    );
}

export default Navbar;
