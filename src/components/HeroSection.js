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
                        <p className='mobile-show'>Social Media | Website Development | Mobile Marketing | Graphic Designing</p>
                        <button className='mobile-hide'>Social Media</button>
                        <button className='mobile-hide'>Website Development</button>
                        <button className='mobile-hide'>Mobile Marketing</button>
                        <button className='mobile-hide'>Graphic Designing</button>
                    </div>
                    <div className='cta'>
                        {cta1 && <Link to={cta1.link} className='cta-btn-main'>{cta1.text}
                            <img src='/arrow.png' alt='arrow' className='arrow'></img></Link>}
                        {cta2 && <Link to={cta2.link} className='cta-btn-secnd'>{cta2.text}
                            <img src='/arrow.png' alt='arrow' className='arrow'></img></Link>}
                    </div>
                </div>
                <div className='hero-img mobile-hide'>
                    <img src='./rocket.png' alt=''></img>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;