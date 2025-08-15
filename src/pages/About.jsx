// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import '../styles/root.css';

function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className='about-hero-left'>
                    <h2>About Glint Hive Creations</h2>
                    <h1>Where Innovation Meets Digital</h1>
                    <p>Founded by Pardeep Kaur Sandhu</p>
                    <p> We specialize in crafting unique digital experiences for businesses.</p>
                </div>
                <div className='about-hero-right mobile-hide'>
                    <img alt='' src='./book.png'></img>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="about-mission-vision">
                <div className="mission">
                    <img alt='' src='./target.png'></img>
                    <h2>Our Mission</h2>
                    <p>Helping businesses scale with data-driven digital marketing.</p>
                </div>
                <div className="vision">
                    <img alt='' src='./medal2.png'></img>
                    <h2>Our Vision</h2>
                    <p>To be a leading digital agency delivering creative & result-oriented solutions.</p>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="about-team">
                <div className="team-member">
                    <div className="team-member-content">
                        <img src="/sucess1.jpg" alt="co-founder" className="team-photo" />
                        <div className="team-mem-detail">
                            <h3>John Doe</h3>
                            <p>Co-Founder</p>
                            <p className="bio">
                                With a passion for digital innovation, Pardeep leads Glint Hive Creations to empower brands through strategic marketing and creative design.
                            </p>
                        </div>
                    </div>
                    <video autoPlay loop muted className="team-member-video mobile-hide">
                        <source src="/logo-animation.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="about-why-us">
                <h2>Why Work With Us?</h2>
                <div className="why-us-grid">
                    <div className="why-us-item">
                        <img alt='' src='./calendar.png'></img>
                        <h3>Proven Track Record</h3>
                        <p>Our success stories speak for themselves—delivering measurable results for clients across industries.</p>
                    </div>

                    <div className="why-us-item">
                        <img alt='' src='./chart2.png'></img>
                        <h3>360° Marketing Approach</h3>
                        <p>From strategy to execution, we cover every angle to ensure your brand thrives.</p>
                    </div>

                    <div className="why-us-item span-2">
                        <img alt='' src='./dollar.png'></img>
                        <h3>ROI-Focused Campaigns</h3>
                        <p>We prioritize your bottom line, crafting campaigns that maximize return on investment.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta">
                <Link to="/contact" className="cta-button">Get Started with Us<img alt='' src='./arrow.png' className='arrow'></img></Link>
            </section>
        </div>
    );
}

export default About;
