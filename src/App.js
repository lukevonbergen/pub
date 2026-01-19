import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GroupNavigation from './components/GroupNavigation';
import GroupFooter from './components/GroupFooter';
import GroupHome from './pages/GroupHome';
import PubPage from './pages/PubPage';
import Locations from './pages/Locations';

function App() {
  const location = useLocation();
  const isLocationsPage = location.pathname === '/locations';

  return (
    <div className="App">
      <GroupNavigation />
      <main className={`main-content ${isLocationsPage ? 'locations-main' : ''}`}>
        <Routes>
          <Route path="/" element={<GroupHome />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/pubs/:slug" element={<PubPage />} />
          <Route path="/pubs/:slug/menus" element={<PubPage />} />
          <Route path="/pubs/:slug/contact" element={<PubPage />} />
        </Routes>
      </main>
      {!isLocationsPage && <GroupFooter />}
    </div>
  );
}

export default App;
