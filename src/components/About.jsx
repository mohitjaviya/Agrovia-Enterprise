import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './About.css';

import spicesImg     from '../assets/red_chilli_powder.png';
import dehydratedImg from '../assets/onion_flakes.png';
import honeyImg      from '../assets/natural_honey.png';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Cultivating Excellence for the Global Market</h2>
            <div className="title-underline"></div>
            
            <p className="about-description">
              Agrovia Enterprise is a premier global exporter specializing in top-tier dehydrated onion, garlic, authentic spices, and pure natural honey. Founded with a vision to connect local farms with international markets, we ensure that every flake, granule, powder, and jar of honey retains its natural essence.
            </p>
            
            <p className="about-description">
              Our state-of-the-art processing facilities and stringent quality control measures guarantee that our products meet the highest global standards, serving culinary and industrial needs worldwide.
            </p>

            <ul className="about-list">
              <li>
                <CheckCircle2 className="check-icon" />
                <span>Ethically sourced from sustainable farms</span>
              </li>
              <li>
                <CheckCircle2 className="check-icon" />
                <span>Advanced dehydration technology</span>
              </li>
              <li>
                <CheckCircle2 className="check-icon" />
                <span>Uncompromising hygiene and safety standards</span>
              </li>
              <li>
                <CheckCircle2 className="check-icon" />
                <span>Timely global delivery network</span>
              </li>
            </ul>
          </div>
          
          <div className="about-visuals">
            <div className="visual-card visual-card-1"
              style={{ backgroundImage: `url(${spicesImg})` }}>
              <div className="visual-overlay">
                <span className="vc-tag">Premium Spices</span>
                <h3>Red Chilli Powder</h3>
                <p>Vibrant colour · Multiple heat levels</p>
              </div>
            </div>
            <div className="visual-card visual-card-2"
              style={{ backgroundImage: `url(${dehydratedImg})` }}>
              <div className="visual-overlay">
                <span className="vc-tag">Dehydrated Vegetables</span>
                <h3>Onion Flakes</h3>
                <p>Crispy · 24-month shelf life</p>
              </div>
            </div>
            <div className="visual-card visual-card-3"
              style={{ backgroundImage: `url(${honeyImg})` }}>
              <div className="visual-overlay">
                <span className="vc-tag">Natural Honey</span>
                <h3>Pure Raw Honey</h3>
                <p>No additives · Golden amber</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
