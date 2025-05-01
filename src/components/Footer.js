// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import '../styles/root.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand mobile-hide">
                    <h3>Glint Hive Creations</h3>
                    <p>Empowering your brand to soar.</p>
                </div>
                <div className="footer-nav">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/" className='quicklink'>Home</Link></li>
                        <li><Link to="/about" className='quicklink'>About</Link></li>
                        <li><Link to="/services" className='quicklink'>Services</Link></li>
                        <li><Link to="/portfolio" className='quicklink'>Portfolio</Link></li>
                        <li><Link to="/contact" className='quicklink'>Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Connect With Us</h4>
                    <div className="social-icons">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/twitter.png" alt="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/company/glint-hive/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.png" alt="LinkedIn" />
                        </a>
                        <a href="https://www.instagram.com/glinthivecreations/" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Glint Hive Creations. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;