import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getPubBySlug } from '../data/pubs';

function PubPage() {
  const { slug } = useParams();
  const pub = getPubBySlug(slug);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  useEffect(() => {
    // Scroll to top on pub change
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el, index) => {
      el.id = el.id || `reveal-${index}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [slug]);

  // Set CSS custom property for accent color
  useEffect(() => {
    if (pub) {
      document.documentElement.style.setProperty('--pub-accent', pub.accentColor);
    }
    return () => {
      document.documentElement.style.removeProperty('--pub-accent');
    };
  }, [pub]);

  if (!pub) {
    return <Navigate to="/" replace />;
  }

  const isVisible = (id) => visibleElements.has(id);

  const fullAddress = `${pub.address.line1}, ${pub.address.city}, ${pub.address.postcode}`;

  return (
    <>
      <Helmet>
        <title>{pub.name} | Partners & Pubs</title>
        <meta name="description" content={`${pub.name} - ${pub.tagline}. ${pub.description.substring(0, 150)}...`} />
      </Helmet>

      {/* Hero Section - Full Height */}
      <div className="hero-wrapper">
        <section className="hero pub-hero-full">
          <div
            className="hero-background"
            style={{ backgroundImage: `url(${pub.heroImage})` }}
          />
          <div className="hero-overlay pub-hero-overlay" />
          <div className="hero-content hero-content-center animate-fade-in-up">
            <Link to="/" className="pub-hero-group-link">Partners & Pubs</Link>
            <h1 className="hero-title font-serif pub-hero-title">{pub.name}</h1>
            <p className="hero-description hero-description-center pub-hero-tagline">
              {pub.tagline}
            </p>
            <div className="pub-hero-location">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{pub.address.city}, {pub.address.postcode.split(' ')[0]}</span>
            </div>
            <div className="pub-hero-ctas">
              <a href={`tel:${pub.phone.replace(/\s/g, '')}`} className="btn">Book a Table</a>
              <a href="#about" className="btn btn-outline-light">Discover More</a>
            </div>
          </div>
          <div className="pub-hero-scroll">
            <span>Scroll to explore</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section id="about" className="pub-about-section">
        <div className="pub-about-container">
          <div className={`pub-about-content reveal ${isVisible('reveal-0') ? 'visible' : ''}`} id="reveal-0">
            <span className="pub-section-label" style={{ color: pub.accentColor }}>Welcome</span>
            <h2 className="pub-about-title">About {pub.name}</h2>
            <p className="pub-about-text">{pub.longDescription || pub.description}</p>
            <div className="pub-features">
              {pub.features.map((feature, index) => (
                <span key={index} className="pub-feature-tag" style={{ borderColor: pub.accentColor }}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className={`pub-about-image reveal ${isVisible('reveal-1') ? 'visible' : ''}`} id="reveal-1">
            <img
              src={pub.gallery?.[1]?.url || pub.heroImage}
              alt={`Inside ${pub.name}`}
            />
            <div className="pub-about-image-accent" style={{ backgroundColor: pub.accentColor }}></div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      {pub.highlights && (
        <section className="pub-highlights-section">
          <div className="pub-highlights-container">
            <div className={`pub-highlights-header reveal ${isVisible('reveal-highlights') ? 'visible' : ''}`} id="reveal-highlights">
              <span className="pub-section-label" style={{ color: pub.accentColor }}>What Makes Us Special</span>
              <h2>Our Highlights</h2>
            </div>
            <div className="pub-highlights-grid">
              {pub.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`pub-highlight-card reveal ${isVisible(`reveal-hl-${index}`) ? 'visible' : ''}`}
                  id={`reveal-hl-${index}`}
                >
                  <div className="pub-highlight-number" style={{ color: pub.accentColor }}>0{index + 1}</div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {pub.gallery && (
        <section className="pub-gallery-section">
          <div className="pub-gallery-container">
            <div className={`pub-gallery-main reveal ${isVisible('reveal-gallery') ? 'visible' : ''}`} id="reveal-gallery">
              <img
                src={pub.gallery[activeGalleryImage]?.url}
                alt={pub.gallery[activeGalleryImage]?.alt}
              />
            </div>
            <div className="pub-gallery-thumbs">
              {pub.gallery.map((image, index) => (
                <button
                  key={index}
                  className={`pub-gallery-thumb ${activeGalleryImage === index ? 'active' : ''}`}
                  onClick={() => setActiveGalleryImage(index)}
                  style={{ borderColor: activeGalleryImage === index ? pub.accentColor : 'transparent' }}
                >
                  <img src={image.url} alt={image.alt} />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Banner */}
      {pub.testimonial && (
        <section className="pub-testimonial-section" style={{ backgroundColor: pub.accentColor }}>
          <div className="pub-testimonial-container">
            <div className={`reveal ${isVisible('reveal-testimonial') ? 'visible' : ''}`} id="reveal-testimonial">
              <svg className="pub-testimonial-quote" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="pub-testimonial-text">
                {pub.testimonial.quote}
              </blockquote>
              <cite className="pub-testimonial-author">- {pub.testimonial.author}</cite>
            </div>
          </div>
        </section>
      )}

      {/* Info Grid Section */}
      <section className="pub-info-section">
        <div className="pub-info-container">
          <div className="pub-info-grid">
            {/* Opening Hours */}
            <div className={`pub-info-card reveal ${isVisible('reveal-2') ? 'visible' : ''}`} id="reveal-2">
              <div className="pub-info-icon" style={{ color: pub.accentColor }}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Opening Hours</h3>
              <div className="pub-hours">
                {Object.entries(pub.hours).map(([day, hours]) => (
                  <div key={day} className="pub-hours-row">
                    <span className="pub-hours-day">{day}</span>
                    <span className="pub-hours-time">{hours}</span>
                  </div>
                ))}
              </div>
              <div className="pub-hours-kitchen">
                <h4>Kitchen Hours</h4>
                {Object.entries(pub.kitchenHours).map(([day, hours]) => (
                  <div key={day} className="pub-hours-row">
                    <span className="pub-hours-day">{day}</span>
                    <span className="pub-hours-time">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className={`pub-info-card reveal ${isVisible('reveal-3') ? 'visible' : ''}`} id="reveal-3">
              <div className="pub-info-icon" style={{ color: pub.accentColor }}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3>Contact Us</h3>
              <div className="pub-contact-details">
                <a href={`tel:${pub.phone.replace(/\s/g, '')}`} className="pub-contact-item">
                  <span className="pub-contact-label">Phone</span>
                  <span className="pub-contact-value">{pub.phone}</span>
                </a>
                <a href={`mailto:${pub.email}`} className="pub-contact-item">
                  <span className="pub-contact-label">Email</span>
                  <span className="pub-contact-value">{pub.email}</span>
                </a>
              </div>
              <div className="pub-book-cta">
                <h4>Book a Table</h4>
                <p>For reservations, please call us directly or use our online booking system.</p>
                <a href={`tel:${pub.phone.replace(/\s/g, '')}`} className="btn btn-dark">
                  Call to Book
                </a>
              </div>
            </div>

            {/* Location */}
            <div className={`pub-info-card reveal ${isVisible('reveal-4') ? 'visible' : ''}`} id="reveal-4">
              <div className="pub-info-icon" style={{ color: pub.accentColor }}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3>Find Us</h3>
              <div className="pub-address">
                <p>{pub.address.line1}</p>
                <p>{pub.address.city}</p>
                <p>{pub.address.postcode}</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mt-4"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="pub-menu-preview">
        <div className="pub-menu-preview-container">
          <div className={`reveal ${isVisible('reveal-5') ? 'visible' : ''}`} id="reveal-5">
            <span className="pub-section-label" style={{ color: pub.accentColor }}>Food & Drink</span>
            <h2 className="pub-menu-preview-title">Our Menus</h2>
            <div className="scribble-underline"></div>
            <p className="pub-menu-preview-description">
              From classic pub favourites to seasonal specials, there's something for everyone at {pub.name}.
            </p>
            <div className="pub-menu-tabs">
              <Link to={`/pubs/${pub.slug}/menus`} className="btn btn-dark">Food Menu</Link>
              <Link to={`/pubs/${pub.slug}/menus`} className="btn btn-dark">Drinks</Link>
              <Link to={`/pubs/${pub.slug}/menus`} className="btn btn-dark">Wine List</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pub-map-section">
        <div className="pub-map-content">
          <div className={`pub-map-info reveal ${isVisible('reveal-map') ? 'visible' : ''}`} id="reveal-map">
            <h3>Visit Us</h3>
            <p>{pub.address.line1}</p>
            <p>{pub.address.city}</p>
            <p>{pub.address.postcode}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ backgroundColor: pub.accentColor }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="pub-map-frame">
          <iframe
            src={pub.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${pub.name} location on Google Maps`}
          />
        </div>
      </section>

      {/* Back to Group CTA */}
      <section className="pub-back-section">
        <div className="pub-back-container">
          <div className={`reveal ${isVisible('reveal-6') ? 'visible' : ''}`} id="reveal-6">
            <p className="pub-back-text">Part of the Partners & Pubs family</p>
            <Link to="/" className="btn btn-light">
              View All Our Pubs
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="section-spacer"></div>
    </>
  );
}

export default PubPage;
