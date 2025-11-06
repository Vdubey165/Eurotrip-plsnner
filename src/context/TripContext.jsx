// src/context/TripContext.js
import React, { createContext, useState, useContext } from 'react';

const TripContext = createContext();

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripContext must be used within TripProvider');
  }
  return context;
};

export const TripProvider = ({ children }) => {
  const [tripPlan, setTripPlan] = useState({
    flights: [],
    hotels: [],
    destinations: []
  });

  // Add flight to plan
  const addFlight = (flight) => {
    // Check if already added
    const exists = tripPlan.flights.find(f => f.id === flight.id);
    if (exists) {
      alert('This flight is already in your plan!');
      return false;
    }
    setTripPlan(prev => ({
      ...prev,
      flights: [...prev.flights, flight]
    }));
    return true;
  };

  // Add hotel to plan
  const addHotel = (hotel) => {
    const exists = tripPlan.hotels.find(h => h.id === hotel.id);
    if (exists) {
      alert('This hotel is already in your plan!');
      return false;
    }
    setTripPlan(prev => ({
      ...prev,
      hotels: [...prev.hotels, hotel]
    }));
    return true;
  };

  // Add destination to plan
  const addDestination = (destination) => {
    const exists = tripPlan.destinations.find(d => d.id === destination.id);
    if (exists) {
      alert('This destination is already in your itinerary!');
      return false;
    }
    setTripPlan(prev => ({
      ...prev,
      destinations: [...prev.destinations, destination]
    }));
    return true;
  };

  // Remove items
  const removeFlight = (id) => {
    setTripPlan(prev => ({
      ...prev,
      flights: prev.flights.filter(f => f.id !== id)
    }));
  };

  const removeHotel = (id) => {
    setTripPlan(prev => ({
      ...prev,
      hotels: prev.hotels.filter(h => h.id !== id)
    }));
  };

  const removeDestination = (id) => {
    setTripPlan(prev => ({
      ...prev,
      destinations: prev.destinations.filter(d => d.id !== id)
    }));
  };

  // Calculate total expenses
  const calculateTotal = () => {
    const flightTotal = tripPlan.flights.reduce((sum, f) => sum + f.price, 0);
    const hotelTotal = tripPlan.hotels.reduce((sum, h) => sum + h.price, 0);
    const destinationTotal = tripPlan.destinations.reduce((sum, d) => sum + d.entryFee, 0);
    return {
      flights: flightTotal,
      hotels: hotelTotal,
      destinations: destinationTotal,
      total: flightTotal + hotelTotal + destinationTotal
    };
  };

  // Check if item is in plan
  const isInPlan = (type, id) => {
    return tripPlan[type].some(item => item.id === id);
  };

  const value = {
    tripPlan,
    addFlight,
    addHotel,
    addDestination,
    removeFlight,
    removeHotel,
    removeDestination,
    calculateTotal,
    isInPlan
  };

  return (
    <TripContext.Provider value={value}>
      {children}
    </TripContext.Provider>
  );
};