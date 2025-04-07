import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesOverview.css';
import '../styles/root.css';

function ServicesOverview() {
    const services = [
        {
            title: "Digital Marketing and Advertising",
            image: './digital-marketing.jpg',
            alt: "Digital Marketing and Advertising",
            captions: ["E-commerce Marketing","Pay-Per-Click Marketing", "Branding Management ", "Conversion Rate Optimization"]
        },
        {
            title: "Web Design and Development",
            image: './web-development.jpg',
            alt: "Web Design and Development",
            captions: ["Performance & Optimization", "Custom Web Projects", "Full-Stack Development"]
        },
        {
            title: "CGI and VFX",
            image: './cgi-vfx.jpg',
            alt: "CGI and VFX",
            captions: ["3D Animation & Modeling", "VFX in Film & Video Editing", "Motion Graphics & Simulations"]
        },
        {
            title: "Social Media Management",
            image: './Social-Media-Management.jpg',
            alt: "Social Media Management",
            captions: ["Growth & Engagement Tactics", "Content Creation", "Content Strategy & Social Media Marketing & Trends"]
        },
        {
            title: "Media-Production",
            image: './Media-Production.jpg',
            alt: "Media Production",
            captions: ["Photography", "Video Production", "Graphic Design & Branding"]
        },
        {
            title: "Branding",
            image: './branding.jpg',
            alt: "Branding",
            captions: ["Brand Identity Design", "Rebranding & Brand Evolution", "Corporate & Event Branding"]
        },
        {
            title: "SEO",
            image: './SEO.jpg',
            alt: "SEO",
            captions: ["SEO & Digital Marketing", "Web & App Projects", "Database & Security"]
        }
    ];

    const [currentCaptionIndices, setCurrentCaptionIndices] = useState(
        services.map(() => 0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCaptionIndices((prevIndices) =>
                prevIndices.map((index, i) => 
                    (index + 1) % services[i].captions.length
                )
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [services]);

    return (
        <section className="services-overview">
            <h2>Our Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="flip-card" key={index}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img
                                    src={service.image}
                                    alt={service.alt}
                                    className="service-image"
                                />
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <h3 className="back-title">{service.title}</h3>
                                <div className="dynamic-caption">
                                    {service.captions[currentCaptionIndices[index]]}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServicesOverview;