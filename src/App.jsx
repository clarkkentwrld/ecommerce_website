import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const [subscriptions, setSubscriptions] = useState([
    {
      id: "SUB-1001",
      plan: "Keto Meal Box (Premium)",
      status: "active", 
      price: "₱2,449",
      billingCycle: "Weekly",
      nextDelivery: "Feb 23, 2026",
      image: "https://placehold.co/100x100?text=Keto"
    }
  ]);

  const [pastOrders, setPastOrders] = useState([
    {
      id: "ORD-5521",
      date: "Feb 16, 2026",
      status: "to-ship",
      total: "₱190",
      items: ["The Power Silog (Beef Tapa)"],
      type: "one-time",
      image: "https://placehold.co/100x100?text=Tapa"
    },
    // ... (Keep your existing mock data here)
  ]);

  const addSubscription = (newSub) => {
    setSubscriptions([newSub, ...subscriptions]);
  };

  const addOneTimeOrder = (newOrder) => {
    const orderWithStatus = { ...newOrder, status: 'to-ship' };
    setPastOrders([orderWithStatus, ...pastOrders]);
  };

  const cancelSubscription = (id) => {
    setSubscriptions(prev => prev.filter(sub => sub.id !== id));
  };

  const cancelOneTimeOrder = (id) => {
    setPastOrders(prev => prev.filter(order => order.id !== id));
  };

  // --- UPDATED LOGIN HANDLER ---
  const handleLoginSuccess = (emailData, pendingLocation) => {
    setUser({ email: emailData });
    
    // REDIRECT LOGIC: If there is a saved location, go there.
    if (pendingLocation) {
      navigate(pendingLocation.pathname, { state: pendingLocation.state });
    } else {
      navigate('/menu');
    }
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
          
          {/* Pass handleLoginSuccess to Login */}
          <Route path="/login" element={<Login onLogin={handleLoginSuccess} />} />
          
          <Route 
            path="/order" 
            element={
              <Order 
                user={user} // Pass user state for auth check
                addSubscription={addSubscription} 
                addOneTimeOrder={addOneTimeOrder} 
              />
            } 
          />
          
          <Route 
            path="/orders" 
            element={
              <Orders 
                subscriptions={subscriptions} 
                pastOrders={pastOrders}
                cancelSubscription={cancelSubscription}
                cancelOrder={cancelOneTimeOrder}
              />
            } 
          />
          
          <Route path="/build-plan" element={<BuildPlan />} />
        </Routes>
      </main>

      {location.pathname !== '/build-plan' && <Footer />} 
    </div>
  );
}

export default App;