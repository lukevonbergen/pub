import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
  // Scroll reveal animation
  useEffect(() => {
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
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Annie Twomey's | Irish Pub Southgate, London | Live Sport & Music</title>
        <meta name="description" content="Annie Twomey's - Family-run Irish pub in Southgate, London. Live sport on multiple screens, pool, darts, and live music every weekend. Experience authentic Irish hospitality." />
        <meta name="keywords" content="Irish pub Southgate, live sport pub London, pool darts pub, live music Southgate, Annie Twomey's, GAA London, Premier League pub" />
        <meta property="og:title" content="Annie Twomey's | Irish Pub Southgate" />
        <meta property="og:description" content="Family-run Irish pub with live sport, pool, darts, and live music. In the heart of Southgate, London." />
        <meta property="og:type" content="restaurant" />
        <link rel="canonical" href="https://annietwomeys.co.uk" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(/images/annies/homepage-hero.avif)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle animate-fade-in-up">Experience the Heart of</p>
          <h1 className="hero-title animate-fade-in-up animate-delay-1">Annie Twomey's</h1>
          <p className="hero-location animate-fade-in-up animate-delay-2">Southgate</p>
        </div>

        {/* Quick Actions Bar */}
        <div className="quick-actions">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="quick-action">
            Southgate, London
          </a>
          <Link to="/menu" className="quick-action">
            View Menu
          </Link>
          <a href="tel:02012345678" className="quick-action">
            020 1234 5678
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Annie Twomey's</h2>
            <p className="section-subtitle">
              A sports-oriented Irish pub with numerous TV screens, pool table and darts board.
              Irish family-run and situated in the heart of Southgate.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1rem' }}>
              All live sport shown. Live music every weekend.
            </p>
            <div className="celtic-border"></div>
            <Link to="/contact" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ padding: 0 }}>
        <div className="feature-grid">
          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Live Sport</h3>
              <Link to="/live-sport" className="btn btn-primary">View Fixtures</Link>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Live Music</h3>
              <Link to="/whats-on" className="btn btn-primary">Find Out More</Link>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Private Parties</h3>
              <Link to="/private-hire" className="btn btn-primary">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="section-dark food-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Food at Annie's</h2>
            <p className="section-subtitle">
              Enjoy authentic Irish fare and pub classics. From hearty stews to the perfect Sunday roast,
              our kitchen serves up comfort food done right.
            </p>
            <div className="celtic-border"></div>
            <Link to="/menu" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Live Sport Banner */}
      <section className="banner">
        <div
          className="banner-bg"
          style={{
            backgroundImage: 'url(/images/annies/live-sport-bg.jpeg)',
          }}
        ></div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <div className="celtic-border" style={{ marginBottom: '2rem' }}></div>
          <h2>Live Sport</h2>
          <p>Every game. Every screen.</p>
          <Link to="/live-sport" className="btn btn-primary">View Fixtures</Link>
          <div className="celtic-border" style={{ marginTop: '2rem' }}></div>
        </div>
      </section>

      {/* What's On Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">What's On</h2>
            <p className="section-subtitle">
              From live Premier League and GAA to weekend live music sessions,
              there's always something happening at Annie Twomey's.
            </p>
          </div>

          <div className="event-grid reveal">
            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1665413813194-3b80d79b6421?q=80&w=2070&auto=format&fit=crop)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Premier League</h4>
                <p>Every match live on our big screens. Join the atmosphere for all the action.</p>
                <Link to="/live-sport" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Find Out More
                </Link>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Live GAA</h4>
                <p>Catch all the hurling and football action. The best place in London for GAA.</p>
                <Link to="/live-sport" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Find Out More
                </Link>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2064)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Weekend Live Music</h4>
                <p>Live bands and traditional Irish sessions every Friday and Saturday night.</p>
                <Link to="/whats-on" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Find Out More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Hire Banner */}
      <section className="split-banner">
        <div className="split-banner-images">
          <div
            className="split-image"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074)',
            }}
          ></div>
          <div
            className="split-image"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2072)',
            }}
          ></div>
        </div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <h2>Private Hire</h2>
          <p>Host your event with us</p>
          <Link to="/private-hire" className="btn btn-primary">Enquire Now</Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">News & Offers</h2>
            <p className="section-subtitle">
              Stay up to date with the latest from Annie Twomey's. Sign up to our mailing list.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
