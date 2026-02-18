import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuildPlan.css';

// --- IMPORT IMAGES (54 Total) ---

// 1. Calorie-Controlled ('cal (1).jpg' to 'cal (9).jpg')
import cal1 from '../../assets/cal (1).jpg';
import cal2 from '../../assets/cal (2).jpg';
import cal3 from '../../assets/cal (3).jpg';
import cal4 from '../../assets/cal (4).jpg';
import cal5 from '../../assets/cal (5).jpg';
import cal6 from '../../assets/cal (6).jpg';
import cal7 from '../../assets/cal (7).jpg';
import cal8 from '../../assets/cal (8).jpg';
import cal9 from '../../assets/cal (9).jpg';

// 2. High-Protein ('high-protein (1).jpg' to 'high-protein (9).jpg')
import hp1 from '../../assets/high-protein (1).jpg';
import hp2 from '../../assets/high-protein (2).jpg';
import hp3 from '../../assets/high-protein (3).jpg';
import hp4 from '../../assets/high-protein (4).jpg';
import hp5 from '../../assets/high-protein (5).jpg';
import hp6 from '../../assets/high-protein (6).jpg';
import hp7 from '../../assets/high-protein (7).jpg';
import hp8 from '../../assets/high-protein (8).jpg';
import hp9 from '../../assets/high-protein (9).jpg';

// 3. Low Carb ('low-carb (1).jpg' to 'low-carb (9).jpg')
import lc1 from '../../assets/low-carb (1).jpg';
import lc2 from '../../assets/low-carb (2).jpg';
import lc3 from '../../assets/low-carb (3).jpg';
import lc4 from '../../assets/low-carb (4).jpg';
import lc5 from '../../assets/low-carb (5).jpg';
import lc6 from '../../assets/low-carb (6).jpg';
import lc7 from '../../assets/low-carb (7).jpg';
import lc8 from '../../assets/low-carb (8).jpg';
import lc9 from '../../assets/low-carb (9).jpg';

// 4. Ketogenic ('ketogenic (1).jpg' to 'ketogenic (9).jpg')
import keto1 from '../../assets/ketogenic (1).jpg';
import keto2 from '../../assets/ketogenic (2).jpg';
import keto3 from '../../assets/ketogenic (3).jpg';
import keto4 from '../../assets/ketogenic (4).jpg';
import keto5 from '../../assets/ketogenic (5).jpg';
import keto6 from '../../assets/ketogenic (6).jpg';
import keto7 from '../../assets/ketogenic (7).jpg';
import keto8 from '../../assets/ketogenic (8).jpg';
import keto9 from '../../assets/ketogenic (9).jpg';

// 5. Vegetarian ('veg (1).jpg' to 'veg (9).jpg')
import veg1 from '../../assets/veg (1).jpg';
import veg2 from '../../assets/veg (2).jpg';
import veg3 from '../../assets/veg (3).jpg';
import veg4 from '../../assets/veg (4).jpg';
import veg5 from '../../assets/veg (5).jpg';
import veg6 from '../../assets/veg (6).jpg';
import veg7 from '../../assets/veg (7).jpg';
import veg8 from '../../assets/veg (8).jpg';
import veg9 from '../../assets/veg (9).jpg';

// 6. Balanced ('balanced (1).jpg' to 'balanced (9).jpg')
import bal1 from '../../assets/balanced (1).jpg';
import bal2 from '../../assets/balanced (2).jpg';
import bal3 from '../../assets/balanced (3).jpg';
import bal4 from '../../assets/balanced (4).jpg';
import bal5 from '../../assets/balanced (5).jpg';
import bal6 from '../../assets/balanced (6).jpg';
import bal7 from '../../assets/balanced (7).jpg';
import bal8 from '../../assets/balanced (8).jpg';
import bal9 from '../../assets/balanced (9).jpg';

const BuildPlan = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Calorie-Controlled");
  const [selections, setSelections] = useState({});

  // FULL MENU DATA: 6 Categories x 9 Items = 54 Meals
  const menuDatabase = [
    // --- 1. CALORIE-CONTROLLED ---
    { id: 101, category: "Calorie-Controlled", name: "The Classic Slim", desc: "Skinless Chicken Longganisa, Brown Rice", price: 150, cal: 400, img: cal1 },
    { id: 102, category: "Calorie-Controlled", name: "Fish & Fowl", desc: "Spanish Style Bangus, Scrambled Egg", price: 160, cal: 420, img: cal2 },
    { id: 103, category: "Calorie-Controlled", name: "Egg & Veg", desc: "Tortang Dulong (Fish Omelet)", price: 140, cal: 380, img: cal3 },
    { id: 104, category: "Calorie-Controlled", name: "The Roast", desc: "Roast Chicken, Pumpkin Side", price: 155, cal: 410, img: cal4 },
    { id: 105, category: "Calorie-Controlled", name: "Vinegar Preservation", desc: "Daing na Bangus, Atchara", price: 165, cal: 430, img: cal5 },
    { id: 106, category: "Calorie-Controlled", name: "Spicy Kick", desc: "Bicol Express (Lean, No Cream)", price: 170, cal: 450, img: cal6 },
    { id: 107, category: "Calorie-Controlled", name: "Light Pasta", desc: "Tuna Pesto Pasta (Oil-based)", price: 160, cal: 440, img: cal7 },
    { id: 108, category: "Calorie-Controlled", name: "Savory Staples", desc: "Beef Giniling with Raisins", price: 175, cal: 460, img: cal8 },
    { id: 109, category: "Calorie-Controlled", name: "Simple Sauté", desc: "Stir-Fried Sayote, Chicken Strips", price: 145, cal: 390, img: cal9 },

    // --- 2. HIGH-PROTEIN ---
    { id: 201, category: "High-Protein", name: "The Power Silog", desc: "Beef Tapa (Sirloin), Egg, Garlic Adlai", price: 190, cal: 600, img: hp1 },
    { id: 202, category: "High-Protein", name: "Pork Power", desc: "Pork Menudo (Meat Chunks & Liver)", price: 185, cal: 620, img: hp2 },
    { id: 203, category: "High-Protein", name: "Sausage Fest", desc: "Hungarian Sausage, Mashed Potato", price: 200, cal: 650, img: hp3 },
    { id: 204, category: "High-Protein", name: "Chicken Gains", desc: "Roasted Lechon Manok, Sarsa", price: 195, cal: 580, img: hp4 },
    { id: 205, category: "High-Protein", name: "Fish & Beef", desc: "Tuna Steak, Soy Onion Glaze", price: 210, cal: 590, img: hp5 },
    { id: 206, category: "High-Protein", name: "Asian Muscle", desc: "Beef Gyudon, Onions, Egg", price: 220, cal: 680, img: hp6 },
    { id: 207, category: "High-Protein", name: "The Grind", desc: "Picadillo, Quail Eggs", price: 180, cal: 610, img: hp7 },
    { id: 208, category: "High-Protein", name: "Spicy Protein", desc: "Buffalo Chicken Tenders (Baked)", price: 195, cal: 630, img: hp8 },
    { id: 209, category: "High-Protein", name: "Adobo Loading", desc: "Pork Belly Adobo, Boiled Egg", price: 185, cal: 640, img: hp9 },

    // --- 3. LOW CARB ---
    { id: 301, category: "Low Carb", name: "Daily Low Carb", desc: "Skinless Longganisa, Egg, Atchara", price: 160, cal: 350, img: lc1 },
    { id: 302, category: "Low Carb", name: "Beef & Broccoli", desc: "Beef Stir Fry, Broccoli (No Rice)", price: 180, cal: 380, img: lc2 },
    { id: 303, category: "Low Carb", name: "Fish Day", desc: "Steamed Fish, Bok Choy", price: 170, cal: 320, img: lc3 },
    { id: 304, category: "Low Carb", name: "Chicken Run", desc: "Chicken Afritada (No Potato)", price: 165, cal: 360, img: lc4 },
    { id: 305, category: "Low Carb", name: "Asian Inspired", desc: "Egg Foo Young (Gravy)", price: 155, cal: 340, img: lc5 },
    { id: 306, category: "Low Carb", name: "Wrap-less Wrap", desc: "Chicken Shawarma Bowl (Salad)", price: 175, cal: 390, img: lc6 },
    { id: 307, category: "Low Carb", name: "Eggplant Special", desc: "Tortang Talong (Stuffed)", price: 150, cal: 330, img: lc7 },
    { id: 308, category: "Low Carb", name: "Noodle Swap", desc: "Shirataki Pancit Bihon", price: 190, cal: 310, img: lc8 },
    { id: 309, category: "Low Carb", name: "Simple Grill", desc: "Grilled Liempo, Steamed Okra", price: 185, cal: 420, img: lc9 },

    // --- 4. KETOGENIC ---
    { id: 401, category: "Ketogenic", name: "Pork Belly Feast", desc: "Lechon Kawali, Vinegar Dip", price: 195, cal: 700, img: keto1 },
    { id: 402, category: "Ketogenic", name: "Sisig Special", desc: "Pork Sisig (Mask/Belly), Mayo", price: 190, cal: 750, img: keto2 },
    { id: 403, category: "Ketogenic", name: "Beef & Butter", desc: "Beef Salpicao (Garlic Butter)", price: 210, cal: 720, img: keto3 },
    { id: 404, category: "Ketogenic", name: "Cheesy Days", desc: "Carbonara Chicken (Cream Sauce)", price: 200, cal: 780, img: keto4 },
    { id: 405, category: "Ketogenic", name: "Seafood Fat", desc: "Salmon Belly, Lemon Butter", price: 230, cal: 690, img: keto5 },
    { id: 406, category: "Ketogenic", name: "Spicy Keto", desc: "Bicol Express (Pork, Oil-based)", price: 185, cal: 710, img: keto6 },
    { id: 407, category: "Ketogenic", name: "Sausage Fest", desc: "Frankfurters, Cheese Sauce", price: 195, cal: 760, img: keto7 },
    { id: 408, category: "Ketogenic", name: "Veggie Fat", desc: "Cauliflower 'Mac' & Cheese", price: 180, cal: 650, img: keto8 },
    { id: 409, category: "Ketogenic", name: "Fried & Crispy", desc: "Crispy Pata Slices, Soy Vinegar", price: 220, cal: 800, img: keto9 },

    // --- 5. VEGETARIAN ---
    { id: 501, category: "Vegetarian", name: "Tofu & Beans", desc: "Tokwa't Baboy Style (No Pork)", price: 140, cal: 350, img: veg1 },
    { id: 502, category: "Vegetarian", name: "Egg Classics", desc: "Tortang Talong (Plain)", price: 130, cal: 320, img: veg2 },
    { id: 503, category: "Vegetarian", name: "Mushroom Magic", desc: "Mushroom Burger Steak, Gravy", price: 160, cal: 380, img: veg3 },
    { id: 504, category: "Vegetarian", name: "Pasta & Noodles", desc: "Pesto Pasta (Oil-based)", price: 155, cal: 400, img: veg4 },
    { id: 505, category: "Vegetarian", name: "Stews", desc: "Kalderetang Gulay", price: 150, cal: 370, img: veg5 },
    { id: 506, category: "Vegetarian", name: "Sweet & Sour", desc: "Sweet & Sour Tofu", price: 145, cal: 390, img: veg6 },
    { id: 507, category: "Vegetarian", name: "Asian Veggie", desc: "Chopsuey (Quail Eggs)", price: 150, cal: 330, img: veg7 },
    { id: 508, category: "Vegetarian", name: "Pumpkin Special", desc: "Ginataang Kalabasa", price: 140, cal: 410, img: veg8 },
    { id: 509, category: "Vegetarian", name: "The Imitation", desc: "Veggie 'Pork' BBQ (Seitan)", price: 170, cal: 360, img: veg9 },

    // --- 6. BALANCED ---
    { id: 601, category: "Balanced", name: "Best Sellers", desc: "Tapsilog", price: 170, cal: 550, img: bal1 },
    { id: 602, category: "Balanced", name: "Sweet & Savory", desc: "Pinoy Spaghetti", price: 165, cal: 600, img: bal2 },
    { id: 603, category: "Balanced", name: "Fried Favorites", desc: "Fried Chicken, Gravy", price: 175, cal: 650, img: bal3 },
    { id: 604, category: "Balanced", name: "Roast Special", desc: "Roast Chicken, Mang Tomas", price: 180, cal: 580, img: bal4 },
    { id: 605, category: "Balanced", name: "Asian Fusion", desc: "Beef Broccoli", price: 190, cal: 520, img: bal5 },
    { id: 606, category: "Balanced", name: "Stews", desc: "Pork Afritada", price: 170, cal: 560, img: bal6 },
    { id: 607, category: "Balanced", name: "Fish & Seafood", desc: "Sweet & Sour Fish", price: 185, cal: 530, img: bal7 },
    { id: 608, category: "Balanced", name: "Merienda Dinner", desc: "Burger Steak", price: 175, cal: 610, img: bal8 },
    { id: 609, category: "Balanced", name: "BBQ", desc: "Pork BBQ (2 sticks)", price: 160, cal: 500, img: bal9 },
  ];

  const displayedMeals = menuDatabase.filter(meal => meal.category === activeCategory);
  
  // Calculate Totals
  const totalItems = Object.values(selections).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(selections).reduce((total, [id, qty]) => {
    const meal = menuDatabase.find(m => m.id === parseInt(id));
    return total + (meal ? meal.price * qty : 0);
  }, 0);

  const updateQuantity = (id, delta) => {
    setSelections(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleCheckout = () => {
    // 1. GENERATE DETAILED LIST OF ITEMS
    const customItems = Object.entries(selections).map(([id, qty]) => {
      const meal = menuDatabase.find(m => m.id === parseInt(id));
      return { ...meal, qty }; // Return full meal object + qty
    }).filter(item => item.qty > 0);

    navigate('/order', { 
      state: { 
        planName: "Custom Box", 
        price: `₱${totalPrice.toLocaleString()}`,
        customItems: customItems // Pass the detailed list here
      } 
    });
  };

  return (
    <div className="kiosk-container">
      
      {/* FIXED SIDEBAR */}
      <aside className="kiosk-sidebar">
        <div className="sidebar-header">
          <h2>Menu</h2>
          <p>Select Category</p>
        </div>
        <div className="category-list">
          {["Calorie-Controlled", "High-Protein", "Low Carb", "Ketogenic", "Vegetarian", "Balanced"].map(cat => (
            <button 
              key={cat}
              className={`cat-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      {/* SCROLLABLE MAIN CONTENT */}
      <main className="kiosk-main">
        <div className="main-header">
          <h1>{activeCategory}</h1>
          <p>Pick your favorites. No limits.</p>
        </div>

        <div className="kiosk-list-container">
          {displayedMeals.map(meal => {
            const qty = selections[meal.id] || 0;
            return (
              <div key={meal.id} className="kiosk-list-item">
                
                {/* 3:1 IMAGE */}
                <div className="list-image-container">
                  {meal.img ? (
                    <img src={meal.img} alt={meal.name} />
                  ) : (
                    <div className="placeholder-img">
                      <span className="emoji-icon">🍲</span>
                    </div>
                  )}
                  {qty > 0 && <span className="badge-qty-corner">{qty}</span>}
                </div>

                {/* CONTENT */}
                <div className="list-content">
                  <div className="list-info">
                    <div className="list-title-row">
                      <h3>{meal.name}</h3>
                      <span className="price-tag">₱{meal.price}</span>
                    </div>
                    <p className="meal-desc">{meal.desc}</p>
                    <span className="cal-badge">{meal.cal} kcal</span>
                  </div>

                  {/* CONTROLS */}
                  <div className="list-controls">
                    {qty === 0 ? (
                      <button className="btn-add-pill" onClick={() => updateQuantity(meal.id, 1)}>
                        ADD
                      </button>
                    ) : (
                      <div className="qty-stepper-pill">
                        <button onClick={() => updateQuantity(meal.id, -1)}>−</button>
                        <span>{qty}</span>
                        <button onClick={() => updateQuantity(meal.id, 1)}>+</button>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </main>

      {/* FIXED SUMMARY FOOTER */}
      <div className="kiosk-summary-bar">
        <div className="summary-info">
          <span className="summary-label">Total Selections:</span>
          <span className="summary-count">{totalItems} Meals</span>
        </div>
        
        <div className="summary-actions">
          <div className="total-price">
            <small>Estimated Total</small>
            <span>₱{totalPrice.toLocaleString()}</span>
          </div>
          <button 
            className="btn-checkout" 
            disabled={totalItems === 0}
            onClick={handleCheckout}
          >
            Review Order &rarr;
          </button>
        </div>
      </div>

    </div>
  );
};

export default BuildPlan;