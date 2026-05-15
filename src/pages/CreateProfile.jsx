import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateProfile.css';

const CreateProfile = () => {
  const navigate = useNavigate();
  
  // 1. Setup simple state for form handling
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    sport: '',
    skillLevel: '',
    availability: '',
    playingLocation: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // 2. Pre-fill existing data from LocalStorage if it exists
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setFormData(JSON.parse(savedProfile));
    }
  }, []);

  // 3. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 4. Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic Validation: Ensure all fields are filled
    if (
      !formData.fullName || 
      !formData.location || 
      !formData.sport || 
      !formData.skillLevel || 
      !formData.availability || 
      !formData.playingLocation
    ) {
      setError('Please fill out all required fields.');
      return;
    }

    // Save to LocalStorage to simulate backend persistence
    localStorage.setItem('userProfile', JSON.stringify(formData));
    
    // Set a dummy user session if not already logged in, to keep navbar updated
    localStorage.setItem('currentUser', JSON.stringify({ name: formData.fullName }));

    setSuccess('Profile saved successfully! Redirecting...');

    // Automatically navigate to players listing page after 1.5 seconds
    setTimeout(() => {
      navigate('/players');
    }, 1500);
  };

  return (
    <div className="profile-page-container">
      <div className="profile-card">
        <h2>Setup Your Profile</h2>
        <p className="profile-subtitle">Help us match you with the perfect playing partners!</p>
        
        {error && <div className="alert error-alert">{error}</div>}
        {success && <div className="alert success-alert">{success}</div>}

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">City/Area *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Downtown, Seattle"
            />
          </div>

          <div className="form-group">
            <label htmlFor="sport">Preferred Sport *</label>
            <select name="sport" id="sport" value={formData.sport} onChange={handleChange}>
              <option value="">Select a sport</option>
              <option value="Badminton">Badminton</option>
              <option value="Cricket">Cricket</option>
              <option value="Chess">Chess</option>
              <option value="Carrom">Carrom</option>
              <option value="Table Tennis">Table Tennis</option>
              <option value="Football">Football</option>
              <option value="Cards">Cards</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="skillLevel">Skill Level *</label>
            <select name="skillLevel" id="skillLevel" value={formData.skillLevel} onChange={handleChange}>
              <option value="">Select your skill level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="availability">Availability *</label>
            <select name="availability" id="availability" value={formData.availability} onChange={handleChange}>
              <option value="">Select availability</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Weekend">Weekend</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="playingLocation">Preferred Playing Location *</label>
            <select name="playingLocation" id="playingLocation" value={formData.playingLocation} onChange={handleChange}>
              <option value="">Select preferred location</option>
              <option value="Home">Home</option>
              <option value="Society Clubhouse">Society Clubhouse</option>
              <option value="Local Ground">Local Ground</option>
              <option value="Sports Complex">Sports Complex</option>
            </select>
          </div>

          <button type="submit" className="btn-primary w-100 mt-1">
            Save Profile & Find Players
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
