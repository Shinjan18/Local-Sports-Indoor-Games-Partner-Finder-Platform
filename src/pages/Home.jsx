import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const popularSports = [
    { id: 1, name: 'Badminton', icon: '🏸' },
    { id: 2, name: 'Cricket', icon: '🏏' },
    { id: 3, name: 'Chess', icon: '♟️' },
    { id: 4, name: 'Carrom', icon: '🎯' },
    { id: 5, name: 'Table Tennis', icon: '🏓' },
    { id: 6, name: 'Football', icon: '⚽' },
  ];

  const benefits = [
    { id: 1, title: 'Easy Discovery', desc: 'Find partners based on your location and preferred game.', icon: '🔍' },
    { id: 2, title: 'Safe Community', desc: 'Connect with verified local players in a secure environment.', icon: '🛡️' },
    { id: 3, title: 'Indoor & Outdoor', desc: 'From chess to football, find partners for any game.', icon: '🏟️' },
    { id: 4, title: 'Skill Matching', desc: 'Play with beginners or challenge advanced players.', icon: '⭐' },
  ];

  return (
    <div className="home-container">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Perfect Sports Partner</h1>
          <p className="hero-subtitle">
            Connect with nearby players for badminton, cricket, chess, carrom, table tennis, football, and more. Stop waiting, start playing!
          </p>
          <div className="hero-buttons">
            <Link to="/profile/setup" className="btn-primary">Create Profile</Link>
            <Link to="/players" className="btn-secondary">Find Players</Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Using a high quality sports-related placeholder image */}
          <img 
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80" 
            alt="People playing sports" 
          />
        </div>
      </section>

      {/* 2. Popular Sports Section */}
      <section className="sports-section">
        <h2 className="section-title">Popular Sports & Games</h2>
        <div className="sports-grid">
          {popularSports.map((sport) => (
            <div key={sport.id} className="sport-card">
              <span className="sport-icon">{sport.icon}</span>
              <h3>{sport.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Create Your Profile</h3>
            <p>Add your details, favorite sports, and skill levels.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Find Nearby Players</h3>
            <p>Browse local players who share your sporting interests.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Send Match Request</h3>
            <p>Connect and schedule your next game easily.</p>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="benefits-section">
        <h2 className="section-title">Why Choose PlayPartner</h2>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <span className="benefit-icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
