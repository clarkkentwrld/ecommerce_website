import React from 'react';
import { Link } from 'react-router-dom';
import './Plans.css';

const Plans = () => {
  const plans = [
    { 
      id: "calorie",
      name: "Calorie-Controlled", 
      desc: "Portion-controlled meals (~1200-1400 kcal) to help you shed pounds without feeling hungry.",
      ideal: "Weight Loss",
      tiers: [
        { label: "Lite", meals: 7, desc: "1 Meal / Day", price: "₱749", perMeal: "₱107" },
        { label: "Standard", meals: 14, desc: "2 Meals / Day", price: "₱1,399", perMeal: "₱100" },
        { label: "Premium", meals: 21, desc: "3 Meals / Day", price: "₱1,949", perMeal: "₱93", isBestValue: true }
      ]
    },
    { 
      id: "protein",
      name: "High-Protein", 
      desc: "Double portions of lean meat and eggs to fuel muscle growth and recovery. ~1600+ kcal/day.",
      ideal: "Muscle Gain",
      tiers: [
        { label: "Lite", meals: 7, desc: "1 Meal / Day", price: "₱899", perMeal: "₱128" },
        { label: "Standard", meals: 14, desc: "2 Meals / Day", price: "₱1,649", perMeal: "₱117" },
        { label: "Premium", meals: 21, desc: "3 Meals / Day", price: "₱2,349", perMeal: "₱112", isBestValue: true }
      ]
    },
    { 
      id: "lowcarb",
      name: "Low Carb", 
      desc: "We replace rice with nutrient-dense veggies. Perfect for reducing bloating and sugar spikes.",
      ideal: "Weight Management",
      tiers: [
        { label: "Lite", meals: 7, desc: "1 Meal / Day", price: "₱849", perMeal: "₱121" },
        { label: "Standard", meals: 14, desc: "2 Meals / Day", price: "₱1,599", perMeal: "₱114" },
        { label: "Premium", meals: 21, desc: "3 Meals / Day", price: "₱2,249", perMeal: "₱107", isBestValue: true }
      ]
    },
    { 
      id: "keto",
      name: "Ketogenic", 
      desc: "High healthy fats, moderate protein, very low carbs (<20g). Puts your body in fat-burning mode.",
      ideal: "Strict Fat Loss",
      tiers: [
        { label: "Lite", meals: 7, desc: "1 Meal / Day", price: "₱949", perMeal: "₱135" },
        { label: "Standard", meals: 14, desc: "2 Meals / Day", price: "₱1,749", perMeal: "₱125" },
        { label: "Premium", meals: 21, desc: "3 Meals / Day", price: "₱2,449", perMeal: "₱117", isBestValue: true }
      ]
    },
    { 
      id: "veg",
      name: "Vegetarian", 
      desc: "100% meat-free. Rich in plant-based proteins, fiber, and shelf-stable veggies.",
      ideal: "Plant-Based",
      tiers: [
        { label: "Lite", meals: 7, desc: "1 Meal / Day", price: "₱699", perMeal: "₱100" },
        { label: "Standard", meals: 14, desc: "2 Meals / Day", price: "₱1,299", perMeal: "₱92" },
        { label: "Premium", meals: 21, desc: "3 Meals / Day", price: "₱1,849", perMeal: "₱88", isBestValue: true }
      ]
    },
    { 
      id: "balanced",
      name: "Balanced", 
      desc: "The 'Everyday' line. No restrictions—just healthy, delicious versions of Filipino favorites.",
      ideal: "General Wellness",
      tiers: [
        { label: "Lite", meals: 7, desc: "1 Meal / Day", price: "₱799", perMeal: "₱114" },
        { label: "Standard", meals: 14, desc: "2 Meals / Day", price: "₱1,449", perMeal: "₱103" },
        { label: "Premium", meals: 21, desc: "3 Meals / Day", price: "₱1,999", perMeal: "₱95", isBestValue: true }
      ]
    }
  ];

  return (
    <div className="plans-container">
      
      {/* HEADER SECTION */}
      <div className="plans-header-section">
        <h1>Choose Your Weekly Plan</h1>
        <p className="subtitle">
          Select a diet and choose your meal frequency.<br />
          No hidden fees. Free delivery on all plans.
        </p>
      </div>
      
      {/* PLANS LIST (ROWS) */}
      <div className="plans-list">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-row">
            
            {/* ROW HEADER */}
            <div className="plan-row-header">
              <div className="plan-title-group">
                <span className="plan-badge">{plan.ideal}</span>
                <h2>{plan.name}</h2>
              </div>
              <p className="plan-row-desc">{plan.desc}</p>
            </div>

            {/* TIERS GRID */}
            <div className="tiers-grid">
              {plan.tiers.map((tier, idx) => (
                <div key={idx} className={`tier-card ${tier.isBestValue ? 'best-value' : ''}`}>
                  {tier.isBestValue && <span className="value-tag">Best Value</span>}
                  
                  <div className="tier-header">
                    <h4>{tier.label}</h4>
                    <span className="meal-count">{tier.desc}</span>
                  </div>
                  
                  <div className="tier-pricing">
                    <span className="price">{tier.price}</span>
                    <span className="per-week">/ week</span>
                    <p className="per-meal-sub">{tier.perMeal} per meal</p>
                  </div>

                  <Link 
                    to="/order" 
                    state={{ planName: `${plan.name} (${tier.label})`, price: tier.price }}
                    className={`select-tier-btn ${tier.isBestValue ? 'btn-primary' : 'btn-outline'}`}
                  >
                    Select
                  </Link>
                </div>
              ))}
            </div>

          </div>
        ))}

        {/* BUILD YOUR OWN SECTION */}
        <div className="custom-plan-section">
          <div className="custom-content">
            <h2>Want total control?</h2>
            <p>Handpick every single meal in your box from our full weekly menu.</p>
          </div>
          <Link to="/build-plan" className="custom-plan-btn">
            Build Your Own Plan &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Plans;