import React from 'react';

const Order = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '2rem', background: 'white' }}>
      <h1>Your Box Summary</h1>
      <div style={{ padding: '2rem 0', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span>Chef's Choice Plan (6 Meals)</span>
          <span>$78.00</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span>Shipping</span>
          <span>$9.99</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
          <span>Total</span>
          <span>$87.99</span>
        </div>
      </div>
      <button style={{ width: '100%', padding: '15px', marginTop: '2rem', background: '#2ecc71', color: 'white', border: 'none', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '4px' }}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Order;