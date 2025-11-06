// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section with Banner */}
      <div className="hero-section">
        <div className="banner-container">
          <img 
            src="/euro-banner.avif" 
            alt="Europe Banner" 
            className="europe-banner"
          />
          <div className="banner-overlay">
            <h1 className="hero-title">
              ✈️ Plan Your Perfect European Adventure
            </h1>
            
          </div>
        </div>
      </div>

      {/* Three Options in Row */}
      <div className="options-section">
        <h2 className="section-title">What Would You Like To Do?</h2>
        <div className="options-grid">
          <Link to="/flights" className="option-card">
            <div className="card-icon-wrapper">
              <span className="option-icon">✈️</span>
            </div>
            <h3 className="option-title">Find Flights</h3>
            <p className="option-description">
              Search flights from India to any European city. Compare prices and airlines.
            </p>
            <span className="card-arrow">→</span>
          </Link>
          
          <Link to="/hotels" className="option-card">
            <div className="card-icon-wrapper">
              <span className="option-icon">🏨</span>
            </div>
            <h3 className="option-title">Book Hotels</h3>
            <p className="option-description">
              Discover the best hotels in European cities. From budget to luxury options.
            </p>
            <span className="card-arrow">→</span>
          </Link>
          
          <Link to="/destinations" className="option-card">
            <div className="card-icon-wrapper">
              <span className="option-icon">📍</span>
            </div>
            <h3 className="option-title">Explore Destinations</h3>
            <p className="option-description">
              Find top attractions and must-visit places in every European city.
            </p>
            <span className="card-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="features-section">
        <h2 className="section-title">Why Plan With Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">💰</span>
            <h4>Best Prices</h4>
            <p>Compare prices across multiple platforms</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <h4>All in One</h4>
            <p>Flights, hotels, and attractions together</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🇮🇳</span>
            <h4>India Focused</h4>
            <p>Specially designed for Indian travelers</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <h4>Easy Planning</h4>
            <p>Create your itinerary in minutes</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <p className="cta-text">
            🇮🇳 Planning from India? We've got you covered with the best deals and recommendations!
          </p>
          <p className="footer-credits">
            Built with ❤️ for travelers | © 2025 Europe Travel Planner
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;