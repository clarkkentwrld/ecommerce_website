import React, { useState } from 'react';
import './Orders.css'; 

const Orders = ({ subscriptions, pastOrders, cancelSubscription, cancelOrder }) => {
  const [activeTab, setActiveTab] = useState('subs');
  const [historyFilter, setHistoryFilter] = useState('to-ship');

  // --- RATING MODAL STATE ---
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [rating, setRating] = useState(0);

  const openRatingModal = (order) => {
    setSelectedOrder(order);
    setRating(0); 
    setIsRatingOpen(true);
  };

  const closeRatingModal = () => {
    setIsRatingOpen(false);
    setSelectedOrder(null);
  };

  const handleSubmitRating = () => {
    alert(`Thank you for rating ${selectedOrder.items[0]} with ${rating} stars!`);
    closeRatingModal();
  };

  // Filter Logic
  const filteredHistory = pastOrders.filter(order => order.status === historyFilter);

  return (
    <div className="orders-container">
      <div className="orders-header-content">
        <h1>My Dashboard</h1>
        <p>Manage your active subscriptions and view order history.</p>
      </div>

      {/* --- LEVEL 1 TABS --- */}
      <div className="tabs-header">
        <button 
          className={`tab-btn ${activeTab === 'subs' ? 'active' : ''}`}
          onClick={() => setActiveTab('subs')}
        >
          My Subscriptions
        </button>
        <button 
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Order History
        </button>
      </div>

      {/* --- LEVEL 2 TABS (MOVED OUTSIDE THE LIST) --- */}
      {activeTab === 'history' && (
        <div className="sub-tabs-container">
          <button 
            className={`sub-tab-btn ${historyFilter === 'to-ship' ? 'active' : ''}`} 
            onClick={() => setHistoryFilter('to-ship')}
          >
            To Ship
          </button>
          <button 
            className={`sub-tab-btn ${historyFilter === 'to-receive' ? 'active' : ''}`} 
            onClick={() => setHistoryFilter('to-receive')}
          >
            To Receive
          </button>
          <button 
            className={`sub-tab-btn ${historyFilter === 'completed' ? 'active' : ''}`} 
            onClick={() => setHistoryFilter('completed')}
          >
            Completed
          </button>
        </div>
      )}

      {/* --- CONTENT LIST --- */}
      <div className="orders-list">
        
        {/* VIEW 1: SUBSCRIPTIONS */}
        {activeTab === 'subs' && (
          subscriptions.length > 0 ? (
            subscriptions.map((sub) => (
              <div key={sub.id} className="order-card active-sub">
                <div className="order-header">
                  <span className="order-id">ID: {sub.id}</span>
                  <span className="status-badge active">● Active</span>
                </div>
                
                <div className="order-body">
                  <img src={sub.image} alt="Plan" className="order-img" />
                  <div className="order-info">
                    <h4>{sub.plan}</h4>
                    <div className="sub-details">
                      <p><strong>Billing:</strong> {sub.billingCycle}</p>
                      <p className="next-date"><strong>Next Delivery:</strong> {sub.nextDelivery}</p>
                    </div>
                  </div>
                  <div className="order-price">
                    {sub.price}<small>/week</small>
                  </div>
                </div>

                <div className="order-footer">
                  <button className="danger-btn" onClick={() => cancelSubscription(sub.id)}>
                    Cancel Subscription
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📅</div>
              <p>No active subscriptions found.</p>
            </div>
          )
        )}

        {/* VIEW 2: ORDER HISTORY */}
        {activeTab === 'history' && (
          filteredHistory.length > 0 ? (
            filteredHistory.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <span className="order-id">Order #{order.id}</span>
                  <span className="status-text">{order.date}</span>
                </div>
                
                <div className="order-body">
                  <img src={order.image} alt="Order" className="order-img" />
                  <div className="order-info">
                    <h4>{order.items[0]}</h4>
                    <span className={`status-pill ${order.status}`}>
                      {order.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="order-price">
                    {order.total}
                  </div>
                </div>

                <div className="order-footer">
                  {order.status === 'to-ship' && (
                    <button className="danger-btn" onClick={() => cancelOrder(order.id)}>
                      Cancel Order
                    </button>
                  )}

                  {order.status === 'to-receive' && (
                    <button className="secondary-btn">Track Package</button>
                  )}

                  {order.status === 'completed' && (
                    <>
                      <button className="primary-btn" onClick={() => openRatingModal(order)}>
                        Rate Order
                      </button>
                      <button className="secondary-btn">Buy Again</button>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📦</div>
              <p>No orders in "{historyFilter.replace('-', ' ')}".</p>
            </div>
          )
        )}
      </div>

      {/* --- RATING MODAL --- */}
      {isRatingOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeRatingModal}>&times;</button>
            <h2>Rate your Order</h2>
            <p className="modal-subtitle">{selectedOrder?.items[0]}</p>
            
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star} 
                  className={`star ${star <= rating ? 'filled' : ''}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>

            <textarea 
              placeholder="Write a review (optional)..." 
              className="rating-comment"
              rows="3"
            ></textarea>

            <button className="submit-rating-btn" onClick={handleSubmitRating}>
              Submit Review
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Orders;