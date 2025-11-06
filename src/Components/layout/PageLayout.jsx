// src/components/layout/PageLayout.jsx
import React from 'react';
import ExpenseTracker from '../common/ExpenseTracker';
import ItineraryPlanner from '../common/ItineraryPlanner';
import '../../styles/PageLayout.css';

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <aside className="sidebar-left">
        <ExpenseTracker />
      </aside>
      
      <main className="main-content">
        {children}
      </main>
      
      <aside className="sidebar-right">
        <ItineraryPlanner />
      </aside>
    </div>
  );
};

export default PageLayout;