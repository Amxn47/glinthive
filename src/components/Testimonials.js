// src/components/Testimonials.js
import React from 'react';
import '../styles/Testimonials.css';
import '../styles/root.css';

function Testimonials() {
    const testimonials = [
        {
            logo: '/amazon.png', // Replace with actual paths in public folder
            company: 'Amazon',
            text: 'Glint Hive transformed our digital presence with stunning designs and seamless strategies.',
        },
        {
            logo: '/adobe.png',
            company: 'Adobe',
            text: 'Their team delivered beyond expectations, boosting our engagement overnight.',
        },
        {
            logo: '/tesla.png',
            company: 'Tesla',
            text: 'Creative, reliable, and results-driven—our brand soared thanks to Glint Hive.',
        },
        {
            logo: '/discord.png',
            company: 'Discord',
            text: 'Exceptional service and innovative solutions that truly elevated our business.',
        },
    ];

    return (
        <section className="testimonials">
            <h2>Voices of Success</h2>
            <div className="testimonials-slider">
                <div className="slider-track">
                    {testimonials.concat(testimonials).map((testimonial, index) => ( // Duplicate for seamless loop
                        <div className="testimonial-card" key={index}>
                            <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="testimonial-logo" />
                            <h3>{testimonial.company}</h3>
                            <p>"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;