import React, { useState } from 'react';
import './Orders.css'; // We will create this next

const Orders = () => {
  // 1. State to track which tab is active
  const [activeTab, setActiveTab] = useState('ship');

  // 2. Mock Data (Simulating a database)
  const allOrders = [
    {
      id: "ORD-7782",
      status: "ship", // Matches the tab key
      date: "Feb 12, 2026",
      total: "$54.99",
      items: ["Keto Meal Box (5 meals)"],
      image: "https://placehold.co/100x100?text=Keto"
    },
    {
      id: "ORD-9921",
      status: "receive",
      date: "Feb 10, 2026",
      total: "$32.50",
      items: ["Protein Supplements", "Shaker Bottle"],
      image: "https://placehold.co/100x100?text=Supplements"
    },
    {
      id: "ORD-1102",
      status: "completed",
      date: "Jan 28, 2026",
      total: "$89.99",
      items: ["Chef's Choice (Full Week)"],
      image: "https://placehold.co/100x100?text=Chef"
    },
    {
      id: "ORD-0092",
      status: "completed",
      date: "Jan 15, 2026",
      total: "$12.99",
      items: ["Vegan Starter Kit"],
      image: "https://placehold.co/100x100?text=Vegan"
    }
  ];

  // 3. Filter orders based on the active tab
  const displayedOrders = allOrders.filter(order => order.status === activeTab);

  return (
    <div className="orders-container">
      <h1>My Purchases</h1>

      {/* TABS HEADER */}
      <div className="tabs-header">
        <button 
          className={`tab-btn ${activeTab === 'ship' ? 'active' : ''}`}
          onClick={() => setActiveTab('ship')}
        >
          To Ship
        </button>
        <button 
          className={`tab-btn ${activeTab === 'receive' ? 'active' : ''}`}
          onClick={() => setActiveTab('receive')}
        >
          To Receive
        </button>
        <button 
          className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
      </div>

      {/* ORDERS LIST */}
      <div className="orders-list">
        {displayedOrders.length > 0 ? (
          displayedOrders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <span className="order-id">ID: {order.id}</span>
                <span className={`status-badge ${order.status}`}>
                  {order.status === 'ship' ? 'Processing' : 
                   order.status === 'receive' ? 'Out for Delivery' : 'Delivered'}
                </span>
              </div>
              
              <div className="order-body">
                <img src={order.image} alt="Product" className="order-img" />
                <div className="order-info">
                  <h4>{order.items[0]} {order.items.length > 1 && `+ ${order.items.length - 1} more`}</h4>
                  <p>Order Date: {order.date}</p>
                </div>
                <div className="order-price">
                  {order.total}
                </div>
              </div>

              <div className="order-footer">
                <button className="track-btn">
                  {order.status === 'completed' ? 'Buy Again' : 'Track Order'}
                </button>
              </div>
            </div>
          ))
        ) : (
          /* EMPTY STATE */
          <div className="empty-state">
            <div className="empty-icon">📦</div>
            <p>No orders found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;