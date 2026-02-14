import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// --- IMAGES ---
import heroImage from '../../assets/Meal_Prep.jpg'; 
// Reuse menu images for the Featured section
import feature1 from '../../assets/Meal (1).jpg';
import feature2 from '../../assets/Meal (2).jpg';
import feature3 from '../../assets/Meal (3).jpg';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* 1. COVER PAGE (Your Preferred Spacing/Layout) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Start Fresh. 
            <br />
            <span className="hero-heading-accent">Fuel Right.</span>
          </h1>
          <p>
            Power your wellness goals with our healthiest menu of 
            macro-counted, ready-to-eat meal prep.
          </p>
          <Link to="/plans" className="primary-btn">
            GET OFFER
          </Link>
        </div>
        
        {/* Background Image Container */}
        <div 
          className="hero-image-container" 
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
      </section>

      {/* 2. FEATURED (Customer Favorites) */}
      <section className="section-container featured-section">
        <div className="section-header">
          <h2>Customer Favorites</h2>
          <p>Our top-rated meals this week, crafted for taste and performance.</p>
        </div>

        <div className="featured-grid">
          <div className="feat-card">
            <div className="feat-img-box">
              <img src={feature1} alt="Classic Slim" />
            </div>
            <div className="feat-info">
              <span className="tag green">Calorie Controlled</span>
              <h3>The Classic Slim</h3>
              <p>Skinless Chicken Longganisa & Brown Rice</p>
            </div>
          </div>
          <div className="feat-card">
            <div className="feat-img-box">
              <img src={feature2} alt="Power Silog" />
            </div>
            <div className="feat-info">
              <span className="tag red">High Protein</span>
              <h3>The Power Silog</h3>
              <p>Beef Tapa & Garlic Adlai</p>
            </div>
          </div>
          <div className="feat-card">
            <div className="feat-img-box">
              <img src={feature3} alt="Daily Low Carb" />
            </div>
            <div className="feat-info">
              <span className="tag blue">Low Carb</span>
              <h3>Daily Low Carb</h3>
              <p>Pork Chop & Buttered Veggies</p>
            </div>
          </div>
        </div>
        
        <div className="center-btn">
           <Link to="/menu" className="secondary-btn">View Full Menu →</Link>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="section-container how-it-works">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Healthy eating made simple in 3 steps.</p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">01</div>
            <h3>Choose Your Plan</h3>
            <p>Select from 7 dietary tracks tailored to your specific fitness goals.</p>
          </div>
          <div className="step-connector"></div>
          <div className="step-card">
            <div className="step-num">02</div>
            <h3>We Cook & Deliver</h3>
            <p>Chefs prepare your meals fresh and we deliver them straight to your door.</p>
          </div>
          <div className="step-connector"></div>
          <div className="step-card">
            <div className="step-num">03</div>
            <h3>Heat & Eat</h3>
            <p>Ready in 2 minutes. No grocery shopping, no cooking, no cleanup.</p>
          </div>
        </div>
      </section>

      {/* 4. DIETARY TRACKS */}
      <section className="section-container tracks-section">
        <div className="section-header">
          <h2>Find Your Track</h2>
          <p>Whether you're cutting, bulking, or maintaining, we have a plan for you.</p>
        </div>

        <div className="tracks-grid">
          {[
            { name: "Calorie-Controlled", desc: "Portion focused weight loss.", color: "#2ecc71" },
            { name: "High-Protein", desc: "Double meat for muscle gain.", color: "#e74c3c" },
            { name: "Low Carb", desc: "Less rice, more veggies.", color: "#3498db" },
            { name: "Ketogenic", desc: "High fat, strict low carb.", color: "#9b59b6" },
            { name: "Vegetarian", desc: "100% Meat-free meals.", color: "#27ae60" },
            { name: "Heart-Healthy", desc: "Low sodium & cholesterol.", color: "#e67e22" },
            { name: "Balanced", desc: "Everyday Filipino favorites.", color: "#2c3e50" }
          ].map((track, i) => (
            <Link to="/plans" key={i} className="track-card" style={{borderColor: track.color}}>
              <h4 style={{color: track.color}}>{track.name}</h4>
              <p>{track.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="why-us-section">
        <div className="why-content">
          <h2>Why Choose Fresh?</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <span className="icon">💰</span>
              <div className="text">
                <h3>Cheaper than Cooking</h3>
                <p>At ~₱90/meal, we cost less than buying groceries and cooking yourself.</p>
              </div>
            </div>
            <div className="reason-item">
              <span className="icon">🥗</span>
              <div className="text">
                <h3>Zero Preservatives</h3>
                <p>We use natural vinegar and spices for preservation, never chemicals.</p>
              </div>
            </div>
            <div className="reason-item">
              <span className="icon">📊</span>
              <div className="text">
                <h3>Macro Precise</h3>
                <p>Every gram of protein, carb, and fat is calculated by nutritionists.</p>
              </div>
            </div>
          </div>
          <Link to="/about" className="white-btn">Read Our Story</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;