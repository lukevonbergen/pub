import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const PrivateHire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: '',
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will be in touch shortly.');
  };

  const features = [
    'Exclusive area hire or full venue',
    'Customised food & drinks packages',
    'Sport shown on request',
    'Music and entertainment options',
    'Friendly, experienced staff',
  ];

  return (
    <main>
      <Helmet>
        <title>Private Hire | Annie Twomey's - Events & Parties Southgate</title>
        <meta name="description" content="Host your private event at Annie Twomey's Southgate. Birthday parties, work events, wakes, and celebrations. Customised packages available. Enquire now." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Private Hire</h1>
          <p className="hero-location">Celebrate with us</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Host Your Event at Annie Twomey's</h2>
            <p className="section-subtitle">
              Whether it's a birthday, work party, retirement do, or wake - we've got you covered.
              Our warm, welcoming space is perfect for gatherings of all sizes.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1rem' }}>
              With live sport on tap, a pool table, darts, and great food and drink, your guests will have everything they need.
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>What We Offer</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 0',
                      borderBottom: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D5A3D" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div
                style={{
                  height: '400px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2072)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Capacity</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '500px',
              margin: '2rem auto 0',
            }}>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'var(--secondary-bg)',
                border: '1px solid var(--border-color)',
              }}>
                <span style={{ display: 'block', fontSize: '3rem', color: 'var(--highlight-gold)', fontWeight: '700' }}>80</span>
                <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Standing</span>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'var(--secondary-bg)',
                border: '1px solid var(--border-color)',
              }}>
                <span style={{ display: 'block', fontSize: '3rem', color: 'var(--highlight-gold)', fontWeight: '700' }}>50</span>
                <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Seated</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center' }}>
              Flexible layouts to suit your needs
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Fill out the form below and we'll get back to you to discuss your event.
            </p>
          </div>

          <div className="two-column reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="eventType">Event Type *</label>
                <select
                  id="eventType"
                  name="eventType"
                  className="form-select"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday</option>
                  <option value="work">Work Event</option>
                  <option value="wake">Wake</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="guests">Approximate Guests *</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  className="form-input"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-input"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Enquiry
              </button>
            </form>

            <div style={{ paddingLeft: '2rem' }}>
              <div style={{
                background: 'var(--primary-bg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                marginBottom: '2rem',
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                  Prefer to Call?
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Give us a call to discuss your requirements:
                </p>
                <a href="tel:02012345678" style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '600' }}>
                  020 1234 5678
                </a>
              </div>

              <div style={{
                background: 'var(--primary-bg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                  Email Us
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Send us an email with your enquiry:
                </p>
                <a href="mailto:info@annietwomeys.co.uk" style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  info@annietwomeys.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivateHire;
