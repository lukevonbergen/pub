import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { pubs } from '../data/pubs';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom pub marker icon
const createPubIcon = (color) => {
  return L.divIcon({
    className: 'custom-pub-marker',
    html: `<div style="background-color: ${color}; width: 36px; height: 36px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M4 19h16v2H4v-2zm5-4h2V9H9v6zm4 0h2V9h-2v6zm5-11.5v3h2v2h-2v.5H4v-.5H2v-2h2v-3C4 3 4.5 2 6 2h12c1.5 0 2 1 2 1.5zm-2 0h-1.5v3H16v-3h-2v3h-1.5v-3h-2v3H9v-3H7.5v3H6v-3H5v3h14v-3h-1z"/>
      </svg>
    </div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });
};

// Component to handle map view changes
function MapController({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, { duration: 1 });
    }
  }, [center, zoom, map]);
  return null;
}

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function Locations() {
  const [postcode, setPostcode] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [nearestPubs, setNearestPubs] = useState([]);
  const [mapCenter, setMapCenter] = useState([52.0, -1.5]); // Center of England/Wales
  const [mapZoom, setMapZoom] = useState(6);

  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');
  const mapRef = useRef(null);

  // Set page title
  useEffect(() => {
    document.title = 'Locations | Partners & Pubs';
  }, []);

  // Invalidate map size after mount to fix mobile rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Get pubs with coordinates only
  const pubsWithCoords = pubs.filter(pub => pub.coordinates);

  const handlePostcodeSearch = async (e) => {
    e.preventDefault();
    setError('');
    setIsSearching(true);

    try {
      // Use postcodes.io API to get coordinates from UK postcode
      const response = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(postcode)}`);
      const data = await response.json();

      if (data.status === 200 && data.result) {
        const { latitude, longitude } = data.result;
        setSearchResult({ lat: latitude, lng: longitude, postcode: data.result.postcode });

        // Calculate distances to all pubs and sort
        const pubsWithDistances = pubsWithCoords.map(pub => ({
          ...pub,
          distance: calculateDistance(latitude, longitude, pub.coordinates.lat, pub.coordinates.lng)
        })).sort((a, b) => a.distance - b.distance);

        setNearestPubs(pubsWithDistances);
        setMapCenter([latitude, longitude]);
        setMapZoom(10);
      } else {
        setError('Postcode not found. Please check and try again.');
        setNearestPubs([]);
      }
    } catch (err) {
      setError('Unable to search. Please try again.');
      setNearestPubs([]);
    }

    setIsSearching(false);
  };

  const handlePubClick = (pub) => {
    setMapCenter([pub.coordinates.lat, pub.coordinates.lng]);
    setMapZoom(15);
  };

  const resetMap = () => {
    setSearchResult(null);
    setNearestPubs([]);
    setPostcode('');
    setMapCenter([52.0, -1.5]);
    setMapZoom(6);
    setError('');
  };

  return (
    <div className="locations-page">
      {/* Search Panel */}
      <div className="locations-search-panel">
        <div className="locations-search-content">
          <h1 className="font-serif">Find Your Local</h1>
          <p>Enter your postcode to find your nearest Partners & Pubs venue</p>

          <form onSubmit={handlePostcodeSearch} className="postcode-search-form">
            <div className="postcode-input-wrapper">
              <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                placeholder="Enter postcode (e.g., N3 2PA)"
                className="postcode-input"
                maxLength={8}
              />
              <button type="submit" className="postcode-search-btn" disabled={isSearching || !postcode.trim()}>
                {isSearching ? (
                  <span className="searching-spinner"></span>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                  </svg>
                )}
              </button>
            </div>
          </form>

          {error && <p className="search-error">{error}</p>}

          {searchResult && (
            <button onClick={resetMap} className="reset-search-btn">
              Clear search & show all pubs
            </button>
          )}

          {/* Pub List */}
          <div className="locations-pub-list">
            {(nearestPubs.length > 0 ? nearestPubs : pubsWithCoords).map((pub) => (
              <div
                key={pub.id}
                className="locations-pub-item"
                onClick={() => handlePubClick(pub)}
              >
                <div className="locations-pub-color" style={{ backgroundColor: pub.accentColor }}></div>
                <div className="locations-pub-info">
                  <h3>{pub.name}</h3>
                  <p>{pub.address.city}</p>
                  {pub.distance !== undefined && (
                    <span className="locations-pub-distance">{pub.distance.toFixed(1)} miles</span>
                  )}
                </div>
                <div className="locations-pub-actions">
                  {pub.externalUrl ? (
                    <a
                      href={pub.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="locations-pub-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Site
                    </a>
                  ) : (
                    <Link
                      to={`/pubs/${pub.slug}`}
                      className="locations-pub-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Pub
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Map */}
      <div className="locations-map-container">
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          className="locations-map"
          ref={mapRef}
          zoomControl={false}
          whenReady={(map) => {
            setTimeout(() => {
              map.target.invalidateSize();
            }, 100);
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <MapController center={mapCenter} zoom={mapZoom} />

          {/* User location marker */}
          {searchResult && (
            <Marker
              position={[searchResult.lat, searchResult.lng]}
              icon={L.divIcon({
                className: 'user-location-marker',
                html: `<div style="background-color: #3b82f6; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10],
              })}
            >
              <Popup>
                <strong>Your location</strong><br />
                {searchResult.postcode}
              </Popup>
            </Marker>
          )}

          {/* Pub markers */}
          {pubsWithCoords.map((pub) => (
            <Marker
              key={pub.id}
              position={[pub.coordinates.lat, pub.coordinates.lng]}
              icon={createPubIcon(pub.accentColor)}
            >
              <Popup className="pub-map-popup">
                <div className="popup-content">
                  <h3>{pub.name}</h3>
                  <p>{pub.address.line1}</p>
                  <p>{pub.address.city}, {pub.address.postcode}</p>
                  {pub.distance !== undefined && (
                    <p className="popup-distance">{pub.distance.toFixed(1)} miles away</p>
                  )}
                  {pub.externalUrl ? (
                    <a
                      href={pub.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="popup-link"
                    >
                      Visit Website
                    </a>
                  ) : (
                    <Link to={`/pubs/${pub.slug}`} className="popup-link">
                      View Pub
                    </Link>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Locations;
