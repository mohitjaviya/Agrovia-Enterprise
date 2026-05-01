import React from 'react';
import { ChefHat, ShoppingCart, Factory, Utensils } from 'lucide-react';
import './Applications.css';

const Applications = () => {
  const applications = [
    {
      icon: <Factory size={32} />,
      title: 'Food Processing',
      desc: 'Ideal for ready-to-eat meals, soups, sauces, and seasoning blends.'
    },
    {
      icon: <ChefHat size={32} />,
      title: 'Culinary & Restaurants',
      desc: 'Premium ingredients for chefs requiring consistent flavor profiles.'
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'Retail & Supermarkets',
      desc: 'Packaged for consumer markets with long shelf life.'
    },
    {
      icon: <Utensils size={32} />,
      title: 'Spice Blending',
      desc: 'Raw materials for commercial spice and masala manufacturers.'
    }
  ];

  return (
    <section id="applications" className="section-padding applications-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Applications</h2>
          <p className="section-subtitle">
            Our premium dehydrated vegetables and spices serve diverse industries globally.
          </p>
        </div>

        <div className="applications-grid">
          {applications.map((app, index) => (
            <div key={index} className="application-card">
              <div className="application-icon">{app.icon}</div>
              <h3 className="application-title">{app.title}</h3>
              <p className="application-desc">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
