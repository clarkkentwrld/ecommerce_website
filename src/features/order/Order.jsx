import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get plan details passed from the Plans page, or set defaults
  const { planName, price } = location.state || { 
    planName: "Chef's Choice Plan", 
    price: "₱1,949" 
  };

  // Extract numeric value for calculation (remove '₱' and commas)
  const numericPrice = parseFloat(price.replace(/[₱,]/g, ''));
  const shipping = 0; // Free shipping promise
  const total = numericPrice + shipping;

  const handleCheckout = () => {
    // Logic for payment gateway would go here
    alert("Proceeding to payment...");
    navigate('/orders'); // Redirect to orders history or success page
  };

  return (
    <div className="order-container">
      <div className="order-card">
        <div className="order-header">
          <h1>Your Box Summary</h1>
          <p>Review your selected plan before checkout.</p>
        </div>

        <div className="summary-details">
          <div className="summary-row">
            <span className="label">{planName} (21 Meals)</span>
            <span className="value">{price}</span>
          </div>
          <div className="summary-row">
            <span className="label">Shipping</span>
            <span className="value free">Free</span>
          </div>
          <div className="divider"></div>
          <div className="summary-row total-row">
            <span className="label">Total</span>
            <span className="value">₱{total.toLocaleString()}</span>
          </div>
        </div>

        <button onClick={handleCheckout} className="checkout-btn">
          Proceed to Checkout
        </button>
        
        <button onClick={() => navigate('/plans')} className="back-btn">
          Change Plan
        </button>
      </div>
    </div>
  );
};

export default Order;