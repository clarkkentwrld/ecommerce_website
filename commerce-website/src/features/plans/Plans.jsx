import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Plans.css';

const Plans = () => {
  const navigate = useNavigate();

  const plans = [
    { 
      name: "Calorie-Controlled", 
      price: "₱1,950", 
      perMeal: "₱92",
      color: "#2ecc71", // Green
      desc: "Portion-controlled meals to help you shed pounds without feeling hungry. ~1200-1400 kcal/day.",
      ideal: "Weight Loss"
    },
    { 
      name: "High-Protein", 
      price: "₱2,350", 
      perMeal: "₱111",
      color: "#e74c3c", // Red
      desc: "Double portions of lean meat and eggs to fuel muscle growth and recovery. ~1600+ kcal/day.",
      ideal: "Muscle Gain"
    },
    { 
      name: "Low Carb", 
      price: "₱2,250", 
      perMeal: "₱107",
      color: "#3498db", // Blue
      desc: "We replace rice with nutrient-dense veggies. Perfect for reducing bloating and sugar spikes.",
      ideal: "Weight Management"
    },
    { 
      name: "Ketogenic", 
      price: "₱2,450", 
      perMeal: "₱116",
      color: "#9b59b6", // Purple
      desc: "High healthy fats, moderate protein, very low carbs (<20g). Puts your body in fat-burning mode.",
      ideal: "Strict Fat Loss"
    },
    { 
      name: "Vegetarian", 
      price: "₱1,850", 
      perMeal: "₱88",
      color: "#27ae60", // Dark Green
      desc: "100% meat-free. Rich in plant-based proteins, fiber, and shelf-stable veggies.",
      ideal: "Plant-Based"
    },
    { 
      name: "Heart-Healthy", 
      price: "₱2,150", 
      perMeal: "₱102",
      color: "#e67e22", // Orange
      desc: "Low sodium, low cholesterol. Focus on fish, lean poultry, and fiber-rich sides.",
      ideal: "Health Maintenance"
    },
    { 
      name: "Balanced", 
      price: "₱1,999", 
      perMeal: "₱95",
      color: "#2c3e50", // Dark Blue
      desc: "The 'Everyday' line. No restrictions—just healthy, delicious versions of Filipino favorites.",
      ideal: "General Wellness"
    }
  ];

  return (
    <div className="plans-container">
      
      {/* HEADER SECTION */}
      <div className="plans-header-section">
        <button onClick={() => navigate('/')} className="back-link">
          ← Back to Home
        </button>
        <h1>Choose Your Weekly Plan</h1>
        <p className="subtitle">
          Subscribe & Save! Get <strong>21 Meals (Breakfast, Lunch, Dinner)</strong> delivered weekly.
          <br />
          <span className="highlight">Cheaper than grocery shopping & cooking.</span>
        </p>
      </div>
      
      {/* PLANS GRID */}
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="plan-card" 
            style={{ borderTop: `4px solid ${plan.color}` }}
          >
            <div className="plan-badge" style={{ backgroundColor: plan.color }}>
              {plan.ideal}
            </div>

            <h3>{plan.name}</h3>
            <p className="desc">{plan.desc}</p>
            
            <div className="pricing">
              <span className="currency">{plan.price}</span>
              <span className="period"> / week</span>
            </div>
            
            <div className="value-props">
              <div className="value-item">
                <span className="check">✓</span> 21 Full Meals
              </div>
              <div className="value-item">
                <span className="check">✓</span> Free Delivery
              </div>
              <div className="value-item highlight-value">
                Only <strong>{plan.perMeal}</strong> per meal
              </div>
            </div>

            <Link 
              to="/order" 
              className="select-plan-btn"
              style={{ backgroundColor: plan.color }}
            >
              Choose Plan
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;