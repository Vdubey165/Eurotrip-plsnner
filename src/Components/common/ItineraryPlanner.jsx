
// src/components/common/ItineraryPlanner.jsx
import React from 'react';
import { useTripContext } from '../../context/TripContext';
import '../../styles/ItineraryPlanner.css';

const ItineraryPlanner = () => {
  const { tripPlan, removeFlight, removeHotel, removeDestination } = useTripContext();

  // Organize items by days
  const organizeByDays = () => {
    const days = [];
    let currentDay = 1;

    // Add flights first (Day 1)
    tripPlan.flights.forEach(flight => {
      days.push({
        day: currentDay,
        type: 'flight',
        item: flight,
        time: flight.departure
      });
      currentDay++;
    });

    // Add hotels
    tripPlan.hotels.forEach((hotel, index) => {
      days.push({
        day: currentDay + index,
        type: 'hotel',
        item: hotel
      });
    });

    // Add destinations
    tripPlan.destinations.forEach((dest, index) => {
      days.push({
        day: currentDay + index,
        type: 'destination',
        item: dest
      });
    });

    return days;
  };

  const itinerary = organizeByDays();

  return (
    <div className="itinerary-planner">
      <h2 className="itinerary-title">📅 Your Itinerary</h2>

      <div className="itinerary-content">
        {itinerary.length === 0 ? (
          <div className="empty-state">
            <p>Your itinerary is empty. Add flights, hotels, and destinations to build your trip!</p>
          </div>
        ) : (
          <div className="itinerary-timeline">
            {itinerary.map((entry, index) => (
              <div key={index} className="itinerary-day">
                <div className="day-marker">
                  <span className="day-number">Day {entry.day}</span>
                </div>
                
                <div className="day-content">
                  {entry.type === 'flight' && (
                    <div className="itinerary-item flight-item">
                      <div className="item-icon">✈️</div>
                      <div className="item-details">
                        <h4>Flight to {entry.item.to.split('(')[0]}</h4>
                        <p>{entry.item.from} → {entry.item.to}</p>
                        <span className="item-time">🕐 Departure: {entry.item.departure}</span>
                      </div>
                      <button 
                        className="remove-btn-small"
                        onClick={() => removeFlight(entry.item.id)}
                        title="Remove from itinerary"
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  {entry.type === 'hotel' && (
                    <div className="itinerary-item hotel-item">
                      <div className="item-icon">🏨</div>
                      <div className="item-details">
                        <h4>{entry.item.name}</h4>
                        <p>📍 {entry.item.location}</p>
                        <span className="item-time">₹{entry.item.price.toLocaleString()}/night</span>
                      </div>
                      <button 
                        className="remove-btn-small"
                        onClick={() => removeHotel(entry.item.id)}
                        title="Remove from itinerary"
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  {entry.type === 'destination' && (
                    <div className="itinerary-item destination-item">
                      <div className="item-icon">📍</div>
                      <div className="item-details">
                        <h4>{entry.item.name}</h4>
                        <p>{entry.item.city}, {entry.item.country}</p>
                        <span className="item-time">⏱️ {entry.item.visitDuration}</span>
                      </div>
                      <button 
                        className="remove-btn-small"
                        onClick={() => removeDestination(entry.item.id)}
                        title="Remove from itinerary"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItineraryPlanner;