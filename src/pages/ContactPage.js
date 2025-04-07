// src/pages/Contact.js
import React, { useState } from 'react';
import '../styles/ContactPage.css';
import '../styles/root.css';

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        projectDetails: '',
        services: []
    });

    const servicesList = [
        'Digital Marketing And Advertising',
        'Web Design And Development',
        'CGI And VFX',
        'Social Media Management',
        'SEO',
        'Branding',
        'Media Production'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleServiceClick = (service) => {
        const updatedServices = formData.services.includes(service)
            ? formData.services.filter((s) => s !== service)
            : [...formData.services, service];
        setFormData({ ...formData, services: updatedServices });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            fullName: '',
            businessName: '',
            email: '',
            phone: '',
            projectDetails: '',
            services: []
        });
        alert('Thank you! We’ll get back to you soon.');
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>LET’S BUILD YOUR DIGITAL SUCCESS!</h1>
                <p>CONNECT WITH US !</p>
                <p>Complete our brief form, and our dedicated team will make things happen</p>
            </section>
            <div className="contact-form-container">
                <section className="contact-form-section">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>I'm interested in...</label>
                            <div className="services-grid">
                                {servicesList.map((service) => (
                                    <button
                                        key={service}
                                        type="button"
                                        className={`service-button ${formData.services.includes(service) ? 'selected' : ''}`}
                                        onClick={() => handleServiceClick(service)}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group half">
                                <label>Full Name <span>*</span></label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="form-group half">
                                <label>Business Name</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    placeholder="Business Name"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email <span>*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number <span>*</span></label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone Number"
                                defaultValue="+91"
                            />
                        </div>
                        <div className="form-group">
                            <label>Tell us about your project</label>
                            <textarea
                                name="projectDetails"
                                value={formData.projectDetails}
                                onChange={handleChange}
                                placeholder="Tell us about your project"
                            />
                        </div>
                        <button type="submit" class="footer-cta-button">SEND REQUEST<img alt='' class='arrow' src='/arrow.png'></img></button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Contact;