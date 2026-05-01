import React from 'react';
import { Shield, Truck, Award, Sprout } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: 'Uncompromising Quality',
      desc: 'Our products undergo rigorous testing to ensure they meet the highest international food safety standards.'
    },
    {
      icon: <Sprout size={32} />,
      title: 'Sustainable Sourcing',
      desc: 'We partner directly with farmers, promoting sustainable agricultural practices and fair trade.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Reliable Processing',
      desc: 'State-of-the-art dehydration and grinding technologies preserve the natural aroma, color, and taste.'
    },
    {
      icon: <Truck size={32} />,
      title: 'Global Logistics',
      desc: 'A robust supply chain network ensuring timely and secure delivery to any destination worldwide.'
    }
  ];

  return (
    <section id="why-us" className="section-padding why-us-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Why Choose Agrovia</h2>
          <p className="section-subtitle">
            Partnering with Agrovia Enterprise means choosing reliability, premium quality, and a commitment to agricultural excellence.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
