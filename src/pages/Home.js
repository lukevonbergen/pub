import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
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
        <title>The Crown & Thistle - Traditional British Pub | London</title>
        <meta name="description" content="The Crown & Thistle is a traditional British pub in London offering classic pub fare, real ales, and a warm welcome. Visit us for great food, drinks, and atmosphere." />
      </Helmet>

      {/* Hero Section */}
      <div className="hero-wrapper">
        <section className="hero">
          <div
            className="hero-background"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571024057263-cb5bac78c9d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          />
          <div className="hero-overlay" />
          <div className="hero-content hero-content-left animate-fade-in-up">
            <h1 className="hero-title font-serif">The Crown & Thistle</h1>
            <p className="hero-description">A traditional British pub serving classic fare, real ales, and warm hospitality since 1850.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/menus" className="btn">See the Menus</Link>
              <Link to="/contact" className="btn">Book a Table</Link>
            </div>
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
              src="https://images.unsplash.com/photo-1546726747-421c6d69c929?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Traditional British pub interior with warm lighting"
            />
          </div>
          <div className={`intro-content reveal ${isVisible('reveal-1') ? 'visible' : ''}`} id="reveal-1">
            <h2 className="intro-title">
              A quintessential British pub experience in the heart of London
            </h2>
            <p className="intro-text">
              For over 170 years, The Crown & Thistle has been a cornerstone of the local community. Step through our doors and you'll find oak beams, roaring fires, and the finest selection of real ales and craft beers.
            </p>
            <p className="intro-text">
              Whether you're here for a hearty Sunday roast, a quick pint after work, or a celebration with friends, you'll always find a warm welcome at The Crown & Thistle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="btn btn-dark">About Us</Link>
              <Link to="/contact" className="btn btn-dark">Book a Table</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Menus Section */}
      <section className="menus-section">
        <div className="menus-container">
          <div className={`reveal ${isVisible('reveal-2') ? 'visible' : ''}`} id="reveal-2">
            <h2 className="menus-title">Our Menus</h2>
            <div className="scribble-underline"></div>
            <p className="menus-description">
              From hearty British classics to seasonal specials, our kitchen serves up honest, satisfying food made with locally sourced ingredients.
            </p>
            <div className="menus-tabs">
              <Link to="/menus" className="btn btn-dark">Food Menu</Link>
              <Link to="/menus" className="btn btn-dark">Drinks</Link>
              <Link to="/menus" className="btn btn-dark">Wine List</Link>
              <Link to="/menus" className="btn btn-dark">Sunday Roast</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="banner-wrapper">
        <section className="banner">
          <div
            className="banner-bg"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          />
          <div className="hero-overlay" />
          <div className="banner-content">
            <h2 className="font-serif italic">"A true taste of British tradition"</h2>
            <p>
              Our chefs take pride in serving classic British dishes made with the finest local ingredients. From our famous fish and chips to our award-winning pies, every dish tells a story of British culinary heritage.
            </p>
          </div>
        </section>
      </div>

      {/* Spacer */}
      <div className="section-spacer"></div>

      {/* Drinks Section */}
      <section className="intro-section">
        <div className="intro-grid intro-grid-reverse">
          <div className={`intro-content reveal ${isVisible('reveal-3') ? 'visible' : ''}`} id="reveal-3">
            <h2 className="intro-title">
              Real Ales, Fine Wines & Classic Cocktails
            </h2>
            <p className="intro-text">
              Our bar boasts an impressive selection of cask ales from local and regional breweries, alongside premium lagers, fine wines, and expertly crafted cocktails.
            </p>
            <p className="intro-text">
              Whether you prefer a perfectly pulled pint of bitter or a glass of carefully selected wine, our knowledgeable bar staff are always happy to help you find your perfect drink.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menus" className="btn btn-dark">View Drinks Menu</Link>
            </div>
          </div>
          <div className={`intro-image reveal ${isVisible('reveal-4') ? 'visible' : ''}`} id="reveal-4">
            <img
              src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Selection of real ales at the bar"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="container max-w-4xl text-center">
          <div className={`reveal ${isVisible('reveal-5') ? 'visible' : ''}`} id="reveal-5">
            <svg className="w-12 h-12 text-gold mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-8 italic leading-relaxed">
              "The best traditional pub in London. Wonderful atmosphere, excellent food, and the friendliest staff. The Sunday roast is absolutely superb - proper British comfort food."
            </blockquote>
            <cite className="text-white/75 text-lg not-italic">
              <span className="font-medium text-white">James & Elizabeth Morton</span>
              <span className="block mt-1">Google Reviews</span>
            </cite>
          </div>
        </div>
      </section>

      {/* Private Dining Section */}
      <div className="banner-wrapper">
        <section className="banner banner-navy">
          <div
            className="banner-bg"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          />
          <div className="banner-overlay banner-overlay-navy" />
          <div className="banner-content">
            <h2 className="font-serif">Private Dining</h2>
            <p>
              Our private dining room is perfect for special occasions, from intimate dinners to larger celebrations. With bespoke menus and attentive service, we'll help make your event truly memorable.
            </p>
            <Link to="/private-dining" className="btn btn-light mt-4">Enquire Now</Link>
          </div>
        </section>
      </div>

      {/* Events Section */}
      <section className="events-section">
        <div className="events-header">
          <div className={`reveal ${isVisible('reveal-6') ? 'visible' : ''}`} id="reveal-6">
            <h2 className="events-title">What's On</h2>
            <p className="events-description">
              From quiz nights to live music and seasonal celebrations, there's always something happening at The Crown & Thistle.
            </p>
          </div>
        </div>

        <div className="events-grid">
            <div className={`event-card reveal ${isVisible('reveal-7') ? 'visible' : ''}`} id="reveal-7">
              <div
                className="event-card-image"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)' }}
              />
              <div className="event-card-content">
                <span className="text-gold text-sm font-medium uppercase tracking-wide">Every Friday</span>
                <h4 className="font-serif">Live Music</h4>
                <p>Enjoy live acoustic performances every Friday evening from 8pm. A perfect way to start the weekend.</p>
                <Link to="/events" className="btn btn-dark">Learn More</Link>
              </div>
            </div>

            <div className={`event-card reveal ${isVisible('reveal-8') ? 'visible' : ''}`} id="reveal-8">
              <div
                className="event-card-image"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606567595334-d39972c85dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)' }}
              />
              <div className="event-card-content">
                <span className="text-gold text-sm font-medium uppercase tracking-wide">Every Wednesday</span>
                <h4 className="font-serif">Pub Quiz Night</h4>
                <p>Test your knowledge at our famous weekly quiz. Teams of up to 6, prizes to be won!</p>
                <Link to="/events" className="btn btn-dark">Book Your Place</Link>
              </div>
            </div>

            <div className={`event-card reveal ${isVisible('reveal-9') ? 'visible' : ''}`} id="reveal-9">
              <div
                className="event-card-image"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)' }}
              />
              <div className="event-card-content">
                <span className="text-gold text-sm font-medium uppercase tracking-wide">Every Sunday</span>
                <h4 className="font-serif">Sunday Roast</h4>
                <p>Our legendary Sunday roast with all the trimmings. Booking recommended.</p>
                <Link to="/contact" className="btn btn-dark">Reserve a Table</Link>
              </div>
            </div>
        </div>
      </section>

      {/* Full Width Map Section */}
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

export default Home;
