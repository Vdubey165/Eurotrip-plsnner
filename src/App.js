// src/App.js - REPLACE ENTIRE FILE
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/common/Header';
import PageLayout from './Components/layout/PageLayout';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Destinations from './pages/Destinations';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/flights" 
            element={
              <PageLayout>
                <Flights />
              </PageLayout>
            } 
          />
          <Route 
            path="/hotels" 
            element={
              <PageLayout>
                <Hotels />
              </PageLayout>
            } 
          />
          <Route 
            path="/destinations" 
            element={
              <PageLayout>
                <Destinations />
              </PageLayout>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;