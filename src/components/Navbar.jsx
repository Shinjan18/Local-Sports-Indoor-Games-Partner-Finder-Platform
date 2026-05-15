import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🏆 PlayPartner</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {isLoggedIn && (
          <>
            <li><Link to="/players">Find Players</Link></li>
            <li><Link to="/requests">Requests</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/profile/setup">Profile</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </>
        )}
      </ul>
      <div className="navbar-actions">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn-logout">Logout</button>
        ) : (
          <>
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/signup" className="btn-signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
