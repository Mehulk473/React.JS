import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css'; // Custom CSS for global layout

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
