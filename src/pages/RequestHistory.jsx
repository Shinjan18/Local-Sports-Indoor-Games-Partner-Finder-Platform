import React, { useState, useEffect } from 'react';
import './Requests.css';

const RequestHistory = () => {
  const [history, setHistory] = useState([]);

  // Load all requests from LocalStorage
  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem('matchRequests')) || [];
    // Sort so newest is on top (using id which is Date.now())
    const sortedHistory = savedRequests.sort((a, b) => b.id - a.id);
    setHistory(sortedHistory);
  }, []);

  // Helper to color code statuses
  const getStatusClass = (status) => {
    switch (status) {
      case 'Accepted': return 'status-accepted';
      case 'Declined': return 'status-declined';
      default: return 'status-pending';
    }
  };

  return (
    <div className="requests-page">
      <div className="page-header">
        <h1>Request History</h1>
        <p>A complete log of all your match requests.</p>
      </div>

      <div className="history-container">
        {history.length > 0 ? (
          history.map((req) => (
            <div key={req.id} className="history-card">
              <div className="history-info">
                <h3>{req.playerName}</h3>
                <div className="history-details">
                  <span className="badge sport-badge">{req.sport}</span>
                  <span className="request-date">{req.date}</span>
                </div>
              </div>
              <div className="history-status">
                <span className={`badge ${getStatusClass(req.status)}`}>
                  {req.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <span className="empty-icon">📝</span>
            <h2>No match requests yet</h2>
            <p>Once you send or receive match requests, they will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestHistory;
