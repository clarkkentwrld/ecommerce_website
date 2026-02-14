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
import meal1 from '../../assets/Meal (1).jpg';
import meal2 from '../../assets/Meal (2).jpg';
import meal3 from '../../assets/Meal (3).jpg';
import meal4 from '../../assets/Meal (4).jpg';
import meal5 from '../../assets/Meal (5).jpg';

const Home = () => {
  // Setup Intersection Observer for scroll animation
  const { ref: favoritesRef, inView: favoritesInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, // Trigger when 10% is visible
    rootMargin: '-50px 0px' // Slightly offset trigger point
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

      {/* 2. FAVORITES SECTION (Pyramid Layout) */}
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
            { img: meal1, name: "Chicken Adobo", desc: "with Boiled Egg" },
            { img: meal2, name: "Chicken Afritada", desc: "with Vegetables" },
            { img: meal3, name: "Ginisang Munggo", desc: "with Tinapa Flakes" }, // Center Item (Highest)
            { img: meal4, name: "Roast Chicken", desc: "with Steamed Pumpkin" },
            { img: meal5, name: "Pork Asado", desc: "with Turmeric Rice" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="wave-card"
              style={{ transitionDelay: `${index * 150}ms` }} // Inline staggered delay
            >
              <div className="wave-img-circle">
                <img src={item.img} alt={item.name} />
              </div>
              <h4>{item.name}</h4>
              <span className="fav-desc">{item.desc}</span>
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