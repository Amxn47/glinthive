// src/components/CTASection.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CTASection.css';
import '../styles/root.css';

function CTASection({ text, buttonText, link }) {
    return (
        <section className="cta-section">
            <video autoPlay loop muted playsInline className="cta-background-video">
                <source src="/logo-animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="cta-content">
                <h2>{text}</h2>
                <Link to={link} className="cta-button">
                    {buttonText}
                    <img src="/arrow.png" alt="Arrow" className="arrow" />
                </Link>
            </div>
        </section>
    );
}

export default CTASection;