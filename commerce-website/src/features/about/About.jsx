import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      
      {/* SECTION 1: HERO STORY */}
      <section className="about-hero">
        <div className="hero-text">
          <span className="eyebrow">OUR MISSION</span>
          <h1>We make healthy eating easy for busy Filipinos.</h1>
          <p>
            We started FRESH with a simple goal: to prove that "healthy food" doesn't have to be boring, expensive, or tasteless. 
            We take the meal prep hassle out of your week so you can focus on your work, your workout, and your life.
          </p>
          <div className="stat-row">
            <div className="stat">
              <strong>10k+</strong>
              <span>Meals Delivered</span>
            </div>
            <div className="stat">
              <strong>50+</strong>
              <span>Local Farmers</span>
            </div>
            <div className="stat">
              <strong>100%</strong>
              <span>Macro Accurate</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for a high-quality kitchen or team shot */}
          <img src="https://placehold.co/600x600?text=Our+Kitchen" alt="Our Kitchen" />
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE US (Grid) */}
      <section className="values-section">
        <div className="section-header">
          <h2>Why We Are Different</h2>
          <p>Not just another diet delivery service. We are your nutrition partners.</p>
        </div>
        
        <div className="values-grid">
          <div className="value-card">
            <div className="icon">🥗</div>
            <h3>Chef Prepared</h3>
            <p>Our meals are cooked daily by professional chefs using restaurant-grade techniques, not just boiled chicken and broccoli.</p>
          </div>
          
          <div className="value-card">
            <div className="icon">📊</div>
            <h3>Macro Counted</h3>
            <p>Every gram of protein, carb, and fat is calculated. Whether you are cutting or bulking, we hit your numbers precisely.</p>
          </div>

          <div className="value-card">
            <div className="icon">🇵🇭</div>
            <h3>Locally Sourced</h3>
            <p>We support local Filipino farmers. Our vegetables come fresh from Benguet and our meats are sourced from Batangas.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: BOTTOM CTA */}
      <section className="cta-section">
        <h2>Ready to upgrade your daily fuel?</h2>
        <p>Join hundreds of others reaching their fitness goals this week.</p>
        <Link to="/plans" className="cta-btn">View Meal Plans</Link>
      </section>

    </div>
  );
};

export default About;