import React from 'react';
import { Link } from 'react-router-dom';
import { FaBowlFood, FaChartColumn, FaFlag } from 'react-icons/fa6'; // Icons for the features
import './About.css';
import kitchenImage from '../../assets/Kitchen.jpg';

const About = () => {
  return (
    <div className="about-container">
      
      {/* SECTION 1: MISSION & IMAGE */}
      <section className="mission-section">
        <div className="mission-content">
          <span className="section-label">OUR MISSION</span>
          <h1>We make healthy eating easy for busy Filipinos.</h1>
          <p>
            We started FRESH with a simple goal: to prove that "healthy food" 
            doesn't have to be boring, expensive, or tasteless. We take the 
            meal prep hassle out of your week so you can focus on your work, 
            your workout, and your life.
          </p>

          <div className="stats-row">
            <div className="stat-item">
              <strong>10k+</strong>
              <span>MEALS DELIVERED</span>
            </div>
            <div className="stat-item">
              <strong>50+</strong>
              <span>LOCAL PARTNERS</span>
            </div>
            <div className="stat-item">
              <strong>100%</strong>
              <span>MACRO COUNTED</span>
            </div>
          </div>
        </div>

        <div className="mission-image-wrapper">
          <img src={kitchenImage} alt="Our Kitchen" />
          <div className="image-backdrop"></div>
        </div>
      </section>

      {/* SECTION 2: WHY WE ARE DIFFERENT (Restored) */}
      <section className="why-different-section">
        <div className="section-header-center">
          <h2>Why We Are Different</h2>
          <p>Not just another diet delivery service. We are your nutrition partners.</p>
        </div>

        <div className="diff-grid">
          {/* Card 1 */}
          <div className="diff-card">
            <div className="diff-icon">
              <FaBowlFood />
            </div>
            <h3>Chef Prepared</h3>
            <p>Our meals are cooked daily by professional chefs using restaurant-grade techniques, not just boiled chicken and broccoli.</p>
          </div>

          {/* Card 2 */}
          <div className="diff-card">
            <div className="diff-icon">
              <FaChartColumn />
            </div>
            <h3>Macro Counted</h3>
            <p>Every gram of protein, carb, and fat is calculated. Whether you are cutting or bulking, we hit your numbers precisely.</p>
          </div>

          {/* Card 3 */}
          <div className="diff-card">
            <div className="diff-icon">
              <FaFlag /> 
            </div>
            <h3>Locally Sourced</h3>
            <p>We support local Filipino farmers. Our vegetables come fresh from Benguet and our meats are sourced from Batangas.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: BOTTOM CTA BANNER (Restored) */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to upgrade your daily fuel?</h2>
          <p>Join hundreds of others reaching their fitness goals this week.</p>
          <Link to="/plans" className="cta-btn">
            View Meal Plans
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;