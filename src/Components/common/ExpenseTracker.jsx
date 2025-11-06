// src/components/common/ExpenseTracker.jsx
import React from 'react';
import { useTripContext } from '../../context/TripContext';
import '../../styles/ExpenseTracker.css';

const ExpenseTracker = () => {
  const { tripPlan, calculateTotal, removeFlight, removeHotel, removeDestination } = useTripContext();
  const expenses = calculateTotal();

  return (
    <div className="expense-tracker">
      <h2 className="expense-title">💰 Budget Tracker</h2>
      
      <div className="expense-summary">
        <div className="expense-item">
          <span className="expense-label">Flights</span>
          <span className="expense-value">₹{expenses.flights.toLocaleString()}</span>
        </div>
        <div className="expense-item">
          <span className="expense-label">Hotels</span>
          <span className="expense-value">₹{expenses.hotels.toLocaleString()}</span>
        </div>
        <div className="expense-item">
          <span className="expense-label">Attractions</span>
          <span className="expense-value">₹{expenses.destinations.toLocaleString()}</span>
        </div>
        <div className="expense-total">
          <span className="expense-label">Total</span>
          <span className="expense-value">₹{expenses.total.toLocaleString()}</span>
        </div>
      </div>

      {/* Detailed List */}
      <div className="expense-details">
        {tripPlan.flights.length > 0 && (
          <div className="expense-section">
            <h4>✈️ Flights ({tripPlan.flights.length})</h4>
            {tripPlan.flights.map(flight => (
              <div key={flight.id} className="expense-list-item">
                <div className="item-info">
                  <span className="item-name">{flight.from} → {flight.to}</span>
                  <span className="item-price">₹{flight.price.toLocaleString()}</span>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFlight(flight.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {tripPlan.hotels.length > 0 && (
          <div className="expense-section">
            <h4>🏨 Hotels ({tripPlan.hotels.length})</h4>
            {tripPlan.hotels.map(hotel => (
              <div key={hotel.id} className="expense-list-item">
                <div className="item-info">
                  <span className="item-name">{hotel.name}</span>
                  <span className="item-price">₹{hotel.price.toLocaleString()}</span>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeHotel(hotel.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {tripPlan.destinations.length > 0 && (
          <div className="expense-section">
            <h4>📍 Attractions ({tripPlan.destinations.length})</h4>
            {tripPlan.destinations.map(dest => (
              <div key={dest.id} className="expense-list-item">
                <div className="item-info">
                  <span className="item-name">{dest.name}</span>
                  <span className="item-price">
                    {dest.entryFee === 0 ? 'FREE' : `₹${dest.entryFee.toLocaleString()}`}
                  </span>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeDestination(dest.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {tripPlan.flights.length === 0 && 
         tripPlan.hotels.length === 0 && 
         tripPlan.destinations.length === 0 && (
          <div className="empty-state">
            <p>Start adding items to your trip plan!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseTracker;