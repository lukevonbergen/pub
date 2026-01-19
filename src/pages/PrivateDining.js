import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function PrivateDining() {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el, index) => {
      el.id = el.id || `reveal-${index}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleElements.has(id);

  return (
    <>
      <Helmet>
        <title>Private Dining | The Crown & Thistle - Traditional British Pub</title>
        <meta name="description" content="Host your private event at The Crown & Thistle. Our private dining room accommodates up to 30 guests for intimate dinners, celebrations, and corporate events." />
      </Helmet>

      {/* Hero Section - Shorter for subpage */}
      <div className="hero-wrapper">
        <section className="hero hero-short">
          <div
            className="hero-background"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          />
          <div className="hero-overlay" />
          <div className="hero-content hero-content-center animate-fade-in-up">
            <h1 className="hero-title">Private Dining</h1>
            <p className="hero-description hero-description-center">
              Memorable occasions deserve a special setting
            </p>
          </div>
        </section>
      </div>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="intro-grid">
          <div className={`intro-image reveal ${isVisible('reveal-0') ? 'visible' : ''}`} id="reveal-0">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Private dining room with elegant table setting"
            />
          </div>
          <div className={`intro-content reveal ${isVisible('reveal-1') ? 'visible' : ''}`} id="reveal-1">
            <h2 className="intro-title">
              The Thistle Room
            </h2>
            <p className="intro-text">
              Our private dining room provides an intimate setting for your special occasions. Whether you're planning a birthday celebration, an anniversary dinner, a corporate lunch, or a family gathering, The Thistle Room offers the perfect blend of privacy and atmosphere.
            </p>
            <p className="intro-text">
              With its oak panelling, period features, and views over the garden, The Thistle Room retains all the charm of a traditional British pub while offering complete privacy for you and your guests.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Features Section */}
      <section className="private-dining-features">
        <div className="features-container">
          <div className={`reveal ${isVisible('reveal-2') ? 'visible' : ''}`} id="reveal-2">
            <h2 className="features-title">What We Offer</h2>
          </div>

          <div className="features-grid">
            <div className={`feature-card reveal ${isVisible('reveal-3') ? 'visible' : ''}`} id="reveal-3">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>Up to 30 Guests</h3>
              <p>Seated dinner for up to 30 guests around our beautiful oak table, or standing reception for 40.</p>
            </div>

            <div className={`feature-card reveal ${isVisible('reveal-4') ? 'visible' : ''}`} id="reveal-4">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3>Bespoke Menus</h3>
              <p>Our chef will work with you to create a custom menu tailored to your preferences and dietary requirements.</p>
            </div>

            <div className={`feature-card reveal ${isVisible('reveal-5') ? 'visible' : ''}`} id="reveal-5">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3>Complete Privacy</h3>
              <p>Your own dedicated space with private entrance, ensuring a truly exclusive experience for your party.</p>
            </div>

            <div className={`feature-card reveal ${isVisible('reveal-6') ? 'visible' : ''}`} id="reveal-6">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3>Celebrations</h3>
              <p>From birthday cakes to champagne, we can arrange all the special touches for your celebration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="banner-wrapper">
        <section className="banner">
          <div
            className="banner-bg"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1529543544277-750e1a2eb56f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          />
          <div className="banner-overlay" />
          <div className="banner-content">
            <h2 className="font-serif italic">"Perfect for every occasion"</h2>
            <p>
              From intimate dinners to milestone celebrations, corporate lunches to engagement parties, The Thistle Room provides the perfect backdrop for your special event.
            </p>
          </div>
        </section>
      </div>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Sample Menus Section */}
      <section className="intro-section">
        <div className="intro-grid intro-grid-reverse">
          <div className={`intro-content reveal ${isVisible('reveal-7') ? 'visible' : ''}`} id="reveal-7">
            <h2 className="intro-title">
              Sample Menus
            </h2>
            <p className="intro-text">
              Our private dining menus feature the best of British cuisine, from elegant canapé receptions to sumptuous three-course dinners. We use only the finest seasonal, locally-sourced ingredients.
            </p>
            <p className="intro-text">
              Set menus start from £35 per person for lunch and £45 per person for dinner, with drinks packages available to suit all budgets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menus" className="btn btn-dark">View Sample Menus</Link>
            </div>
          </div>
          <div className={`intro-image reveal ${isVisible('reveal-8') ? 'visible' : ''}`} id="reveal-8">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Beautifully plated dish"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="private-dining-pricing">
        <div className="pricing-container">
          <div className={`reveal ${isVisible('reveal-9') ? 'visible' : ''}`} id="reveal-9">
            <h2 className="pricing-title">Packages</h2>
            <p className="pricing-description">
              We offer flexible packages to suit your needs and budget.
            </p>
          </div>

          <div className="pricing-grid">
            <div className={`pricing-card reveal ${isVisible('reveal-10') ? 'visible' : ''}`} id="reveal-10">
              <h3>Lunch</h3>
              <div className="pricing-amount">From £35<span>/person</span></div>
              <ul>
                <li>Room hire included</li>
                <li>3-course set menu</li>
                <li>Coffee & petits fours</li>
                <li>Dedicated server</li>
                <li>Available 12-4pm</li>
              </ul>
            </div>

            <div className={`pricing-card pricing-card-featured reveal ${isVisible('reveal-11') ? 'visible' : ''}`} id="reveal-11">
              <h3>Dinner</h3>
              <div className="pricing-amount">From £45<span>/person</span></div>
              <ul>
                <li>Room hire included</li>
                <li>Canapé reception</li>
                <li>3-course set menu</li>
                <li>Coffee & petits fours</li>
                <li>Dedicated server</li>
                <li>Available from 6pm</li>
              </ul>
            </div>

            <div className={`pricing-card reveal ${isVisible('reveal-12') ? 'visible' : ''}`} id="reveal-12">
              <h3>Drinks Packages</h3>
              <div className="pricing-amount">From £25<span>/person</span></div>
              <ul>
                <li>Welcome drink</li>
                <li>Wine with meal</li>
                <li>Toast drink</li>
                <li>Premium options available</li>
                <li>Bespoke packages on request</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="private-dining-contact">
        <div className="contact-container">
          <div className={`reveal ${isVisible('reveal-13') ? 'visible' : ''}`} id="reveal-13">
            <h2>Make an Enquiry</h2>
            <p>
              Ready to start planning your event? Get in touch with our events team to discuss your requirements and check availability.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:events@crownandthistle.co.uk">events@crownandthistle.co.uk</a>
              </div>
              <div className="contact-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+442071234567">020 7123 4567</a>
              </div>
            </div>
            <Link to="/contact" className="btn btn-light mt-8">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="section-spacer"></div>
    </>
  );
}

export default PrivateDining;
