import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Simple SVG Icon for the Cart
const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const Navbar = ({ user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Helper to get initials
  const getInitial = () => {
    if (user && user.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "U";
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">FRESH<span style={{color:'#2ecc71'}}>.</span></Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/plans">Weekly Plans</Link></li>
        {/* UPDATED: Removed inline green style so it matches other tabs */}
        <li><Link to="/build-plan">Build Your Plan</Link></li> 
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      {/* Container: Added flex and gap to align items */}
      <div className="auth" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        
        {/* Track Order / Cart Button (Only visible if logged in) */}
        {user && (
          <Link to="/orders" className="cart-icon-btn" title="My Orders">
             <CartIcon />
          </Link>
        )}

        {/* Profile Logic */}
        {user ? (
          <>
            <div className="profile-menu" onClick={() => setShowDropdown(!showDropdown)}>
              <div className="profile-icon">{getInitial()}</div>
              <span className="profile-text">My Account</span>
            </div>

            {showDropdown && (
              <div className="profile-dropdown">
                <div className="dropdown-header">
                  <strong>Hello!</strong>
                  <span>{user.email}</span>
                </div>
                
                <ul className="dropdown-list">
                  <li><Link to="/profile">Profile Settings</Link></li>
                  <li onClick={onLogout} className="logout-item">Log Out</li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link to="/login" className="login-btn">Log In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;