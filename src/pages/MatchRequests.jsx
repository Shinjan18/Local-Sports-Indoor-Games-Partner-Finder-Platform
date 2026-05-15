import React, { useState, useEffect } from 'react';
import './Requests.css';

const MatchRequests = () => {
  const [requests, setRequests] = useState([]);

  // Load pending requests from LocalStorage
  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem('matchRequests')) || [];
    // Only show "Pending" requests in the action inbox
    const pendingRequests = savedRequests.filter(req => req.status === 'Pending');
    setRequests(pendingRequests);
  }, []);

  // Handle Accept or Decline
  const updateRequestStatus = (id, newStatus) => {
    const allRequests = JSON.parse(localStorage.getItem('matchRequests')) || [];
    
    // Update the status in the main array
    const updatedRequests = allRequests.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    );
    
    // Save back to LocalStorage
    localStorage.setItem('matchRequests', JSON.stringify(updatedRequests));
    
    // Update local state to remove the processed request from the screen
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <div className="requests-page">
      <div className="page-header">
        <h1>Match Requests</h1>
        <p>Review and respond to pending game invitations.</p>
      </div>

      <div className="requests-container">
        {requests.length > 0 ? (
          requests.map((req) => (
            <div key={req.id} className="request-card">
              <div className="request-info">
                <h3>{req.playerName} wants to play!</h3>
                <div className="request-details">
                  <span className="badge sport-badge">{req.sport}</span>
                  <span className="request-date">Sent: {req.date}</span>
                  <span className="badge status-pending">{req.status}</span>
                </div>
              </div>
              <div className="request-actions">
                <button 
                  className="btn-success" 
                  onClick={() => updateRequestStatus(req.id, 'Accepted')}
                >
                  ✓ Accept
                </button>
                <button 
                  className="btn-danger" 
                  onClick={() => updateRequestStatus(req.id, 'Declined')}
                >
                  ✕ Decline
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <h2>No pending requests</h2>
            <p>You're all caught up! Browse the players list to send new match requests.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchRequests;
