import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  
  const navigate = useNavigate(); // Initialize navigate hook

  // HQ Office coordinates (approximate for SAS Nagar, Mohali)
  const office = {
    name: 'HQ Office',
    address: 'Plot No.209 Ground Floor, Phase 5, Industrial Area, SAS Nagar',
    location: { lat: 30.704, lng: 76.704 },
    directionsUrl: 'https://maps.google.com/?q=Plot+No.209+Ground+Floor,Phase+5,Industrial+Area,SAS+Nagar',
  };

  const regionalContacts = [
    { region: 'Mohali, India', phone: '+91 95011 - 03113' },
    // { region: 'USA & CANADA', phone: '+1 631 306 4764' },
  ];

  const footerservices = [
    'Digital Marketing', 'Video Production', 'Web Development', 'Visual Effects',
    'CGI and VFX', 'Logo Design', 'Branding', 'Animated Video',
    'Social Media Mgmt', 'E-Commerce Dev', 'SEO', 'Animated Char.',
    'Media Production', 'SEM', 'UI Design', 'Website Design', 'Advertising', 'Content Creation',
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/company/glint-hive/", icon: "/linkedin.png", alt: "LinkedIn", label: "" },
    { href: "https://x.com/GlinthiveC", icon: "/twitter.png", alt: "Twitter", label: "" },
    { href: "https://www.facebook.com/photo/?fbid=122109213230281325&set=a.122109213284281325", icon: "/facebook.png", alt: "Facebook", label: "" },
    { href: "https://www.instagram.com/GlinthiveCreations", icon: "/instagram.png", alt: "Instagram", label: "" },
    { href: "https://wa.me/+919501103113", icon: "/whatsapp1.png", alt: "WhatsApp", label: "" },
    { href: "https://www.pinterest.com/GlinthiveCreations", icon: "/pinterest.png", alt: "Pinterest", label: "" },
    { href: "https://www.youtube.com/@GlinthiveCreations", icon: "/youtube.png", alt: "YouTube", label: "" },
    { href: "https://www.threads.net/@GlinthiveCreations", icon: "/threads.png", alt: "Threads", label: "" },
    { href: "#", icon: "/behance.png", alt: "Behance", label: "" },
    { href: "https://www.snapchat.com/add/Glinthive", icon: "/snapchat.png", alt: "Snapchat", label: "" },
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      setShowContactForm(false);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) setFormErrors({ ...formErrors, [name]: '' });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('hello@theboost.com');
    alert('Email copied to clipboard!');
  };

  // Handler for navigating to WhatWeDo page
  const handleServiceClick = () => {
    navigate('/whatWeDo');
  };

  return (
    <footer className="footer" aria-label="Website Footer">
      <div className="footer-overlay"></div>
      <div className="footer-container">
        <div className="map-section" aria-label="Reach Us Location">
          <h3 className="map-heading">Reach Us At</h3>
          <p className="map-subheading">Connect with us for any inquiries or support.</p>
          <div className="map-placeholder">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.939!2d76.7046933!3d30.7211097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzE2LjAiTiA3NsKwNDInMTYuOSJF!5e0!3m2!1sen!2sus!4v1697654321890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <a
            href={office.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: '#FFF', textDecoration: 'none' }}
          >
            Get Directions
          </a>
        </div>
      </div>

      <div className="contact-info" aria-label="Contact Information">
        <p>
          Email us: <a href="mailto:Glinthive@gmail.com" className="contact-email">Glinthive@gmail.com</a>
          <button
            onClick={copyToClipboard}
            aria-label="Copy email to clipboard"
            style={{ marginLeft: '10px', color: '#FFC107', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}
          >
            Copy
          </button>
        </p>
        <button className="footer-contact-button" onClick={() => navigate("/contact")}>Contact Us</button>
      </div>

      <div className="regional-contacts" aria-label="Regional Contacts">
        {regionalContacts.map((contact, index) => (
          <div key={index} className="region">
            {contact.region} <span>{contact.phone}</span>
          </div>
        ))}
      </div>

      <div className="footerservices-grid" aria-label="Footer Services">
        {footerservices.map((service, index) => (
          <div
            key={index}
            className="footerservices"
            onClick={handleServiceClick} // Added click handler
            role="button" // Accessibility improvement
            tabIndex={0} // Make it keyboard-focusable
            onKeyPress={(e) => e.key === 'Enter' && handleServiceClick()} // Keyboard accessibility
            aria-label={`Learn more about ${service}`}
          >
            {service}
          </div>
        ))}
      </div>

      <div className="social-grid" role="list">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={`Visit our ${social.alt} page`}
          >
            <img src={social.icon} alt={social.alt} loading="lazy" />
            <span className="social-label">{social.label}</span>
          </a>
        ))}
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Made by Glinthive - Digital Agency{' '}
          <a href="https://maps.app.goo.gl/uLaZroDeymXP4i57" target="_blank" rel="noopener noreferrer">
            All Rights Reserved
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;