import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const WhatsOn = () => {
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

  const regularEvents = [
    {
      title: 'Live Music',
      schedule: 'Every Friday & Saturday',
      time: 'From 9pm',
      description: 'Live music every Friday and Saturday night from 9pm. Traditional Irish sessions, acoustic acts, and more.',
      note: 'Follow us on social media for lineup announcements',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070',
    },
    {
      title: 'Live Sport',
      schedule: 'Daily',
      time: 'All day',
      description: 'All major sporting events shown live. Premier League, GAA, rugby, boxing and more on our big screens.',
      link: '/live-sport',
      linkText: 'View Sport Schedule',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070',
    },
    {
      title: 'Pool & Darts',
      schedule: 'Daily',
      time: 'All day',
      description: 'Challenge your mates to a game of pool or darts. Tables available all week.',
      image: 'https://images.unsplash.com/photo-1652216024518-2ebe866c2fe9?q=80&w=2670&auto=format&fit=crop',
    },
    {
      title: 'Quiz Night',
      schedule: 'Every Wednesday',
      time: 'From 8pm',
      description: "Test your knowledge at our weekly pub quiz. Prizes to be won! Teams of up to 6.",
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070',
    },
  ];

  const upcomingEvents = [
    {
      date: 'Sat 1 Feb',
      title: 'Six Nations Opening Weekend',
      description: 'Ireland vs England - Join us for the big game!',
    },
    {
      date: 'Fri 14 Feb',
      title: "Valentine's Weekend Live Music",
      description: 'Special acoustic set with classic love songs',
    },
    {
      date: 'Mon 17 Mar',
      title: "St Patrick's Day Celebration",
      description: 'All-day Irish celebration with live music, specials, and more!',
    },
    {
      date: 'Sat 22 Mar',
      title: 'Live Band: The Celtic Souls',
      description: 'Traditional Irish music from 9pm',
    },
  ];

  return (
    <main>
      <Helmet>
        <title>What's On | Annie Twomey's - Events & Live Music Southgate</title>
        <meta name="description" content="What's on at Annie Twomey's Southgate. Live music every weekend, pub quiz, live sport, pool and darts. There's always something happening at Annie's." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">What's On</h1>
          <p className="hero-location">There's always something happening at Annie's</p>
        </div>
      </section>

      {/* Regular Events */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Regular Events</h2>
            <div className="celtic-border"></div>
          </div>

          <div style={{ display: 'grid', gap: '3rem' }}>
            {regularEvents.map((event, index) => (
              <div
                key={index}
                className="reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <div
                    style={{
                      height: '300px',
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '1px solid var(--border-color)',
                    }}
                  ></div>
                </div>
                <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                  <span style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
                    {event.schedule} | {event.time}
                  </span>
                  <h3 style={{ fontSize: '2rem', margin: '0.5rem 0 1rem', color: 'var(--text-primary)' }}>{event.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{event.description}</p>
                  {event.note && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>{event.note}</p>
                  )}
                  {event.link && (
                    <Link to={event.link} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                      {event.linkText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Coming Up</h2>
            <div className="celtic-border"></div>
          </div>

          <div className="event-grid reveal">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card" style={{ background: 'var(--primary-bg)' }}>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'var(--accent-green)',
                    color: 'var(--text-primary)',
                    padding: '0.5rem 1rem',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '1rem',
                  }}>
                    {event.date}
                  </span>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{event.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Stay Updated</h2>
            <p className="section-subtitle">
              Want to stay updated? Follow us on Facebook and Instagram for the latest events, fixtures, and announcements.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhatsOn;
