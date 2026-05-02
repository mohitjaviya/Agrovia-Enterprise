import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>Agrovia Enterprise</span>
            </div>
            <p className="footer-desc">
              Global leaders in the export of premium dehydrated onion, garlic, authentic spices, and pure wild forest honey. Delivering quality from farm to table.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#applications">Applications</a></li>
              <li><a href="#quality">Quality</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Gujarat, India</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 9979089901 / +91 9054771883</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>agroviaenterprise@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Agrovia Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
