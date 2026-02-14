import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Plans from './features/plans/Plans';
import Menu from './features/menu/Menu';
import About from './features/about/About';
import Login from './features/auth/Login';
import Order from './features/order/Order';
import Orders from './features/orders/Orders';
import Home from './features/home/Home';
import BuildPlan from './features/custom/BuildPlan'; 
import './App.css'; 

function App() {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

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
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLoginSuccess} />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/build-plan" element={<BuildPlan />} />
        </Routes>
      </main>

      {/* Conditionally Render Footer: Show everywhere EXCEPT /build-plan */}
      {location.pathname !== '/build-plan' && <Footer />} 
    </div>
  );
}

export default App;