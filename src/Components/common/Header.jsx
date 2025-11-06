import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>🇪🇺 Europe Travel Planner</h1>
        </Link>
        
        <nav className="nav">
          <Link 
            to="/flights" 
            className={`nav-link ${location.pathname === '/flights' ? 'active' : ''}`}
          >
            ✈️ Flights
          </Link>
          <Link 
            to="/hotels" 
            className={`nav-link ${location.pathname === '/hotels' ? 'active' : ''}`}
          >
            🏨 Hotels
          </Link>
          <Link 
            to="/destinations" 
            className={`nav-link ${location.pathname === '/destinations' ? 'active' : ''}`}
          >
            📍 Destinations
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;