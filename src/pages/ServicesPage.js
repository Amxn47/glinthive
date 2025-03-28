// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesPage.css';
import '../styles/root.css';

function Services() {
    const services = [
        {
            title: "Social Media Management",
            subServices: [
                {
                    title: "Content Strategy",
                    icon: "/puzzle.png",
                    description: "Crafting tailored plans to boost your social media presence."
                },
                {
                    title: "Post Designing",
                    icon: "/mobile.png",
                    description: "Eye-catching visuals to engage your audience."
                },
                {
                    title: "Ads",
                    icon: "/ads.png",
                    description: "Targeted ad campaigns for maximum reach and ROI."
                },
                {
                    title: "Community Engagement",
                    icon: "/social.png",
                    description: "Building loyal followers through active interaction."
                }
            ]
        },
        {
            title: "Website Development",
            subServices: [
                {
                    title: "Custom Websites",
                    icon: "/webdev.png",
                    description: "Unique, responsive sites built for your brand."
                },
                {
                    title: "E-commerce",
                    icon: "/bag.png",
                    description: "Seamless online stores to drive sales."
                },
                {
                    title: "SEO",
                    icon: "/setting.png",
                    description: "Optimizing your site for top search rankings."
                },
                {
                    title: "Hosting",
                    icon: "/computer.png",
                    description: "Reliable hosting solutions for peak performance."
                }
            ]
        },
        {
            title: "Mobile Marketing",
            subServices: [
                {
                    title: "Bulk SMS",
                    icon: "/sms.png",
                    description: "Instant outreach with mass text messaging."
                },
                {
                    title: "IVR Calls",
                    icon: "/call.png",
                    description: "Automated calls for customer engagement."
                },
                {
                    title: "WhatsApp Marketing",
                    icon: "/whatsapp.png",
                    description: "Personalized campaigns via WhatsApp."
                }
            ]
        },
        {
            title: "Graphic Designing",
            subServices: [
                {
                    title: "Logos",
                    icon: "/pencil.png",
                    description: "Memorable logos to define your brand."
                },
                {
                    title: "Branding",
                    icon: "/cup.png",
                    description: "Consistent visuals for a strong identity."
                },
                {
                    title: "Creative Design",
                    icon: "/bucket.png",
                    description: "Innovative designs for all your needs."
                },
                {
                    title: "UI/UX",
                    icon: "/toggle.png",
                    description: "User-friendly interfaces for better experiences."
                }
            ]
        }
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className='services-hero-left'>
                    <h1>Your Success, Our Expertise!</h1>
                    <p>Explore our range of digital marketing solutions tailored for you.</p>
                </div>
                <div className='services-hero-right'>
                    <img alt='' src='/sun.png'></img>
                </div>
            </section>

            {/* Services List */}
            <section className="services-list">
                {services.map((service, index) => (
                    <div className="service-category" key={index}>

                        <h2>{service.title}</h2>
                        <div className="sub-services-grid">
                            {service.subServices.map((subService, idx) => (
                                
                                <div className="sub-service-item" key={idx}>
                                    <img src={subService.icon} alt={`${subService.title} icon`} className="sub-service-icon" />
                                    <h3>{subService.title}</h3>
                                    <p>{subService.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className="services-cta">
                <Link to="/contact" className="cta-button">
                    Let’s Talk About Your Needs<img alt='' className='arrow' src='/arrow.png'></img>
                </Link>
            </section>
        </div>
    );
}

export default Services;