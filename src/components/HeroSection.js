// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css'
import '../styles/root.css'

function HeroSection({ headline, headline1, cta1, cta2 }) {
    return (
        <section className="hero-section">
            <div className='hero-section-width'>
                <div className='hero-cta'>
                    <h1>{headline}</h1>
                    <h1>{headline1}</h1>
                    <div className='subheadline'>
                        <button>Social Media</button>
                        <button>Website Development</button>
                        <button>Mobile Marketing</button>
                        <button>Graphic Designing</button>
                    </div>
                    <div className='cta'>
                        {cta1 && <Link to={cta1.link} className='cta-btn-main'>{cta1.text}
                            <img src='/arrow.png' alt='arrow' className='arrow'></img></Link>}
                        {cta2 && <Link to={cta2.link} className='cta-btn-secnd'>{cta2.text}
                            <img src='/arrow.png' alt='arrow' className='arrow'></img></Link>}
                    </div>
                </div>
                <div className='hero-img'>
                    <img src='./rocket.png' alt=''></img>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;