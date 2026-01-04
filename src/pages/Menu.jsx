import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const starters = [
    { name: "Homemade Soup of the Day", description: "Served with crusty bread", price: "6.50" },
    { name: "Irish Soda Bread & Butter", description: "Freshly baked", price: "4.50" },
    { name: "Chicken Wings", description: "Choice of BBQ or Buffalo sauce", price: "8.50" },
    { name: "Loaded Nachos", description: "Cheese, jalapenos, salsa, sour cream", price: "9.00" },
    { name: "Garlic Mushrooms", description: "On toasted sourdough", price: "7.50" },
  ];

  const mains = [
    { name: "Annie's Irish Stew", description: "Slow-cooked lamb, root vegetables, served with crusty bread", price: "15.00" },
    { name: "Fish & Chips", description: "Beer-battered cod, mushy peas, tartare sauce", price: "14.50" },
    { name: "Beef & Guinness Pie", description: "Shortcrust pastry, creamy mash, seasonal veg", price: "15.00" },
    { name: "Bangers & Mash", description: "Cumberland sausages, onion gravy, garden peas", price: "13.50" },
    { name: "Chicken & Bacon Club", description: "Triple-decker, fries, coleslaw", price: "12.50" },
    { name: "8oz Burger", description: "Beef patty, brioche bun, lettuce, tomato, fries (add cheese/bacon +£1)", price: "14.00" },
    { name: "Veggie Burger", description: "Plant-based patty, brioche bun, fries", price: "13.00" },
  ];

  const sundayRoast = [
    { name: "Roast Beef", description: "With all the trimmings", price: "16.00" },
    { name: "Roast Chicken", description: "With all the trimmings", price: "15.00" },
    { name: "Roast Pork", description: "With crackling and all the trimmings", price: "15.00" },
  ];

  const sides = [
    { name: "Fries", price: "4.00" },
    { name: "Sweet Potato Fries", price: "4.50" },
    { name: "Onion Rings", price: "4.00" },
    { name: "Seasonal Vegetables", price: "4.50" },
    { name: "Side Salad", price: "4.00" },
  ];

  const desserts = [
    { name: "Sticky Toffee Pudding", description: "Vanilla ice cream", price: "7.00" },
    { name: "Apple Crumble", description: "Custard", price: "6.50" },
    { name: "Chocolate Brownie", description: "With cream", price: "6.50" },
  ];

  const MenuItem = ({ name, description, price }) => (
    <div className="menu-item">
      <div className="menu-item-info">
        <h4 className="menu-item-name">{name}</h4>
        {description && <p className="menu-item-description">{description}</p>}
      </div>
      <span className="menu-item-price">£{price}</span>
    </div>
  );

  return (
    <main>
      <Helmet>
        <title>Menu | Annie Twomey's - Irish Pub Southgate</title>
        <meta name="description" content="Traditional Irish fare and pub classics at Annie Twomey's. From hearty stews to Sunday roasts, enjoy comfort food done right in Southgate, London." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our Menu</h1>
          <p className="hero-location">Traditional Irish fare & pub classics</p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-dark menu-section">
        <div className="container">
          {/* Starters */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Starters</h2>
            {starters.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Mains */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Mains</h2>
            {mains.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Sunday Roast */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Sunday Roast <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>(Sundays Only)</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              All served with roast potatoes, Yorkshire pudding, seasonal vegetables and gravy
            </p>
            {sundayRoast.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Two Column - Sides & Desserts */}
          <div className="two-column" style={{ marginTop: '4rem' }}>
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Sides</h2>
              {sides.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            <div className="menu-category reveal">
              <h2 className="menu-category-title">Desserts</h2>
              {desserts.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Drinks Note */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'var(--secondary-bg)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Drinks</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              See our full drinks menu at the bar - wide selection of Irish whiskeys, craft beers, and Guinness on draught.
            </p>
          </div>

          {/* Allergy Note */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Please inform staff of any allergies. Menu items subject to availability.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
