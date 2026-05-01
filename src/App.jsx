import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Applications from './components/Applications';
import Quality from './components/Quality';
import WhyChooseUs from './components/WhyChooseUs';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Applications />
        <Quality />
        <WhyChooseUs />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
