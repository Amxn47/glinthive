// src/pages/Portfolio.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PortfolioPage.css';
import '../styles/root.css';

function Portfolio() {
    const socialMediaImages = [
        { thumbnail: "/ig1.jpg", title: "Post 1" },
        { thumbnail: "/ig2.jpg", title: "Post 2" },
        { thumbnail: "/ig3.jpg", title: "Post 3" },
        { thumbnail: "/ig4.jpg", title: "Post 4" },
        { thumbnail: "/ig5.jpg", title: "Post 5" },
        { thumbnail: "/ig6.jpg", title: "Post 6" },
        { thumbnail: "/ig7.jpg", title: "Post 7" },
    ];

    const websiteDesignItems = [
        { thumbnail: "/website1.jpg", link: "#", title: "Tech Startup Site" },
        { thumbnail: "/website2.jpg", link: "#", title: "E-commerce Platform" },
        { thumbnail: "/website3.jpg", link: "#", title: "E-commerce Platform" },
        { thumbnail: "/website4.jpg", link: "#", title: "Tech Company Website" },
    ];

    const clientSuccessItems = [
        { 
            thumbnail: "/success1.jpg", 
            title: "John Doe", 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum sunt et enim possimus dolore a placeat quas repellendus ratione!" 
        },
        { 
            thumbnail: "/success2.jpg", 
            title: "Henna", 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum sunt et enim possimus dolore a placeat quas repellendus ratione!" 
        },
        { 
            thumbnail: "/success3.jpg", 
            title: "Charlie", 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum sunt et enim possimus dolore a placeat quas repellendus ratione!" 
        },
        { 
            thumbnail: "/success4.jpg", 
            title: "Jeff", 
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum sunt et enim possimus dolore a placeat quas repellendus ratione!" 
        },
    ];

    return (
        <div className="portfolio-page">
            {/* Hero Section */}
            <section className="portfolio-hero">
                <div className="portfolio-hero-left">
                    <h1>See the Magic We Create!</h1>
                    <p>Check out some of our recent projects across industries.</p>
                </div>
                <div className="portfolio-hero-right mobile-hide">
                    <img alt="" src="/change-management.png" />
                </div>
            </section>

            {/* Portfolio Showcase */}
            <section className="portfolio-showcase">
                {/* Social Media Posts */}
                <div className="portfolio-section social-section mobile-hide">
                    <h2>Social Media Posts</h2>
                    <div className="social-slider">
                        <div className="slider-track">
                            {socialMediaImages.map((item, idx) => (
                                <div className="portfolio-item" key={idx}>
                                    <img src={item.thumbnail} alt={item.title} className="social-thumbnail" />
                                </div>
                            ))}
                            {socialMediaImages.map((item, idx) => (
                                <div className="portfolio-item" key={`dup-${idx}`}>
                                    <img src={item.thumbnail} alt={item.title} className="social-thumbnail" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Website Design Screenshots */}
                <div className="portfolio-section website-section">
                    <h2>Website Design Screenshots</h2>
                    <div className="portfolio-grid website-grid">
                        {websiteDesignItems.map((item, idx) => (
                            <div className="portfolio-item website-card" key={idx}>
                                <Link to={item.link}>
                                    <img src={item.thumbnail} alt={item.title} className="website-thumbnail" />
                                    <div className="portfolio-overlay">
                                        <h3>{item.title}</h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Client Success Stories */}
                <div className="portfolio-section success-section">
                    <h2>Client Success Stories</h2>
                    <div className="success-flex">
                        {clientSuccessItems.map((item, idx) => (
                            <div className="success-card" key={idx}>
                                <img src={item.thumbnail} alt={item.title} className="success-thumbnail" />
                                <div className="success-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="portfolio-cta">
                <Link to="/contact" className="cta-button">
                    Want to be our next success story? Let’s Talk
                    <img src="/arrow.png" className="arrow" alt="" />
                </Link>
            </section>
        </div>
    );
}

export default Portfolio;