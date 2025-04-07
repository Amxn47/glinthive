// src/components/Navbar.js
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';
import '../styles/Navbar.css';
import '../styles/root.css';

defineElement(lottie.loadAnimation);

function Navbar() {
    const lottieRef = useRef(null); // Ref for the <lord-icon> element
    const animationRef = useRef(null); // Store the Lottie animation instance

    // Initialize the Lottie animation when the component mounts
    useEffect(() => {
        if (lottieRef.current) {
            animationRef.current = lottie.loadAnimation({
                container: lottieRef.current, // The <lord-icon> element
                renderer: 'svg',
                loop: false, // Initially false, controlled manually
                autoplay: false, // Controlled manually
                path: '/wave.json', // Path to wave.json in public folder
            });

            // Cleanup animation on unmount
            return () => {
                if (animationRef.current) {
                    animationRef.current.destroy();
                }
            };
        }
    }, []);

    const handleMouseEnter = () => {
        if (animationRef.current) {
            animationRef.current.setLoop(true); // Enable looping
            animationRef.current.play(); // Start playing
        }
    };

    const handleMouseLeave = () => {
        if (animationRef.current) {
            animationRef.current.setLoop(false); // Disable looping
            animationRef.current.stop(); // Stop animation
        }
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src="./navlogo.png" alt="navlogo" />
                    </Link>
                </div>
                <div className="menu">
                    <Link to="/WhatWeDo" className="nav-link">
                        What We Do
                    </Link>
                    <Link to="/about" className="nav-link">
                        About Us
                    </Link>
                    <Link to="/portfolio" className="nav-link mobile-hide">
                        Portfolio
                    </Link>
                </div>
                <div>
                    <Link
                        to="/contact"
                        className="nav-cta"
                        onMouseEnter={handleMouseEnter} // Trigger on parent hover
                        onMouseLeave={handleMouseLeave} // Stop on parent hover end
                        style={{ display: 'flex', alignItems: 'center' }} // Flex to align text and animation
                    >
                        <span className="cta-text">Say Hi, Don't Be Shy</span>
                        <lord-icon
                            ref={lottieRef} // Attach ref to <lord-icon>
                            colors="primary:#333333"
                            stroke="bold"
                            style={{ width: '30px', height: '30px', marginLeft: '8px' }}
                        />
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;