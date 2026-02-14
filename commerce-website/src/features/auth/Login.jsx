import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  // 1. NEW: State to track what the user types
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // 2. PASS THE EMAIL UP to the App component
      onLogin(email); 
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtext">Log in to manage your subscription.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            {/* 3. BIND THE INPUT to our state */}
            <input 
              type="email" 
              placeholder="name@example.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Updates state as you type
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
      </div>
    </div>
  );
};

export default Login;