import React from 'react';
import { CheckCircle, Award, Microscope, Leaf } from 'lucide-react';
import './Quality.css';

const Quality = () => {
  const certifications = [
    { label: 'FSSAI Certified', icon: <Award size={28} /> },
    { label: 'ISO 22000', icon: <CheckCircle size={28} /> },
    { label: 'HACCP Compliant', icon: <Microscope size={28} /> },
    { label: 'Organic Sourcing', icon: <Leaf size={28} /> },
  ];

  return (
    <section id="quality" className="section-padding quality-section">
      <div className="container">
        <div className="quality-grid">
          <div className="quality-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Our Quality Standards</h2>
            <p className="quality-desc">
              At Agrovia Enterprise, quality is not a checkbox — it's our foundation. Every batch of our dehydrated vegetables and spices goes through a multi-stage quality control process from farm sourcing to final packaging.
            </p>
            <ul className="quality-list">
              <li><CheckCircle size={20} /> Rigorous moisture and contamination testing</li>
              <li><CheckCircle size={20} /> Traceability from farm to shipment</li>
              <li><CheckCircle size={20} /> Cold-chain logistics to maintain freshness</li>
              <li><CheckCircle size={20} /> International food safety compliance</li>
            </ul>
          </div>
          <div className="quality-certs">
            <h3 className="certs-title">Our Certifications</h3>
            <div className="certs-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-icon">{cert.icon}</div>
                  <span className="cert-label">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
