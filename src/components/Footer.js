import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Opening Hours */}
          <div className="footer-section">
            <h4>Opening Hours</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-gold font-medium mb-2">Bar</p>
                <p>Mon - Thu: 11am - 11pm</p>
                <p>Fri - Sat: 11am - 12am</p>
                <p>Sunday: 12pm - 10:30pm</p>
              </div>
              <div>
                <p className="text-gold font-medium mb-2">Kitchen</p>
                <p>Mon - Sat: 12pm - 9pm</p>
                <p>Sunday: 12pm - 8pm</p>
              </div>
            </div>
          </div>

          {/* Logo & Social */}
          <div className="footer-section footer-logo">
            <div className="footer-logo-text font-serif">The Crown & Thistle</div>
            <p className="text-text-secondary text-sm mt-2">Est. 1850</p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.976 5.976 0 0 0 4.075 1.598 5.997 5.997 0 0 0 4.04-10.43L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.91C14.596 8.086 13.298 9.2 12 9.2s-2.596-1.114-4.504-2.035A11.593 11.593 0 0 1 12 6.255zM6.002 9.157a4.077 4.077 0 1 1 0 8.155 4.077 4.077 0 0 1 0-8.155zm11.996 0a4.077 4.077 0 1 1 0 8.155 4.077 4.077 0 0 1 0-8.155zM6.002 11.118a2.116 2.116 0 1 0 0 4.232 2.116 2.116 0 0 0 0-4.232zm11.996 0a2.116 2.116 0 1 0 0 4.232 2.116 2.116 0 0 0 0-4.232z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <p>42 High Street</p>
            <p>London W1B 5DF</p>
            <p className="mt-4">
              <a href="tel:+442071234567" className="hover:text-gold transition-colors">020 7123 4567</a>
            </p>
            <p>
              <a href="mailto:hello@crownandthistle.co.uk" className="hover:text-gold transition-colors">hello@crownandthistle.co.uk</a>
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="border-t border-border-color pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/menus" className="hover:text-gold transition-colors">Menus</Link>
            <Link to="/private-dining" className="hover:text-gold transition-colors">Private Dining</Link>
            <Link to="/events" className="hover:text-gold transition-colors">What's On</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
            <a href="#" className="hover:text-gold transition-colors">Careers</a>
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Allergen Info</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Crown & Thistle. All rights reserved.</p>
          <p>A Traditional British Pub</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
