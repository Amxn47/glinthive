// src/components/ServicesOverview.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesOverview.css';
import '../styles/root.css';

function ServicesOverview() {
    const services = [
        {
            title: "Social Media Management",
            image: './likes.png',
            alt: "Social Media Management",
            description: "Grow your online presence with exper management of your social media platforms, engaging content, and targeted strategies."
        },
        {
            title: "Website Development",
            image: './webdev.png',
            alt: "Website Development",
            description: "Build a stunning, responsive website tailored to your brand, optimized for performance and user experience."
        },
        {
            title: "Mobile Marketing",
            image: './marketing.png',
            alt: "Mobile Marketing",
            description: "Reach your audience on the go with effective mobile campaigns, SMS marketing, and app-based promotions."
        },
        {
            title: "Graphic Designing",
            image: './gdes.png',
            alt: "Graphic Designing",
            description: "Create eye-catching visuals, from logos to marketing materials, designed to elevate your brand identity."
        }
    ];

    return (
        <section className="services-overview">
            <h2>Our Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img
                            src={service.image}
                            alt={service.alt}
                            className="service-image"
                        />
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p></div>
                        <div className="service-btn">
                            <Link
                                to="/services" className="explore-button">
                                Explore Services →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServicesOverview;