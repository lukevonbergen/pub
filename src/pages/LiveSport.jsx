import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const LiveSport = () => {
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

  const sports = [
    { name: 'Premier League', image: 'https://images.unsplash.com/photo-1665413813194-3b80d79b6421?q=80&w=987&auto=format&fit=crop' },
    { name: 'Champions League', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800' },
    { name: 'Six Nations Rugby', image: 'https://images.unsplash.com/photo-1480099225005-2513c8947aec?q=80&w=2503&auto=format&fit=crop' },
    { name: 'GAA', image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800' },
    { name: 'Boxing & UFC', image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Horse Racing', image: 'https://images.unsplash.com/flagged/photo-1569319388901-605a6d2d1299?q=80&w=2071&auto=format&fit=crop' },
    { name: 'Formula 1', image: 'https://images.unsplash.com/photo-1613732764162-251c03439b53?q=80&w=987&auto=format&fit=crop' },
    { name: 'And More...', image: 'https://images.unsplash.com/photo-1461896836934-28e9b8a7f17b?q=80&w=800' },
  ];

  const fixtures = [
    { date: 'Sat 4 Jan', time: '12:30', event: 'Arsenal vs Liverpool', competition: 'Premier League' },
    { date: 'Sat 4 Jan', time: '15:00', event: 'Man United vs Newcastle', competition: 'Premier League' },
    { date: 'Sun 5 Jan', time: '14:00', event: 'Chelsea vs Tottenham', competition: 'Premier League' },
    { date: 'Sun 5 Jan', time: '16:30', event: 'Man City vs Everton', competition: 'Premier League' },
    { date: 'Wed 8 Jan', time: '20:00', event: 'TBC vs TBC', competition: 'Champions League' },
    { date: 'Sat 11 Jan', time: '17:30', event: 'Six Nations Opener', competition: 'Rugby' },
  ];

  return (
    <main>
      <Helmet>
        <title>Live Sport | Annie Twomey's - Irish Pub Southgate</title>
        <meta name="description" content="Watch all live sport at Annie Twomey's Southgate. Premier League, GAA, Six Nations, boxing, UFC and more on our big screens. Best sports pub in North London." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Live Sport</h1>
          <p className="hero-location">Every major sporting event on our numerous screens</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Your Home for Live Sport</h2>
            <p className="section-subtitle">
              With screens throughout the pub, you'll never miss a moment. We show all Premier League,
              Champions League, Six Nations, GAA, boxing, UFC and more. Join us for the big games - atmosphere guaranteed.
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* What We Show */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">What We Show</h2>
          </div>
          <div className="sports-grid reveal">
            {sports.map((sport, index) => (
              <div key={index} className="sport-item">
                <div
                  className="sport-item-bg"
                  style={{ backgroundImage: `url(${sport.image})` }}
                ></div>
                <div className="sport-item-overlay"></div>
                <span>{sport.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixtures Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Upcoming Fixtures</h2>
            <p className="section-subtitle">
              Here's what's coming up. For all fixtures, follow us on social media or call ahead.
            </p>
          </div>

          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table className="fixtures-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Event</th>
                  <th>Competition</th>
                </tr>
              </thead>
              <tbody>
                {fixtures.map((fixture, index) => (
                  <tr key={index}>
                    <td>{fixture.date}</td>
                    <td>{fixture.time}</td>
                    <td>{fixture.event}</td>
                    <td>{fixture.competition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-secondary)' }}>
            For all fixtures, follow us on social media or call ahead to confirm.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="banner">
        <div
          className="banner-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070)',
          }}
        ></div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <div className="celtic-border" style={{ marginBottom: '2rem' }}></div>
          <h2>Book Your Spot</h2>
          <p>Want to guarantee your seat for the big game?</p>
          <Link to="/contact" className="btn btn-primary">Book a Table</Link>
          <div className="celtic-border" style={{ marginTop: '2rem' }}></div>
        </div>
      </section>
    </main>
  );
};

export default LiveSport;
