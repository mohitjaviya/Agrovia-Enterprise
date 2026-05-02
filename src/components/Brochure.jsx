import React from 'react';
import { Download, FileText } from 'lucide-react';
import './Brochure.css';

const Brochure = () => {
  return (
    <section id="brochure" className="section-padding brochure-section">
      <div className="container">
        <div className="brochure-container">
          <div className="brochure-content">
            <h2 className="section-title">Download Our Brochure</h2>
            <p className="brochure-desc">
              Get a comprehensive overview of our premium product range, quality certifications, and detailed specifications. Perfect for B2B partners and bulk buyers.
            </p>
            <a href="/brochure.pdf" download="Agrovia Enterprise Brochure.pdf" className="btn btn-primary btn-large brochure-btn">
              <Download size={20} /> Download PDF Brochure
            </a>
          </div>
          <div className="brochure-visual">
            <div className="brochure-mockup">
              <FileText size={80} className="brochure-icon" />
              <h3>Agrovia Enterprise</h3>
              <p>Product Catalog</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
