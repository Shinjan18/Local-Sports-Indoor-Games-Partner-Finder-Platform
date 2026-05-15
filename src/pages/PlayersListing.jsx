import React, { useState, useEffect } from 'react';
import { dummyPlayers } from '../data/dummyPlayers';
import './PlayersListing.css';

const PlayersListing = () => {
  // State for players (we start with dummy data)
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  
  // State for filters
  const [sportFilter, setSportFilter] = useState('All');
  const [skillFilter, setSkillFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  // State for feedback messages
  const [feedback, setFeedback] = useState('');

  // Read User Profile on mount to sort/prioritize players
  useEffect(() => {
    let sortedPlayers = [...dummyPlayers];
    
    // Check if user has a profile
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const user = JSON.parse(savedProfile);
      
      // If user has a preferred sport, bring those players to the top
      if (user.sport) {
        sortedPlayers.sort((a, b) => {
          if (a.sport === user.sport && b.sport !== user.sport) return -1;
          if (a.sport !== user.sport && b.sport === user.sport) return 1;
          return 0; // Keep original order otherwise
        });
      }
    }

    setPlayers(sortedPlayers);
    setFilteredPlayers(sortedPlayers);
  }, []);

  // Filter Logic
  useEffect(() => {
    let result = players;

    if (sportFilter !== 'All') {
      result = result.filter(player => player.sport === sportFilter);
    }
    if (skillFilter !== 'All') {
      result = result.filter(player => player.skillLevel === skillFilter);
    }
    if (locationFilter !== 'All') {
      result = result.filter(player => player.location === locationFilter);
    }

    setFilteredPlayers(result);
  }, [sportFilter, skillFilter, locationFilter, players]);

  // Match Request Logic
  const handleSendRequest = (player) => {
    // 1. Get existing requests from LocalStorage (or create empty array)
    const existingRequests = JSON.parse(localStorage.getItem('matchRequests')) || [];

    // 2. Check if already requested to prevent spam
    const alreadyRequested = existingRequests.some(req => req.playerId === player.id);
    if (alreadyRequested) {
      setFeedback(`You already sent a request to ${player.name}.`);
      clearFeedback();
      return;
    }

    // 3. Create a new request object
    const newRequest = {
      id: Date.now(), // simple unique ID
      playerId: player.id,
      playerName: player.name,
      sport: player.sport,
      status: 'Pending',
      date: new Date().toLocaleDateString()
    };

    // 4. Save to LocalStorage
    localStorage.setItem('matchRequests', JSON.stringify([...existingRequests, newRequest]));

    // 5. Show Success Feedback
    setFeedback(`Request Sent Successfully to ${player.name}!`);
    clearFeedback();
  };

  const clearFeedback = () => {
    setTimeout(() => {
      setFeedback('');
    }, 3000);
  };

  // Get unique lists for filter dropdowns based on data
  const allSports = ['All', ...new Set(dummyPlayers.map(p => p.sport))];
  const allSkills = ['All', ...new Set(dummyPlayers.map(p => p.skillLevel))];
  const allLocations = ['All', ...new Set(dummyPlayers.map(p => p.location))];

  return (
    <div className="players-page">
      <div className="players-header">
        <h1>Find Players</h1>
        <p>Browse nearby players and send match requests to start playing.</p>
      </div>

      {feedback && <div className="feedback-banner">{feedback}</div>}

      <div className="filters-bar">
        <div className="filter-group">
          <label>Sport</label>
          <select value={sportFilter} onChange={(e) => setSportFilter(e.target.value)}>
            {allSports.map(sport => <option key={sport} value={sport}>{sport}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label>Skill Level</label>
          <select value={skillFilter} onChange={(e) => setSkillFilter(e.target.value)}>
            {allSkills.map(skill => <option key={skill} value={skill}>{skill}</option>)}
          </select>
        </div>

        <div className="filter-group">
          <label>Location</label>
          <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
            {allLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>
      </div>

      <div className="players-grid">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <div key={player.id} className="player-card">
              <div className="player-card-header">
                <h3>{player.name}</h3>
                <span className="badge sport-badge">{player.sport}</span>
              </div>
              <div className="player-card-body">
                <p><strong>Skill:</strong> <span className={`badge skill-${player.skillLevel.toLowerCase()}`}>{player.skillLevel}</span></p>
                <p><strong>Area:</strong> {player.location}</p>
                <p><strong>Availability:</strong> {player.availability}</p>
                <p><strong>Prefers:</strong> {player.playingLocation}</p>
              </div>
              <button 
                className="btn-primary w-100" 
                onClick={() => handleSendRequest(player)}
              >
                Send Match Request
              </button>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No players found matching your filters.</p>
            <button className="btn-secondary mt-1" onClick={() => {
              setSportFilter('All');
              setSkillFilter('All');
              setLocationFilter('All');
            }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayersListing;
