// src/components/WhyChooseUs.js
import React from 'react';
import '../styles/WhyChooseUs.css';
import '../styles/root.css';
function WhyChooseUs() {
    const tiles = [
        {
            title: "Business Growth",
            image: '/chart.png', // Adjusted for public folder
            alt: "Business Growth",
            description: "Drive revenue and expand your reach with proven strategies."
        },
        {
            title: "Affordable",
            image: '/wallet.png',
            alt: "Affordable",
            description: "Cost-effective solutions tailored to your budget."
        },
        {
            title: "Quick Service",
            image: '/rocket.png',
            alt: "Quick Service", // Fixed typo
            description: "Fast delivery without compromising quality."
        },
        {
            title: "Result Driven Approach",
            image: '/flag.png',
            alt: "Result Driven Approach",
            description: "Focused on delivering measurable outcomes."
        },
        {
            title: "Industry Experts",
            image: '/medal.png',
            alt: "Industry Experts",
            description: "Expertise from seasoned professionals."
        },
        {
            title: "Client Centric Approach",
            image: '/thumbsup.png',
            alt: "Client Centric Approach",
            description: "Your needs guide every decision."
        },
        {
            title: "Customized Strategies",
            image: '/lab.png',
            alt: "Customized Strategies",
            description: "Tailored plans for your unique goals."
        },
        {
            title: "Market Strategy",
            image: '/target.png',
            alt: "Market Strategy",
            description: "Targeted tactics to boost your market presence."
        },
        {
            title: "Modern Design",
            image: '/brush.png',
            alt: "Modern Design",
            description: "Sleek, cutting-edge design solutions."
        },
        {
            title: "Creative Design",
            image: '/paint.png',
            alt: "Creative Design",
            description: "Innovative visuals that stand out."
        },
        {
            title: "User Support",
            image: '/chatbubble.png',
            alt: "User Support", // Fixed capitalization
            description: "Reliable assistance whenever you need it."
        },
        {
            title: "Secure",
            image: '/shield.png',
            alt: "Secure",
            description: "Robust security for your peace of mind."
        }
    ];

    return (
        <section className="why-choose-us">
            <h2>Why Choose Us?</h2>
            <div className='wcu-grid'>
                {tiles.map((tiles, index) => (
                    <div className="wcu-card" key={index}>
                        <img
                            src={tiles.image}
                            alt={tiles.alt}
                            className="wcu-image"
                        />
                        <div className="wcu-content">
                            <h3>{tiles.title}</h3>
                            <p>{tiles.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyChooseUs;