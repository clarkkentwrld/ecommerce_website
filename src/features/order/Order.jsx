import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Order.css';

// --- IMPORT ASSETS ---
import gcashImg from '../../assets/gcash.png';
import mayaImg from '../../assets/maya.png';
import paypalImg from '../../assets/paypal.png';
import visaImg from '../../assets/visa.png';
import mastercardImg from '../../assets/mastercard.png';

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const CardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const CheckIcon = () => (
  <div className="check-circle">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
);

const Order = ({ user, addSubscription, addOneTimeOrder }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { planName, price, details, customItems } = location.state || { planName: "No Plan Selected", price: "₱0" };

  // --- SECURITY CHECK (REDIRECT IF NOT LOGGED IN) ---
  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: location }, replace: true });
    }
  }, [user, navigate, location]);

  const [paymentMethod, setPaymentMethod] = useState('ewallet'); 
  const [walletProvider, setWalletProvider] = useState('gcash'); 

  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const isCustomOrder = Boolean(customItems) || Boolean(details) || planName.includes("Custom");

  // Prevent flash of content
  if (!user) return null;

  // --- INPUT HANDLERS ---
  const handleMobileChange = (e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0, 11) });
  const handleEmailChange = (e) => setFormData({ ...formData, email: e.target.value });
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 16);
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    setFormData({ ...formData, cardNumber: value });
  };
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (value.length >= 3) value = `${value.slice(0, 2)}/${value.slice(2)}`;
    setFormData({ ...formData, expiry: value });
  };
  const handleCvcChange = (e) => setFormData({ ...formData, cvc: e.target.value.replace(/\D/g, '').slice(0, 3) });

  const handleCheckout = () => {
    // Validation Logic
    if (paymentMethod === 'ewallet') {
      if (walletProvider === 'paypal') {
        if (!formData.email.endsWith('@gmail.com')) {
          alert("Please enter a valid Gmail address for PayPal.");
          return;
        }
      } else {
        if (formData.mobile.length !== 11) {
          alert(`Please enter a valid 11-digit ${walletProvider === 'gcash' ? 'GCash' : 'Maya'} number.`);
          return;
        }
        if (!formData.mobile.startsWith('09')) {
          alert("Mobile number must start with '09'.");
          return;
        }
      }
    } else if (paymentMethod === 'card') {
      if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
        alert("Please enter a valid 16-digit card number.");
        return;
      }
      if (formData.expiry.length !== 5) {
        alert("Please enter a valid expiry date (MM/YY).");
        return;
      }
      if (formData.cvc.length !== 3) {
        alert("Please enter a valid 3-digit CVC.");
        return;
      }
    }

    const confirmBtn = document.querySelector('.proceed-btn');
    if(confirmBtn) {
      confirmBtn.innerText = "Processing...";
      confirmBtn.disabled = true;
    }

    setTimeout(() => {
      const randomID = Math.floor(1000 + Math.random() * 9000);
      const finalPayment = paymentMethod === 'ewallet' 
        ? `E-Wallet (${walletProvider.toUpperCase()})` 
        : 'Credit Card';

      if (isCustomOrder) {
        const orderItems = customItems 
          ? customItems.map(item => `${item.qty}x ${item.name}`) 
          : [`Custom Box (${details ? Object.values(details).reduce((a,b)=>a+b,0) : 'N/A'} Meals)`];

        const newOrder = {
          id: `ORD-${randomID}`,
          date: new Date().toLocaleDateString(),
          status: 'processing',
          total: price,
          items: orderItems,
          type: "one-time",
          payment: finalPayment,
          image: `https://placehold.co/100x100?text=Custom`
        };
        addOneTimeOrder(newOrder);
      } else {
        const newSub = {
          id: `SUB-${randomID}`,
          plan: planName,
          status: 'active',
          price: price,
          billingCycle: "Weekly",
          nextDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          payment: finalPayment,
          image: `https://placehold.co/100x100?text=${planName.split(' ')[0]}`
        };
        addSubscription(newSub);
      }
      navigate('/orders'); 
    }, 1500);
  };

  return (
    <div className="order-summary-container">
      <div className="summary-card">
        
        <div className="summary-header">
          <h2>{isCustomOrder ? "Checkout" : "Confirm Subscription"}</h2>
          <p>{isCustomOrder ? "Complete your purchase securely." : "Review and set up your weekly plan."}</p>
        </div>

        <div className="section-header">Order Summary</div>
        <div className="summary-details">
          
          {customItems ? (
            <>
              {customItems.map((item) => (
                <div className="summary-row" key={item.id}>
                  <span className="item-name">{item.qty}x {item.name}</span>
                  <span className="item-price">₱{(item.price * item.qty).toLocaleString()}</span>
                </div>
              ))}
              <div className="summary-divider" style={{margin: '10px 0', borderBottom: '1px solid #ddd'}}></div>
            </>
          ) : (
            <div className="summary-row">
              <span className="item-name">{planName}</span>
              <span className="item-price">{price}</span>
            </div>
          )}

          {!isCustomOrder && (
            <div className="summary-row">
              <span className="item-name">Frequency</span>
              <span className="item-price">Weekly</span>
            </div>
          )}
          <div className="summary-row">
            <span className="item-name">Shipping</span>
            <span className="item-price free">FREE</span>
          </div>
        </div>

        <div className="section-header">Select a payment method</div>
        <div className="payment-list">
          
          {/* 1. E-WALLET */}
          <div 
            className={`payment-card ${paymentMethod === 'ewallet' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('ewallet')}
          >
            <div className="icon-box purple">
              <WalletIcon />
            </div>
            <span className="pay-name">E-Wallet</span>
            {paymentMethod === 'ewallet' && <CheckIcon />}
          </div>

          {/* 2. CARD */}
          <div 
            className={`payment-card ${paymentMethod === 'card' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('card')}
          >
            <div className="icon-box blue">
              <CardIcon />
            </div>
            <span className="pay-name">Credit / Debit Card</span>
            
            <div className="card-logos-row">
              <img src={visaImg} alt="Visa" className="card-brand-img" />
              <img src={mastercardImg} alt="Mastercard" className="card-brand-img" />
            </div>

            {paymentMethod === 'card' && <CheckIcon />}
          </div>
        </div>

        {/* --- PAYMENT DETAILS FORM --- */}
        <div className="payment-details-form">
          
          {paymentMethod === 'ewallet' && (
            <div className="animate-fade">
              <p className="sub-label">Select your wallet provider:</p>
              
              <div className="wallet-grid">
                <div 
                  className={`wallet-option ${walletProvider === 'gcash' ? 'selected' : ''}`}
                  onClick={() => setWalletProvider('gcash')}
                >
                  <img src={gcashImg} alt="GCash" className="wallet-img"/>
                  <span>GCash</span>
                </div>

                <div 
                  className={`wallet-option ${walletProvider === 'maya' ? 'selected' : ''}`}
                  onClick={() => setWalletProvider('maya')}
                >
                  <img src={mayaImg} alt="Maya" className="wallet-img"/>
                  <span>Maya</span>
                </div>

                <div 
                  className={`wallet-option ${walletProvider === 'paypal' ? 'selected' : ''}`}
                  onClick={() => setWalletProvider('paypal')}
                >
                  <img src={paypalImg} alt="PayPal" className="wallet-img"/>
                  <span>PayPal</span>
                </div>
              </div>

              <div className="form-group mt-4">
                <label>
                  {walletProvider === 'paypal' ? 'PayPal Email (Gmail only)' : `${walletProvider === 'gcash' ? 'GCash' : 'Maya'} Mobile Number`}
                </label>
                {walletProvider === 'paypal' ? (
                  <input 
                    type="email" 
                    placeholder="you@gmail.com" 
                    className="input-field" 
                    value={formData.email}
                    onChange={handleEmailChange}
                  />
                ) : (
                  <input 
                    type="tel" 
                    placeholder="09XX XXX XXXX" 
                    className="input-field" 
                    value={formData.mobile}
                    onChange={handleMobileChange}
                    maxLength="11"
                  />
                )}
                <p className="secure-note">🔒 You will be redirected to verify securely.</p>
              </div>
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className="card-form animate-fade">
              <div className="form-group">
                <label>Card Number</label>
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000" 
                  className="input-field" 
                  value={formData.cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength="19"
                />
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <label>Expiry</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    className="input-field" 
                    value={formData.expiry}
                    onChange={handleExpiryChange}
                    maxLength="5"
                  />
                </div>
                <div className="form-group half">
                  <label>CVC</label>
                  <input 
                    type="text" 
                    placeholder="123" 
                    className="input-field" 
                    value={formData.cvc}
                    onChange={handleCvcChange}
                    maxLength="3"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="summary-total">
          <span>Total Due</span>
          <span>{price}</span>
        </div>

        <button className="proceed-btn" onClick={handleCheckout}>
          {isCustomOrder ? "Place Order" : "Confirm Subscription"}
        </button>

        <button className="change-plan-btn" onClick={() => navigate(-1)}>
          Cancel & Go Back
        </button>
      </div>
    </div>
  );
};

export default Order;