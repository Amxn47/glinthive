// src/pages/Contact.js
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/ContactPage.css';
import '../styles/root.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form data to console (replace with email/CRM integration)
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('Thank you! We’ll get back to you soon.');
    };

    return (
        <div className="contact-page">
            <div className='cntct'>
                {/* Hero Section */}
                <section className="contact-hero">
                    <h1>Let’s Build Something Amazing Together!</h1>
                    <p>Drop us a message & we’ll get back to you ASAP.</p>
                    <img alt='' src='/link.png' className='mobile-hide'></img>
                </section>

                {/* Contact Form */}
                <section className="contact-form-section">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name <span>*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your Phone Number"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message (Optional)"
                            />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </section>
            </div>

            {/* Direct Contact Details */}
            <section className="contact-details">
                <h2>Get in Touch</h2>
                <div className="details-grid">
                    <div className='cnt'>
                        <img alt='' src='/call.png' className='cnt-ico'></img>
                        <p>Phone: <a href="tel:+91 95011-03113">+91 95011-03113</a></p>
                    </div>
                    <div className='cnt'>
                        <img alt='' src='/sms.png' className='cnt-ico'></img>
                        <p>Email: <a href="mailto:glinthive@gmail.com">glinthive@gmail.com</a></p>
                    </div>
                    <div className='cnt'>
                        <img alt='' src='/map.png' className='cnt-ico'></img>
                        <div className='cnt-add'>
                            <p>Plot No. 209 Ground Floor, Phase 5,</p>
                            <p>Industrial Area, SAS Nagar</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Contact;