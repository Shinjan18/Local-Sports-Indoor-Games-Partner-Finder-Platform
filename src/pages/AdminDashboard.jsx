import React, { useState, useEffect } from 'react';
import { dummyPlayers } from '../data/dummyPlayers';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRequests: 0,
    acceptedMatches: 0,
    activePlayers: 0,
    mostPopularSport: '-'
  });

  useEffect(() => {
    // 1. Calculate Registered Users
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    // 2. Calculate Requests and Accepted Matches
    const matchRequests = JSON.parse(localStorage.getItem('matchRequests')) || [];
    const acceptedCount = matchRequests.filter(req => req.status === 'Accepted').length;

    // 3. Calculate Most Popular Sport (combining dummy + requests)
    const sportCounts = {};
    dummyPlayers.forEach(p => {
      sportCounts[p.sport] = (sportCounts[p.sport] || 0) + 1;
    });
    
    let popularSport = '-';
    let maxCount = 0;
    for (const sport in sportCounts) {
      if (sportCounts[sport] > maxCount) {
        maxCount = sportCounts[sport];
        popularSport = sport;
      }
    }

    setStats({
      totalUsers: registeredUsers.length + dummyPlayers.length, // Include dummy for realism
      totalRequests: matchRequests.length,
      acceptedMatches: acceptedCount,
      activePlayers: dummyPlayers.length,
      mostPopularSport: popularSport
    });
  }, []);

  return (
    <div className="admin-page">
      <div className="page-header">
        <h1>Admin Dashboard</h1>
        <p>Platform overview and simple statistics.</p>
      </div>

      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>Total Users</h3>
            <p className="stat-number">{stats.totalUsers}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏃</div>
          <div className="stat-content">
            <h3>Active Players</h3>
            <p className="stat-number">{stats.activePlayers}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📬</div>
          <div className="stat-content">
            <h3>Total Match Requests</h3>
            <p className="stat-number">{stats.totalRequests}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🤝</div>
          <div className="stat-content">
            <h3>Accepted Matches</h3>
            <p className="stat-number">{stats.acceptedMatches}</p>
          </div>
        </div>

        <div className="stat-card highlight-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <h3>Most Popular Sport</h3>
            <p className="stat-number">{stats.mostPopularSport}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
