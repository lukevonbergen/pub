import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import LiveSport from './pages/LiveSport';
import Menu from './pages/Menu';
import WhatsOn from './pages/WhatsOn';
import PrivateHire from './pages/PrivateHire';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-sport" element={<LiveSport />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/whats-on" element={<WhatsOn />} />
        <Route path="/private-hire" element={<PrivateHire />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
