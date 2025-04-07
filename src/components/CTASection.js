// src/components/CTASection.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CTASection.css';
import '../styles/root.css';

function CTASection({ text, buttonText, link }) {
    return (
        <section className="cta-section">
          
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