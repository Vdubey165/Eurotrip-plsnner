// src/pages/Hotels.jsx
import React, { useState } from 'react';
import { mockHotels } from '../data/MockHotels';
import '../styles/Hotels.css';

const Hotels = () => {
  const [searchCity, setSearchCity] = useState('');
  const [filteredHotels, setFilteredHotels] = useState(mockHotels);

  const handleSearch = () => {
    if (searchCity === '') {
      setFilteredHotels(mockHotels);
      return;
    }

    const filtered = mockHotels.filter(hotel => 
      hotel.city.toLowerCase().includes(searchCity.toLowerCase()) ||
      hotel.country.toLowerCase().includes(searchCity.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchCity.toLowerCase())
    );
    setFilteredHotels(filtered);
  };

  const handleReset = () => {
    setSearchCity('');
    setFilteredHotels(mockHotels);
  };

  return (
    <div className="hotels-page">
      {/* Search Section */}
      <div className="search-section">
        <h2>🏨 Find Your Perfect Stay in Europe</h2>
        <div className="search-form">
          <input
            type="text"
            placeholder="Search by city (e.g., Paris, Rome, London)"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search Hotels
          </button>
          {searchCity && (
            <button onClick={handleReset} className="reset-button">
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Results Section */}
      <div className="hotels-results">
        <h3>Available Hotels ({filteredHotels.length})</h3>
        
        {filteredHotels.length === 0 ? (
          <div className="no-results">
            <p>No hotels found for "{searchCity}". Try another city!</p>
          </div>
        ) : (
          <div className="hotels-grid">
            {filteredHotels.map(hotel => (
              <div key={hotel.id} className="hotel-card">
                <div className="hotel-image">
                  <img src={hotel.image} alt={hotel.name} />
                  <div className="hotel-rating">
                    ⭐ {hotel.rating}
                  </div>
                </div>
                
                <div className="hotel-content">
                  <h3 className="hotel-name">{hotel.name}</h3>
                  <p className="hotel-location">📍 {hotel.location}</p>
                  
                  <div className="hotel-amenities">
                    {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="amenity-tag">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  
                  <p className="hotel-description">{hotel.description}</p>
                  
                  <div className="hotel-footer">
                    <div className="hotel-price">
                      <span className="price-label">Per Night</span>
                      <span className="price-amount">₹{hotel.price.toLocaleString()}</span>
                    </div>
                    <button className="add-btn">Add to Plan</button>
                  </div>
                  
                  <div className="hotel-reviews">
                    💬 {hotel.reviews} reviews
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;