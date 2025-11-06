// src/pages/Destinations.jsx
import React, { useState } from 'react';
import { mockDestinations, destinationCities } from '../data/MockDestinations';
import '../styles/Destinations.css';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [filteredDestinations, setFilteredDestinations] = useState(mockDestinations);

  const handleSearch = () => {
    let filtered = mockDestinations;

    // Filter by city
    if (selectedCity !== 'all') {
      filtered = filtered.filter(dest => dest.city === selectedCity);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredDestinations(filtered);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    let filtered = mockDestinations;
    
    if (city !== 'all') {
      filtered = filtered.filter(dest => dest.city === city);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredDestinations(filtered);
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCity('all');
    setFilteredDestinations(mockDestinations);
  };

  return (
    <div className="destinations-page">
      {/* Search Section */}
      <div className="search-section">
        <h2>📍 Explore Popular European Destinations</h2>
        
        <div className="search-form">
          <input
            type="text"
            placeholder="Search attractions (e.g., Eiffel Tower, Colosseum)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
          {(searchQuery || selectedCity !== 'all') && (
            <button onClick={handleReset} className="reset-button">
              Clear All
            </button>
          )}
        </div>

        {/* City Filter Buttons */}
        <div className="city-filters">
          <button
            className={`city-btn ${selectedCity === 'all' ? 'active' : ''}`}
            onClick={() => handleCityChange('all')}
          >
            All Cities
          </button>
          {destinationCities.map(city => (
            <button
              key={city.name}
              className={`city-btn ${selectedCity === city.name ? 'active' : ''}`}
              onClick={() => handleCityChange(city.name)}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <div className="destinations-results">
        <h3>
          {selectedCity === 'all' 
            ? `All Destinations (${filteredDestinations.length})`
            : `Destinations in ${selectedCity} (${filteredDestinations.length})`
          }
        </h3>

        {filteredDestinations.length === 0 ? (
          <div className="no-results">
            <p>No destinations found. Try different search terms!</p>
          </div>
        ) : (
          <div className="destinations-grid">
            {filteredDestinations.map(destination => (
              <div key={destination.id} className="destination-card">
                <div className="destination-image">
                  <img src={destination.image} alt={destination.name} />
                  {destination.mustSee && (
                    <div className="must-see-badge">⭐ Must See</div>
                  )}
                  {destination.entryFee === 0 && (
                    <div className="free-badge">FREE</div>
                  )}
                </div>

                <div className="destination-content">
                  <div className="destination-header">
                    <h3 className="destination-name">{destination.name}</h3>
                    <span className="destination-category">{destination.category}</span>
                  </div>

                  <p className="destination-location">
                    📍 {destination.city}, {destination.country}
                  </p>

                  <p className="destination-description">
                    {destination.description}
                  </p>

                  <div className="destination-info">
                    <div className="info-item">
                      <span className="info-label">Duration:</span>
                      <span className="info-value">{destination.visitDuration}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Best Time:</span>
                      <span className="info-value">{destination.bestTimeToVisit}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Visitors:</span>
                      <span className="info-value">{destination.visitors}</span>
                    </div>
                  </div>

                  <div className="destination-footer">
                    <div className="destination-price">
                      <span className="price-label">Entry Fee</span>
                      <span className="price-amount">
                        {destination.entryFee === 0 
                          ? 'FREE' 
                          : `₹${destination.entryFee.toLocaleString()}`
                        }
                      </span>
                    </div>
                    <button className="add-btn">Add to Itinerary</button>
                  </div>

                  <div className="destination-rating">
                    ⭐ {destination.rating} Rating
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

export default Destinations;