// src/components/WhyChooseUs.js
import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const [hoveredCircle, setHoveredCircle] = useState(null);
  const [clickedCircle, setClickedCircle] = useState(null);
  const orbitRefs = useRef({});
  const [particles, setParticles] = useState([]);

  const orbitingCircles = [
    { id: 'fast-delivery', message: 'Fast Delivery Times', orbit: 1 },
    { id: 'customer-satisfaction', message: 'Customer Satisfaction', orbit: 1 },
    { id: 'top-rated', message: 'Top-Rated Services', orbit: 2 },
    { id: 'innovative', message: 'Innovative Solutions', orbit: 2 },
    { id: 'secure', message: 'Secure Transactions', orbit: 2 },
    { id: 'creative', message: 'Creative Ideas', orbit: 2 },
    { id: 'global', message: 'Global Reach', orbit: 3 },
    { id: 'community', message: 'Community Support', orbit: 3 },
    { id: 'growth', message: 'Proven Growth', orbit: 3 },
    { id: 'award', message: 'Award-Winning Team', orbit: 3 },
    { id: 'strategies', message: 'Customized Strategies', orbit: 2 },
    { id: 'experts', message: 'Industry Experts', orbit: 3 },
    { id: 'client-centric', message: 'Client-Centric Approach', orbit: 1 },
  ];

  const gridTiles = [
    {
      title: "Business Growth",
      image: '/chart.png',
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
      alt: "Quick Service",
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
      alt: "User Support",
      description: "Reliable assistance whenever you need it."
    },
    {
      title: "Secure",
      image: '/shield.png',
      alt: "Secure",
      description: "Robust security for your peace of mind."
    }
  ];

  const orbits = [1, 2, 3];

  const generateParticles = useCallback(() => {
    const particleCount = Math.min(Math.floor(window.innerWidth / 100), 20);
    setParticles(
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: `${(i / particleCount) * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${i * 0.5}s`,
      }))
    );
  }, []);

  useEffect(() => {
    generateParticles();
    const handleResize = debounce(generateParticles, 200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateParticles]);

  const handleHover = useCallback((isHovering, orbitLevel) => {
    const orbitElement = orbitRefs.current[orbitLevel];
    if (orbitElement) {
      orbitElement.style.animationPlayState = isHovering ? 'paused' : 'running';
    }
  }, []);

  const handleClick = useCallback((circleId, orbitLevel) => {
    setClickedCircle(prev => {
      const newState = prev === circleId ? null : circleId;
      handleHover(newState === circleId, orbitLevel);
      return newState;
    });
  }, [handleHover]);

  const handleOutsideClick = useCallback((e) => {
    if (!e.target.closest('.hint')) {
      setClickedCircle(null);
      orbits.forEach(orbitLevel => handleHover(false, orbitLevel));
    }
  }, [handleHover]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [handleOutsideClick]);

  return (
    <section className="why-choose-us-wrapper">
      <div className="particle-background">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
      <div className="why-choose-us-wrapper-content">
        <h2>Why Choose Us?</h2>
        <div className="why-choose-us-container">
          <div className='background-circle'></div>
          {orbits.map(orbitLevel => {
            const orbitCircles = orbitingCircles.filter(circle => circle.orbit === orbitLevel);
            return (
              <div
                key={orbitLevel}
                className={`orbit-container orbit-${orbitLevel}`}
                ref={el => orbitRefs.current[orbitLevel] = el}
              >
                <div className={`orbit-path orbit-path-${orbitLevel}`} />
                {orbitCircles.map((circle, index) => {
                  const angle = (index / orbitCircles.length) * 360;
                  const circleId = circle.id;
                  return (
                    <div
                      key={circleId}
                      className={`hint orbit-level-${orbitLevel} ${clickedCircle === circleId ? 'clicked' : ''}`}
                      style={{ transform: `rotate(${angle}deg) translate(${orbitLevel * 100}px)` }}
                      onMouseEnter={() => {
                        setHoveredCircle(circleId);
                        handleHover(true, orbitLevel);
                      }}
                      onMouseLeave={() => {
                        setHoveredCircle(null);
                        if (clickedCircle !== circleId) handleHover(false, orbitLevel);
                      }}
                      onClick={e => {
                        e.stopPropagation();
                        handleClick(circleId, orbitLevel);
                      }}
                    >
                      <span className="hint-dot" />
                      {(hoveredCircle === circleId || clickedCircle === circleId) && (
                        <div className={`hint-content orbit-level-${orbitLevel}`}>
                          <p>{circle.message}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="wcu-grid">
          {gridTiles.map((tile, index) => (
            <div className="wcu-card" key={index}>
              <img
                src={tile.image}
                alt={tile.alt}
                className="wcu-image"
              />
              <div className="wcu-content">
                <h3>{tile.title}</h3>
                <p>{tile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default WhyChooseUs;