import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Plans from './features/plans/Plans';
import Menu from './features/menu/Menu';
import About from './features/about/About';
import Login from './features/auth/Login';
import Order from './features/order/Order';
import Orders from './features/orders/Orders';
import Home from './features/home/Home'; // Import the new Home file
import './App.css'; 

function App() {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  const handleLoginSuccess = (emailData) => {
    setUser({ email: emailData });
    navigate('/menu');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="App">
      <Navbar user={user} onLogout={handleLogout} />
      
      <main>
        <Routes>
          {/* Use the Home Component which now contains the Hero + other sections */}
          <Route path="/" element={<Home />} />
          
          <Route path="/plans" element={<Plans />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLoginSuccess} />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;