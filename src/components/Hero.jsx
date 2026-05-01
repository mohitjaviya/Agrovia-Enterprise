import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">

          <h1 className="hero-title">
            Premium Spices &<br />
            <span className="text-highlight">Dehydrated Vegetables & Honey</span>
          </h1>
          <p className="hero-subtitle">
            Agrovia Enterprise delivers the world's finest onion, garlic, and authentic spices from farm to global markets with uncompromising quality.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary btn-large">
              Explore Our Products <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn btn-outline btn-large">
              Learn More
            </a>
          </div>
        </div>
        
        <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="stat-item">
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">Natural Quality</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">Global</h3>
            <p className="stat-label">Export Network</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">Premium</h3>
            <p className="stat-label">Sourcing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
