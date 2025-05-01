// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import '../styles/root.css'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className='logo'>
                    <Link to="/"><img src='./navlogo.png' alt='navlogo'></img></Link>
                </div>
                <div className='menu'>
                    <Link to="/" className='nav-link mobile-hide'>Home</Link>
                    <Link to="/about" className='nav-link'>About Us</Link>
                    <Link to="/services" className='nav-link'>Services</Link>
                    <Link to="/portfolio" className='nav-link mobile-hide'>Portfolio</Link>
                    <Link to="/contact" className='nav-link'>Contact Us</Link>
                </div>

            </nav>
        </>
    );
}

export default Navbar;