import React from 'react';
import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Account Balance</h3>
          <p>$25,000</p>
        </div>
        <div className="stat-card">
          <h3>Recent Transactions</h3>
          <p>Last transaction: $500</p>
        </div>
        <div className="stat-card">
          <h3>Loans</h3>
          <p>$10,000 Remaining</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
