import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { pubs, groupInfo } from '../data/pubs';

function GroupHome() {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
        <title>Partners & Pubs | A Family of Exceptional Pubs</title>
        <meta name="description" content="Partners & Pubs is a collection of carefully curated pubs across England and Wales. Discover our venues offering exceptional hospitality, quality food, and a warm welcome." />
      </Helmet>

      {/* Hero Section */}
      <div className="hero-wrapper">
        <section className="hero group-hero">
          <div
            className="hero-background"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop)' }}
          />
          <div className="hero-overlay hero-overlay-darker" />
          <div className="hero-content hero-content-center animate-fade-in-up">
            <h1 className="hero-title font-serif group-title">Partners & Pubs</h1>
            <p className="hero-description hero-description-center">
              A family of exceptional pubs across England & Wales
            </p>
            <div className="flex justify-center mt-8">
              <a href="#our-pubs" className="btn">Discover Our Pubs</a>
            </div>
          </div>
        </section>
      </div>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* About Section */}
      <section className="intro-section">
        <div className="intro-grid">
          <div className={`intro-image reveal ${isVisible('reveal-0') ? 'visible' : ''}`} id="reveal-0">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop"
              alt="Traditional cask ales at the bar"
            />
          </div>
          <div className={`intro-content reveal ${isVisible('reveal-1') ? 'visible' : ''}`} id="reveal-1">
            <h2 className="intro-title">
              Our Story
            </h2>
            <p className="intro-text">
              Partners & Pubs was founded on a simple belief: that great pubs are the heart of their communities. Each of our venues has been carefully selected for its unique character, local charm, and potential to deliver exceptional hospitality.
            </p>
            <p className="intro-text">
              From cosy country inns to vibrant city locals, we take pride in preserving the individual personality of each pub while ensuring consistently high standards of food, drink, and service.
            </p>
            <p className="intro-text">
              Whether you're looking for a quiet pint by the fire, a lively night with friends, or a memorable meal with family, you'll find a warm welcome at any of our seven venues.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Our Pubs Section */}
      <section id="our-pubs" className="pubs-grid-section">
        <div className="pubs-grid-container">
          <div className={`pubs-header reveal ${isVisible('reveal-2') ? 'visible' : ''}`} id="reveal-2">
            <h2 className="pubs-grid-title">Our Pubs</h2>
            <div className="scribble-underline"></div>
            <p className="pubs-grid-description">
              Seven unique venues, each with its own story to tell. Click on a pub to explore what makes it special.
            </p>
          </div>

          <div className="pubs-grid">
            {pubs.map((pub, index) => (
              pub.externalUrl ? (
                <a
                  key={pub.id}
                  href={pub.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pub-card reveal ${isVisible(`reveal-pub-${index}`) ? 'visible' : ''}`}
                  id={`reveal-pub-${index}`}
                  style={{ '--pub-accent': pub.accentColor }}
                >
                  <div
                    className="pub-card-image"
                    style={{ backgroundImage: `url(${pub.heroImage})` }}
                  />
                  <div className="pub-card-overlay" />
                  <div className="pub-card-content">
                    <h3 className="pub-card-name">{pub.name}</h3>
                    <p className="pub-card-location">{pub.address.city}, {pub.address.postcode.split(' ')[0]}</p>
                    <p className="pub-card-tagline">{pub.tagline}</p>
                    <span className="pub-card-link">
                      Visit Website
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </a>
              ) : (
                <Link
                  key={pub.id}
                  to={`/pubs/${pub.slug}`}
                  className={`pub-card reveal ${isVisible(`reveal-pub-${index}`) ? 'visible' : ''}`}
                  id={`reveal-pub-${index}`}
                  style={{ '--pub-accent': pub.accentColor }}
                >
                  <div
                    className="pub-card-image"
                    style={{ backgroundImage: `url(${pub.heroImage})` }}
                  />
                  <div className="pub-card-overlay" />
                  <div className="pub-card-content">
                    <h3 className="pub-card-name">{pub.name}</h3>
                    <p className="pub-card-location">{pub.address.city}, {pub.address.postcode.split(' ')[0]}</p>
                    <p className="pub-card-tagline">{pub.tagline}</p>
                    <span className="pub-card-link">
                      View Pub
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <div className="banner-wrapper">
        <section className="banner">
          <div
            className="banner-bg"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2072&auto=format&fit=crop)' }}
          />
          <div className="banner-overlay banner-overlay-navy" />
          <div className="banner-content">
            <h2 className="font-serif">What We Stand For</h2>
            <p>
              Quality ingredients, properly kept ales, and genuine hospitality.
              We believe in supporting local suppliers, training our teams to the highest standards,
              and creating spaces where communities can come together.
            </p>
          </div>
        </section>
      </div>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Features Section */}
      <section className="group-features-section">
        <div className="features-container">
          <div className={`reveal ${isVisible('reveal-features') ? 'visible' : ''}`} id="reveal-features">
            <h2 className="features-title">The Partners & Pubs Promise</h2>
          </div>

          <div className="features-grid">
            <div className={`feature-card reveal ${isVisible('reveal-f1') ? 'visible' : ''}`} id="reveal-f1">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Quality First</h3>
              <p>From cask ales to seasonal menus, we never compromise on quality. Every pint pulled and plate served meets our exacting standards.</p>
            </div>

            <div className={`feature-card reveal ${isVisible('reveal-f2') ? 'visible' : ''}`} id="reveal-f2">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3>Local Focus</h3>
              <p>Each pub is a pillar of its community. We source locally, hire locally, and give back to the neighbourhoods that welcome us.</p>
            </div>

            <div className={`feature-card reveal ${isVisible('reveal-f3') ? 'visible' : ''}`} id="reveal-f3">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3>Warm Welcome</h3>
              <p>Whether you're a regular or visiting for the first time, you'll always receive the same genuine hospitality that defines British pub culture.</p>
            </div>

            <div className={`feature-card reveal ${isVisible('reveal-f4') ? 'visible' : ''}`} id="reveal-f4">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>Unique Character</h3>
              <p>We celebrate what makes each pub special. No two venues are the same, yet all share our commitment to excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="group-contact-section">
        <div className="group-contact-container">
          <div className={`reveal ${isVisible('reveal-contact') ? 'visible' : ''}`} id="reveal-contact">
            <h2>Get in Touch</h2>
            <p>
              Have a question about any of our pubs, or interested in partnership opportunities?
              We'd love to hear from you.
            </p>
            <div className="group-contact-details">
              <a href={`mailto:${groupInfo.email}`} className="group-contact-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {groupInfo.email}
              </a>
              <a href={`tel:${groupInfo.phone.replace(/\s/g, '')}`} className="group-contact-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {groupInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="section-spacer"></div>
    </>
  );
}

export default GroupHome;
