// src/pages/Flights.jsx - REPLACE ENTIRE FILE
import React, { useState } from 'react';
import { mockFlights } from '../data/MockFlights';
import { useTripContext } from '../context/TripContext';
import '../styles/Flights.css';

const Flights = () => {
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [filteredFlights, setFilteredFlights] = useState(mockFlights);
  
  const { addFlight, isInPlan } = useTripContext();

  const handleSearch = () => {
    const filtered = mockFlights.filter(flight => {
      const matchFrom = searchFrom === '' || 
        flight.from.toLowerCase().includes(searchFrom.toLowerCase());
      const matchTo = searchTo === '' || 
        flight.to.toLowerCase().includes(searchTo.toLowerCase());
      return matchFrom && matchTo;
    });
    setFilteredFlights(filtered);
  };

  const handleAddFlight = (flight) => {
    const success = addFlight(flight);
    if (success) {
      // Optional: Show success message
      console.log('Flight added successfully!');
    }
  };

  return (
    <div className="flights-page">
      <div className="search-section">
        <h2>🛫 Find Your Flight to Europe</h2>
        <div className="search-form">
          <input
            type="text"
            placeholder="From (e.g., Delhi, Mumbai)"
            value={searchFrom}
            onChange={(e) => setSearchFrom(e.target.value)}
            className="search-input"
          />
          <input
            type="text"
            placeholder="To (e.g., Paris, London)"
            value={searchTo}
            onChange={(e) => setSearchTo(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search Flights
          </button>
        </div>
      </div>

      <div className="flights-results">
        <h3>Available Flights ({filteredFlights.length})</h3>
        <div className="flights-grid">
          {filteredFlights.map(flight => (
            <div key={flight.id} className="flight-card">
              <div className="flight-header">
                <span className="airline">{flight.airline}</span>
                <span className="price">₹{flight.price.toLocaleString()}</span>
              </div>
              
              <div className="flight-route">
                <div className="route-info">
                  <p className="city">{flight.from}</p>
                  <p className="time">{flight.departure}</p>
                </div>
                <div className="route-middle">
                  <p className="duration">{flight.duration}</p>
                  <div className="route-line">
                    <span>✈️</span>
                  </div>
                </div>
                <div className="route-info">
                  <p className="city">{flight.to}</p>
                  <p className="time">{flight.arrival}</p>
                </div>
              </div>

              <div className="flight-footer">
                <span className="date">📅 {flight.date}</span>
                <button 
                  className={`add-btn ${isInPlan('flights', flight.id) ? 'added' : ''}`}
                  onClick={() => handleAddFlight(flight)}
                  disabled={isInPlan('flights', flight.id)}
                >
                  {isInPlan('flights', flight.id) ? '✓ Added' : 'Add to Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flights;