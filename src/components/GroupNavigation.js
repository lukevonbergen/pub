import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pubs } from '../data/pubs';

function GroupNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPubsDropdownOpen, setIsPubsDropdownOpen] = useState(false);
  const location = useLocation();

  // Get current pub from URL if on a pub page
  const currentPubSlug = location.pathname.startsWith('/pubs/')
    ? location.pathname.split('/')[2]
    : null;
  const currentPub = currentPubSlug ? pubs.find(p => p.slug === currentPubSlug) : null;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 100);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPubsDropdownOpen(false);
  }, [location]);

  return (
    <>
      <header className={`header-wrapper ${isHidden ? 'header-hidden' : ''}`}>
        {/* Announcement Bar */}
        <div className="announcement-bar group-announcement">
          <div className="announcement-container">
            <span className="announcement-text">A family of exceptional pubs across England & Wales</span>
            <div className="announcement-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="navbar-container">
            {/* Logo */}
            <Link to="/" className="nav-logo">
              <span className="nav-logo-text group-logo-text">Partners & Pubs</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li>
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item-dropdown"
                onMouseEnter={() => setIsPubsDropdownOpen(true)}
                onMouseLeave={() => setIsPubsDropdownOpen(false)}
              >
                <button
                  className={`nav-link nav-link-dropdown ${currentPub ? 'active' : ''}`}
                  onClick={() => setIsPubsDropdownOpen(!isPubsDropdownOpen)}
                >
                  Our Pubs
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="dropdown-arrow">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`nav-dropdown ${isPubsDropdownOpen ? 'open' : ''}`}>
                  {pubs.map((pub) => (
                    pub.externalUrl ? (
                      <a
                        key={pub.id}
                        href={pub.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-dropdown-item"
                      >
                        <span className="nav-dropdown-name">{pub.name}</span>
                        <span className="nav-dropdown-location">{pub.address.city}</span>
                      </a>
                    ) : (
                      <Link
                        key={pub.id}
                        to={`/pubs/${pub.slug}`}
                        className={`nav-dropdown-item ${currentPubSlug === pub.slug ? 'active' : ''}`}
                      >
                        <span className="nav-dropdown-name">{pub.name}</span>
                        <span className="nav-dropdown-location">{pub.address.city}</span>
                      </Link>
                    )
                  ))}
                </div>
              </li>
              <li>
                <Link
                  to="/locations"
                  className={`nav-link ${location.pathname === '/locations' ? 'active' : ''}`}
                >
                  Locations
                </Link>
              </li>
            </ul>

            {/* Current Pub Indicator (when on pub page) */}
            {currentPub && (
              <div className="hidden lg:flex items-center">
                <span className="current-pub-indicator" style={{ borderColor: currentPub.accentColor }}>
                  {currentPub.name}
                </span>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Header */}
        <div className={`mobile-menu-header ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-logo-text group-logo-text">Partners & Pubs</span>
          </Link>
          <div className="mobile-menu-right">
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default GroupNavigation;
