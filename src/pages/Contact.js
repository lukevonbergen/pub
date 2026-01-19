import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

function Contact() {
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
        <title>Contact & Reservations | The Crown & Thistle - Traditional British Pub</title>
        <meta name="description" content="Book a table at The Crown & Thistle in London. Contact us for reservations, private dining enquiries, or general questions." />
      </Helmet>

      {/* Hero Section - Shorter for subpage */}
      <div className="hero-wrapper">
        <section className="hero hero-short">
          <div
            className="hero-background"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571024057263-cb5bac78c9d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          />
          <div className="hero-overlay" />
          <div className="hero-content hero-content-center animate-fade-in-up">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-description hero-description-center">
              Book a table or get in touch
            </p>
          </div>
        </section>
      </div>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Booking Section */}
      <section className="contact-booking-section">
        <div className="contact-booking-container">
          <div className={`reveal ${isVisible('reveal-0') ? 'visible' : ''}`} id="reveal-0">
            <h2 className="contact-section-title">Book a Table</h2>
            <p className="contact-section-description">
              Reserve your table online using our booking system below, or call us directly for same-day reservations.
            </p>
          </div>

          {/* Booking Widget Placeholder */}
          <div className={`booking-widget-placeholder reveal ${isVisible('reveal-1') ? 'visible' : ''}`} id="reveal-1">
            <div className="booking-widget-inner">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3>Online Booking</h3>
              <p>Booking widget integration coming soon</p>
              <p className="booking-widget-note">
                Integrate with ResDiary, OpenTable, or your preferred booking system
              </p>
            </div>
          </div>

          <div className={`booking-alternative reveal ${isVisible('reveal-2') ? 'visible' : ''}`} id="reveal-2">
            <p>Prefer to book by phone? Call us on <a href="tel:+442071234567">020 7123 4567</a></p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-grid">
            {/* Contact Details */}
            <div className={`contact-details-card reveal ${isVisible('reveal-3') ? 'visible' : ''}`} id="reveal-3">
              <h2>Get in Touch</h2>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h4>Address</h4>
                  <p>42 High Street<br />London<br />W1B 5DF</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h4>Phone</h4>
                  <p><a href="tel:+442071234567">020 7123 4567</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h4>Email</h4>
                  <p><a href="mailto:hello@crownandthistle.co.uk">hello@crownandthistle.co.uk</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h4>Opening Hours</h4>
                  <p>
                    Mon - Thu: 11am - 11pm<br />
                    Fri - Sat: 11am - 12am<br />
                    Sunday: 12pm - 10:30pm
                  </p>
                </div>
              </div>

              <div className="contact-social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`contact-form-card reveal ${isVisible('reveal-4') ? 'visible' : ''}`} id="reveal-4">
              <h2>Send a Message</h2>
              <p>For general enquiries, private dining, or feedback, please fill out the form below.</p>

              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" required>
                    <option value="">Please select...</option>
                    <option value="general">General Enquiry</option>
                    <option value="reservation">Reservation Query</option>
                    <option value="private-dining">Private Dining</option>
                    <option value="events">Events</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" className="btn btn-dark">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-overlay"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjYiTiAwwrAwNyczNi4zIlc!5e0!3m2!1sen!2suk!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The Crown & Thistle location on Google Maps"
        />
      </section>
    </>
  );
}

export default Contact;
