// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

function Home() {
  return (
    <div className='home-container'>
      <HeroSection
        headline="Let Your Brand Fly with"
        headline1="Glint Hive Creations 🚀"
        cta1={{ text: 'Get a Free Consultation', link: '/contact' }}
        cta2={{ text: 'See Our Work', link: '/portfolio' }}
      />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection text="Let’s Elevate Your Business Together!" buttonText="Get in Touch" link="/contact" />
    </div>
  );
}

export default Home;