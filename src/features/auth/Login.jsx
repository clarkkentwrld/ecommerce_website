import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Added hook
import './Login.css';

const Login = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  
  // 1. Get the location state (to see if they were redirected)
  const location = useLocation(); 
  const pendingLocation = location.state?.from;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // 2. Pass the pending location along with the email
      onLogin(email, pendingLocation); 
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome!</h2>
        
        {/* Dynamic Subtext: Changes if they were forced to login */}
        <p className="subtext">
          {pendingLocation 
            ? <span style={{color: '#e67e22', fontWeight: '600'}}>Please log in to continue your order.</span> 
            : "Log in to manage your subscription."
          }
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@gmail.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="login-submit-btn" disabled={isLoading}>
            {isLoading ? <div className="spinner"></div> : "Log In"}
          </button>
        </form>
        
        <p className="forgot-password">Forgot Password?</p>
      </div>
    </div>
  );
};

export default Login;