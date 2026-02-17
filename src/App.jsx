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

  // --- STATE 1: SUBSCRIPTIONS ---
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

  // --- STATE 2: ONE-TIME ORDERS (UPDATED DATA) ---
  const [pastOrders, setPastOrders] = useState([
    // 1. TO SHIP (Default new ones go here)
    {
      id: "ORD-5521",
      date: "Feb 16, 2026",
      status: "to-ship",
      total: "₱190",
      items: ["The Power Silog (Beef Tapa)"],
      type: "one-time",
      image: "https://placehold.co/100x100?text=Tapa"
    },
    
    // 2. TO RECEIVE (Exactly 1 item as requested)
    {
      id: "ORD-3310",
      date: "Feb 14, 2026",
      status: "to-receive",
      total: "₱185",
      items: ["Pork Power (Menudo)"],
      type: "one-time",
      image: "https://placehold.co/100x100?text=Menudo"
    },

    // 3. COMPLETED (Exactly 3 items as requested)
    {
      id: "ORD-1101",
      date: "Jan 28, 2026",
      status: "completed",
      total: "₱150",
      items: ["The Classic Slim (Longganisa)"],
      type: "one-time",
      image: "https://placehold.co/100x100?text=Slim"
    },
    {
      id: "ORD-1102",
      date: "Jan 20, 2026",
      status: "completed",
      total: "₱200",
      items: ["Sausage Fest (Hungarian)"],
      type: "one-time",
      image: "https://placehold.co/100x100?text=Sausage"
    },
    {
      id: "ORD-1103",
      date: "Jan 15, 2026",
      status: "completed",
      total: "₱160",
      items: ["Fish & Fowl (Bangus)"],
      type: "one-time",
      image: "https://placehold.co/100x100?text=Fish"
    }
  ]);

  // HANDLER: Add Subscription
  const addSubscription = (newSub) => {
    setSubscriptions([newSub, ...subscriptions]);
  };

  // HANDLER: Add Order
  const addOneTimeOrder = (newOrder) => {
    const orderWithStatus = { ...newOrder, status: 'to-ship' };
    setPastOrders([orderWithStatus, ...pastOrders]);
  };

  // HANDLER: Remove Subscription
  const cancelSubscription = (id) => {
    setSubscriptions(prev => prev.filter(sub => sub.id !== id));
  };

  // HANDLER: Remove One-Time Order
  const cancelOneTimeOrder = (id) => {
    setPastOrders(prev => prev.filter(order => order.id !== id));
  };

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
          
          <Route 
            path="/order" 
            element={
              <Order 
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