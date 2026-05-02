import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          <img src="/agrovia_transparent.png" alt="Agrovia Enterprise Logo" className="logo-img" />
        </a>
        
        <div className="navbar-links desktop-only">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#products" className="nav-link">Our Products</a>
          <a href="#applications" className="nav-link">Applications</a>
          <a href="#quality" className="nav-link">Quality</a>
          <a href="#blogs" className="nav-link">Blogs</a>
          <a href="/brochure.pdf" download="Agrovia Enterprise Brochure.pdf" className="nav-link">Brochure</a>
          <a href="#contact" className="btn btn-primary nav-cta">Enquire Now</a>
        </div>

        <button 
          className="mobile-menu-btn mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
        <a href="#products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Our Products</a>
        <a href="#applications" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Applications</a>
        <a href="#quality" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Quality</a>
        <a href="#blogs" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Blogs</a>
        <a href="/brochure.pdf" download="Agrovia Enterprise Brochure.pdf" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Brochure</a>
        <a href="#contact" className="btn btn-primary mobile-nav-cta" onClick={() => setMobileMenuOpen(false)}>Enquire Now</a>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
