import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './Home.css';

// --- ICONS ---
import { 
  FaWeightScale, FaBolt, FaDumbbell, FaLeaf, FaBowlFood, FaScaleBalanced,
  FaClipboardCheck, FaPenToSquare, FaTruckFast, FaUtensils
} from 'react-icons/fa6';

// --- IMAGES ---
import heroImage from '../../assets/Meal_Prep.jpg'; 
import dividerImage from '../../assets/Meal_Prep 2.jpg'; 

// --- UPDATED FAVORITES (Calorie-Controlled 3, 4, 5, 6, 8) ---
import meal3 from '../../assets/cal (3).jpg';
import meal4 from '../../assets/cal (4).jpg';
import meal5 from '../../assets/cal (5).jpg';
import meal6 from '../../assets/cal (6).jpg';
import meal8 from '../../assets/cal (8).jpg';

const Home = () => {
  const { ref: favoritesRef, inView: favoritesInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
    rootMargin: '-50px 0px' 
  });

  return (
    <div className="home-container">
      
      {/* 1. HERO SECTION */}
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
        
        <div 
          className="hero-image-container" 
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
      </section>

      {/* 2. FAVORITES SECTION (Updated Menu Items) */}
      <section 
        className={`section-container favorites-section ${favoritesInView ? 'animate-active' : ''}`}
        ref={favoritesRef}
      >
        <div className="section-header-left">
          <h2>Favorites</h2>
          <p className="subhead">Healthy doesn't mean boring. Explore our chef-crafted best sellers.</p>
        </div>

        {/* PYRAMID WAVE CONTAINER */}
        <div className="favorites-wave-row">
          {[
            // Calorie-Controlled #3 (Lunch Label)
            { img: meal3, label: "Ginisang Munggo, Tinapa Flakes" },
            // Calorie-Controlled #4 (Lunch Label)
            { img: meal4, label: "Roast Chicken, Pumpkin Side" },
            // Calorie-Controlled #5 (Lunch Label)
            { img: meal5, label: "Pork Asado Slices (Lean)" },
            // Calorie-Controlled #6 (Lunch Label)
            { img: meal6, label: "Bicol Express (Lean, No Cream)" },
            // Calorie-Controlled #8 (Lunch Label)
            { img: meal8, label: "Beef Giniling with Raisins" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="wave-card"
              style={{ transitionDelay: `${index * 150}ms` }} 
            >
              <div className="wave-img-circle">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  // ADDED ZOOM HERE
                  style={{ transform: 'scale(1.15)', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4>{item.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 3. QUOTE BANNER */}
      <section className="quote-section">
        <div className="quote-overlay"></div>
        <div className="quote-content">
          <h2>
            "Fuel your ambition with food that <br />
            <span className="text-green">respects your body</span> and <span className="text-green">your time</span>."
          </h2>
          <p>FRESH prepares timeless recipes with your choice of locally inspired food.</p>
          <Link to="/menu" className="quote-btn">View Menu</Link>
        </div>
      </section>

      {/* 4. DIETARY TRACKS */}
      <section className="section-container tracks-section">
        <div className="section-header-center">
          <h2>What Nutritional Strategy Is For You?</h2>
        </div>

        <div className="tracks-grid-clean">
          {[
            { icon: <FaWeightScale />, title: "CALORIE-CONTROLLED", desc: "Best for individuals looking to manage their weight or maintain a deficit." },
            { icon: <FaBolt />, title: "KETOGENIC", desc: "High fat, low carb. Designed strictly for those following a keto lifestyle." },
            { icon: <FaDumbbell />, title: "HIGH-PROTEIN", desc: "Ideal for fitness enthusiasts. Provides extra protein for muscle recovery." },
            { icon: <FaLeaf />, title: "VEGETARIAN", desc: "Meat-free diet rich in plant-based proteins, grains, and vegetables." },
            { icon: <FaBowlFood />, title: "LOW CARB", desc: "Focuses on lean proteins and vegetables to help manage blood sugar." },
            { icon: <FaScaleBalanced />, title: "BALANCED", desc: "The most flexible option. A well-rounded variety of carbs, proteins, and fats." }
          ].map((track, i) => (
            <div key={i} className="track-item">
              <div className="track-icon">
                {track.icon}
              </div>
              <div className="track-text">
                <h4>{track.title}</h4>
                <p>{track.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VISUAL DIVIDER */}
      <section className="visual-divider">
        <img src={dividerImage} alt="Meal Prep Containers" />
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="section-container how-it-works-clean">
        <div className="section-header-center">
          <h2>HOW IT WORKS</h2>
        </div>

        <div className="steps-row">
          <div className="step-clean">
            <div className="step-header-group">
               <span className="step-icon"><FaClipboardCheck /></span>
               <span className="step-number">01</span>
            </div>
            <h3>Select Your Plan</h3>
            <p>Choose the dietary track that best aligns with your health goals.</p>
          </div>
          <div className="step-clean">
            <div className="step-header-group">
               <span className="step-icon"><FaPenToSquare /></span>
               <span className="step-number">02</span>
            </div>
            <h3>Customize Your Menu</h3>
            <p>Browse our rotating weekly menu and hand-pick specific meals.</p>
          </div>
          <div className="step-clean">
            <div className="step-header-group">
               <span className="step-icon"><FaTruckFast /></span>
               <span className="step-number">03</span>
            </div>
            <h3>We Cook & Deliver</h3>
            <p>Our chefs prepare your meals fresh, then we deliver them chilled.</p>
          </div>
          <div className="step-clean">
            <div className="step-header-group">
               <span className="step-icon"><FaUtensils /></span>
               <span className="step-number">04</span>
            </div>
            <h3>Heat and Eat</h3>
            <p>Your meals are fully cooked. Simply heat them in the microwave.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;