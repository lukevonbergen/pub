import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

function Menus() {
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
        <title>Menus | The Crown & Thistle - Traditional British Pub</title>
        <meta name="description" content="Explore our menus at The Crown & Thistle. From classic British pub fare to seasonal specials, discover our food menu, drinks, and famous Sunday roast." />
      </Helmet>

      {/* Hero Section - Shorter for subpage */}
      <div className="hero-wrapper">
        <section className="hero hero-short">
          <div
            className="hero-background"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          />
          <div className="hero-overlay" />
          <div className="hero-content hero-content-center animate-fade-in-up">
            <h1 className="hero-title">Our Menus</h1>
            <p className="hero-description hero-description-center">
              Classic British pub fare made with love
            </p>
          </div>
        </section>
      </div>

      {/* Menu Navigation */}
      <section className="menus-section">
        <div className="menus-container">
          <div className={`reveal ${isVisible('reveal-0') ? 'visible' : ''}`} id="reveal-0">
            <div className="menus-tabs">
              <a href="#food" className="btn btn-dark">Food Menu</a>
              <a href="#drinks" className="btn btn-dark">Drinks</a>
              <a href="#wine" className="btn btn-dark">Wine List</a>
              <a href="#sunday" className="btn btn-dark">Sunday Roast</a>
            </div>
          </div>
        </div>
      </section>

      {/* Food Menu Section */}
      <section id="food" className="menu-content-section">
        <div className="menu-content-container">
          <div className={`reveal ${isVisible('reveal-1') ? 'visible' : ''}`} id="reveal-1">
            <h2 className="menu-section-title">Food Menu</h2>
            <p className="menu-section-description">
              Honest, hearty food made with locally sourced ingredients. Classic British dishes with a modern touch.
            </p>
          </div>

          {/* Starters */}
          <div className={`menu-category reveal ${isVisible('reveal-2') ? 'visible' : ''}`} id="reveal-2">
            <h3 className="menu-category-title">Starters</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Soup of the Day</span>
                  <span className="menu-item-price">6.50</span>
                </div>
                <p className="menu-item-description">Served with crusty bread and butter</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Prawn Cocktail</span>
                  <span className="menu-item-price">9</span>
                </div>
                <p className="menu-item-description">Classic Marie Rose sauce, baby gem lettuce, brown bread</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Chicken Liver Pâté</span>
                  <span className="menu-item-price">8.50</span>
                </div>
                <p className="menu-item-description">With red onion chutney and toasted sourdough</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Scotch Egg</span>
                  <span className="menu-item-price">8</span>
                </div>
                <p className="menu-item-description">Free-range egg, sage sausage meat, piccalilli</p>
              </div>
            </div>
          </div>

          {/* Mains */}
          <div className={`menu-category reveal ${isVisible('reveal-3') ? 'visible' : ''}`} id="reveal-3">
            <h3 className="menu-category-title">Mains</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Fish & Chips</span>
                  <span className="menu-item-price">15</span>
                </div>
                <p className="menu-item-description">Beer-battered cod, chunky chips, mushy peas, tartare sauce</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Steak & Ale Pie</span>
                  <span className="menu-item-price">14.50</span>
                </div>
                <p className="menu-item-description">Slow-cooked beef in rich ale gravy, puff pastry, mash, peas</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Bangers & Mash</span>
                  <span className="menu-item-price">13</span>
                </div>
                <p className="menu-item-description">Cumberland sausages, creamy mash, onion gravy, crispy onions</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">The Crown Burger</span>
                  <span className="menu-item-price">14</span>
                </div>
                <p className="menu-item-description">6oz beef patty, bacon, mature cheddar, brioche bun, fries, coleslaw</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Ploughman's Lunch</span>
                  <span className="menu-item-price">12</span>
                </div>
                <p className="menu-item-description">Mature cheddar, ham, pickles, Branston, crusty bread, salad</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Shepherd's Pie</span>
                  <span className="menu-item-price">14</span>
                </div>
                <p className="menu-item-description">Slow-cooked lamb mince topped with creamy mash, seasonal vegetables</p>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div className={`menu-category reveal ${isVisible('reveal-4') ? 'visible' : ''}`} id="reveal-4">
            <h3 className="menu-category-title">Desserts</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Sticky Toffee Pudding</span>
                  <span className="menu-item-price">7</span>
                </div>
                <p className="menu-item-description">Warm sponge, toffee sauce, vanilla ice cream</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Apple Crumble</span>
                  <span className="menu-item-price">7</span>
                </div>
                <p className="menu-item-description">Warm bramley apple crumble with custard or ice cream</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Eton Mess</span>
                  <span className="menu-item-price">6.50</span>
                </div>
                <p className="menu-item-description">Fresh strawberries, crushed meringue, whipped cream</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="banner-wrapper">
        <section className="banner">
          <div
            className="banner-bg"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          />
          <div className="hero-overlay" />
          <div className="banner-content">
            <h2 className="font-serif italic">"Real ales, properly kept"</h2>
            <p>
              Our cellar is maintained to perfection, ensuring every pint is served at its best. We're proud members of CAMRA and champion real ale.
            </p>
          </div>
        </section>
      </div>

      {/* Drinks Section */}
      <section id="drinks" className="menu-content-section bg-cream">
        <div className="menu-content-container">
          <div className={`reveal ${isVisible('reveal-5') ? 'visible' : ''}`} id="reveal-5">
            <h2 className="menu-section-title">Drinks</h2>
            <p className="menu-section-description">
              From perfectly kept cask ales to premium spirits, our bar has something for everyone.
            </p>
          </div>

          {/* Cask Ales */}
          <div className={`menu-category reveal ${isVisible('reveal-6') ? 'visible' : ''}`} id="reveal-6">
            <h3 className="menu-category-title">Cask Ales</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">London Pride</span>
                  <span className="menu-item-price">5.20</span>
                </div>
                <p className="menu-item-description">Fuller's flagship bitter, rich and balanced</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Timothy Taylor's Landlord</span>
                  <span className="menu-item-price">5.40</span>
                </div>
                <p className="menu-item-description">Classic pale ale, complex and hoppy</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Doom Bar</span>
                  <span className="menu-item-price">5.00</span>
                </div>
                <p className="menu-item-description">Sharp's Cornish bitter, smooth and malty</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Guest Ale</span>
                  <span className="menu-item-price">5.50</span>
                </div>
                <p className="menu-item-description">Rotating selection - ask your bartender</p>
              </div>
            </div>
          </div>

          {/* Premium Spirits */}
          <div className={`menu-category reveal ${isVisible('reveal-7') ? 'visible' : ''}`} id="reveal-7">
            <h3 className="menu-category-title">Premium Spirits</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Tanqueray Gin</span>
                  <span className="menu-item-price">5</span>
                </div>
                <p className="menu-item-description">Classic London dry gin</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Hendrick's Gin</span>
                  <span className="menu-item-price">6</span>
                </div>
                <p className="menu-item-description">Scottish gin with cucumber and rose</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Glenfiddich 12</span>
                  <span className="menu-item-price">7</span>
                </div>
                <p className="menu-item-description">Single malt Scotch, fruity and smooth</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Macallan 12</span>
                  <span className="menu-item-price">9</span>
                </div>
                <p className="menu-item-description">Sherry oak matured, rich and complex</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Section */}
      <section id="wine" className="menu-content-section">
        <div className="menu-content-container">
          <div className={`reveal ${isVisible('reveal-8') ? 'visible' : ''}`} id="reveal-8">
            <h2 className="menu-section-title">Wine List</h2>
            <p className="menu-section-description">
              A carefully curated selection of wines from around the world.
            </p>
          </div>

          {/* White Wines */}
          <div className={`menu-category reveal ${isVisible('reveal-9') ? 'visible' : ''}`} id="reveal-9">
            <h3 className="menu-category-title">White Wines</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Sauvignon Blanc, Marlborough</span>
                  <span className="menu-item-price">24</span>
                </div>
                <p className="menu-item-description">Crisp and refreshing with citrus notes (175ml £6.50)</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Pinot Grigio, Italy</span>
                  <span className="menu-item-price">22</span>
                </div>
                <p className="menu-item-description">Light and delicate with pear and apple (175ml £6)</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Chablis, France</span>
                  <span className="menu-item-price">32</span>
                </div>
                <p className="menu-item-description">Classic Burgundy, mineral and elegant</p>
              </div>
            </div>
          </div>

          {/* Red Wines */}
          <div className={`menu-category reveal ${isVisible('reveal-10') ? 'visible' : ''}`} id="reveal-10">
            <h3 className="menu-category-title">Red Wines</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Malbec, Argentina</span>
                  <span className="menu-item-price">24</span>
                </div>
                <p className="menu-item-description">Bold and fruity with dark berry notes (175ml £6.50)</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Rioja Crianza, Spain</span>
                  <span className="menu-item-price">26</span>
                </div>
                <p className="menu-item-description">Oak-aged with vanilla and spice (175ml £7)</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Châteauneuf-du-Pape, France</span>
                  <span className="menu-item-price">42</span>
                </div>
                <p className="menu-item-description">Full-bodied Rhône blend, complex and warming</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sunday Roast Section */}
      <section id="sunday" className="menu-content-section bg-cream">
        <div className="menu-content-container">
          <div className={`reveal ${isVisible('reveal-11') ? 'visible' : ''}`} id="reveal-11">
            <h2 className="menu-section-title">Sunday Roast</h2>
            <p className="menu-section-description">
              A proper Sunday dinner with all the trimmings. Served every Sunday from 12pm until 6pm.
            </p>
          </div>

          <div className={`menu-category reveal ${isVisible('reveal-12') ? 'visible' : ''}`} id="reveal-12">
            <h3 className="menu-category-title">Choose Your Roast</h3>
            <div className="menu-items">
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Roast Beef</span>
                  <span className="menu-item-price">16</span>
                </div>
                <p className="menu-item-description">Slow-roasted sirloin, Yorkshire pudding, roasties, vegetables, gravy</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Roast Chicken</span>
                  <span className="menu-item-price">14</span>
                </div>
                <p className="menu-item-description">Free-range chicken, stuffing, Yorkshire pudding, roasties, vegetables, gravy</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Roast Lamb</span>
                  <span className="menu-item-price">17</span>
                </div>
                <p className="menu-item-description">Leg of lamb with mint sauce, Yorkshire pudding, roasties, vegetables, gravy</p>
              </div>
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">Nut Roast (V)</span>
                  <span className="menu-item-price">13</span>
                </div>
                <p className="menu-item-description">Homemade nut roast, Yorkshire pudding, roasties, vegetables, vegetarian gravy</p>
              </div>
            </div>
          </div>

          <div className={`menu-note reveal ${isVisible('reveal-13') ? 'visible' : ''}`} id="reveal-13">
            <p>All roasts come with roast potatoes, honey-glazed carrots & parsnips, buttered greens, cauliflower cheese, and unlimited gravy. Children's portions available.</p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="section-spacer"></div>
    </>
  );
}

export default Menus;
