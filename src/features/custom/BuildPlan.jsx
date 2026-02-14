import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuildPlan.css';

// Import the few images you have (we will cycle them or use placeholders)
import meal1 from '../../assets/Meal (1).jpg';
import meal2 from '../../assets/Meal (2).jpg';
import meal3 from '../../assets/Meal (3).jpg';
import meal4 from '../../assets/Meal (4).jpg';
import meal5 from '../../assets/Meal (5).jpg';

const BuildPlan = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Calorie-Controlled");
  const [selections, setSelections] = useState({});

  // FULL MENU DATA: 6 Categories x 10 Items = 60 Meals
  // Note: 'img' is set to null for most to demonstrate the placeholder logic
  const menuDatabase = [
    // --- 1. CALORIE-CONTROLLED ---
    { id: 101, category: "Calorie-Controlled", name: "The Classic Slim", desc: "Skinless Chicken Longganisa, Brown Rice", price: 150, cal: 400, img: meal1 },
    { id: 102, category: "Calorie-Controlled", name: "Fish & Fowl", desc: "Spanish Style Bangus, Scrambled Egg", price: 160, cal: 420, img: meal2 },
    { id: 103, category: "Calorie-Controlled", name: "Egg & Veg", desc: "Tortang Dulong (Fish Omelet)", price: 140, cal: 380, img: meal3 },
    { id: 104, category: "Calorie-Controlled", name: "The Roast", desc: "Roast Chicken, Pumpkin Side", price: 155, cal: 410, img: meal4 },
    { id: 105, category: "Calorie-Controlled", name: "Vinegar Preservation", desc: "Daing na Bangus, Atchara", price: 165, cal: 430, img: meal5 },
    { id: 106, category: "Calorie-Controlled", name: "Spicy Kick", desc: "Bicol Express (Lean, No Cream)", price: 170, cal: 450, img: null },
    { id: 107, category: "Calorie-Controlled", name: "Light Pasta", desc: "Tuna Pesto Pasta (Oil-based)", price: 160, cal: 440, img: null },
    { id: 108, category: "Calorie-Controlled", name: "Savory Staples", desc: "Beef Giniling with Raisins", price: 175, cal: 460, img: null },
    { id: 109, category: "Calorie-Controlled", name: "Simple Sauté", desc: "Stir-Fried Sayote, Chicken Strips", price: 145, cal: 390, img: null },
    { id: 110, category: "Calorie-Controlled", name: "Mushroom Lovers", desc: "Burger Steak, Mushroom Gravy", price: 180, cal: 470, img: null },

    // --- 2. HIGH-PROTEIN ---
    { id: 201, category: "High-Protein", name: "The Power Silog", desc: "Beef Tapa (Sirloin), Egg, Garlic Adlai", price: 190, cal: 600, img: null },
    { id: 202, category: "High-Protein", name: "Pork Power", desc: "Pork Menudo (Meat Chunks & Liver)", price: 185, cal: 620, img: null },
    { id: 203, category: "High-Protein", name: "Sausage Fest", desc: "Hungarian Sausage, Mashed Potato", price: 200, cal: 650, img: null },
    { id: 204, category: "High-Protein", name: "Chicken Gains", desc: "Roasted Lechon Manok, Sarsa", price: 195, cal: 580, img: null },
    { id: 205, category: "High-Protein", name: "Fish & Beef", desc: "Tuna Steak, Soy Onion Glaze", price: 210, cal: 590, img: null },
    { id: 206, category: "High-Protein", name: "Asian Muscle", desc: "Beef Gyudon, Onions, Egg", price: 220, cal: 680, img: null },
    { id: 207, category: "High-Protein", name: "The Grind", desc: "Picadillo, Quail Eggs", price: 180, cal: 610, img: null },
    { id: 208, category: "High-Protein", name: "Spicy Protein", desc: "Buffalo Chicken Tenders (Baked)", price: 195, cal: 630, img: null },
    { id: 209, category: "High-Protein", name: "Adobo Loading", desc: "Pork Belly Adobo, Boiled Egg", price: 185, cal: 640, img: null },
    { id: 210, category: "High-Protein", name: "Clean Bulk", desc: "Roast Beef, Mushroom Gravy", price: 230, cal: 550, img: null },

    // --- 3. LOW CARB ---
    { id: 301, category: "Low Carb", name: "Daily Low Carb", desc: "Skinless Longganisa, Egg, Atchara", price: 160, cal: 350, img: null },
    { id: 302, category: "Low Carb", name: "Beef & Broccoli", desc: "Beef Stir Fry, Broccoli (No Rice)", price: 180, cal: 380, img: null },
    { id: 303, category: "Low Carb", name: "Fish Day", desc: "Steamed Fish, Bok Choy", price: 170, cal: 320, img: null },
    { id: 304, category: "Low Carb", name: "Chicken Run", desc: "Chicken Afritada (No Potato)", price: 165, cal: 360, img: null },
    { id: 305, category: "Low Carb", name: "Asian Inspired", desc: "Egg Foo Young (Gravy)", price: 155, cal: 340, img: null },
    { id: 306, category: "Low Carb", name: "Wrap-less Wrap", desc: "Chicken Shawarma Bowl (Salad)", price: 175, cal: 390, img: null },
    { id: 307, category: "Low Carb", name: "Eggplant Special", desc: "Tortang Talong (Stuffed)", price: 150, cal: 330, img: null },
    { id: 308, category: "Low Carb", name: "Noodle Swap", desc: "Shirataki Pancit Bihon", price: 190, cal: 310, img: null },
    { id: 309, category: "Low Carb", name: "Simple Grill", desc: "Grilled Liempo, Steamed Okra", price: 185, cal: 420, img: null },
    { id: 310, category: "Low Carb", name: "Seafood Light", desc: "Shrimp Gambas, Cauliflower Rice", price: 200, cal: 370, img: null },

    // --- 4. KETOGENIC ---
    { id: 401, category: "Ketogenic", name: "Pork Belly Feast", desc: "Lechon Kawali, Vinegar Dip", price: 195, cal: 700, img: null },
    { id: 402, category: "Ketogenic", name: "Sisig Special", desc: "Pork Sisig (Mask/Belly), Mayo", price: 190, cal: 750, img: null },
    { id: 403, category: "Ketogenic", name: "Beef & Butter", desc: "Beef Salpicao (Garlic Butter)", price: 210, cal: 720, img: null },
    { id: 404, category: "Ketogenic", name: "Cheesy Days", desc: "Carbonara Chicken (Cream Sauce)", price: 200, cal: 780, img: null },
    { id: 405, category: "Ketogenic", name: "Seafood Fat", desc: "Salmon Belly, Lemon Butter", price: 230, cal: 690, img: null },
    { id: 406, category: "Ketogenic", name: "Spicy Keto", desc: "Bicol Express (Pork, Oil-based)", price: 185, cal: 710, img: null },
    { id: 407, category: "Ketogenic", name: "Sausage Fest", desc: "Frankfurters, Cheese Sauce", price: 195, cal: 760, img: null },
    { id: 408, category: "Ketogenic", name: "Veggie Fat", desc: "Cauliflower 'Mac' & Cheese", price: 180, cal: 650, img: null },
    { id: 409, category: "Ketogenic", name: "Fried & Crispy", desc: "Crispy Pata Slices, Soy Vinegar", price: 220, cal: 800, img: null },
    { id: 410, category: "Ketogenic", name: "Avocado & Cream", desc: "Creamy Mushroom Pork Chop", price: 205, cal: 730, img: null },

    // --- 5. VEGETARIAN ---
    { id: 501, category: "Vegetarian", name: "Tofu & Beans", desc: "Tokwa't Baboy Style (No Pork)", price: 140, cal: 350, img: null },
    { id: 502, category: "Vegetarian", name: "Egg Classics", desc: "Tortang Talong (Plain)", price: 130, cal: 320, img: null },
    { id: 503, category: "Vegetarian", name: "Mushroom Magic", desc: "Mushroom Burger Steak, Gravy", price: 160, cal: 380, img: null },
    { id: 504, category: "Vegetarian", name: "Pasta & Noodles", desc: "Pesto Pasta (Oil-based)", price: 155, cal: 400, img: null },
    { id: 505, category: "Vegetarian", name: "Stews", desc: "Kalderetang Gulay", price: 150, cal: 370, img: null },
    { id: 506, category: "Vegetarian", name: "Sweet & Sour", desc: "Sweet & Sour Tofu", price: 145, cal: 390, img: null },
    { id: 507, category: "Vegetarian", name: "Asian Veggie", desc: "Chopsuey (Quail Eggs)", price: 150, cal: 330, img: null },
    { id: 508, category: "Vegetarian", name: "Pumpkin Special", desc: "Ginataang Kalabasa", price: 140, cal: 410, img: null },
    { id: 509, category: "Vegetarian", name: "The Imitation", desc: "Veggie 'Pork' BBQ (Seitan)", price: 170, cal: 360, img: null },
    { id: 510, category: "Vegetarian", name: "Bean Power", desc: "Three Bean Chili", price: 160, cal: 420, img: null },

    // --- 6. BALANCED ---
    { id: 601, category: "Balanced", name: "Best Sellers", desc: "Tapsilog", price: 170, cal: 550, img: null },
    { id: 602, category: "Balanced", name: "Sweet & Savory", desc: "Pinoy Spaghetti", price: 165, cal: 600, img: null },
    { id: 603, category: "Balanced", name: "Fried Favorites", desc: "Fried Chicken, Gravy", price: 175, cal: 650, img: null },
    { id: 604, category: "Balanced", name: "Roast Special", desc: "Roast Chicken, Mang Tomas", price: 180, cal: 580, img: null },
    { id: 605, category: "Balanced", name: "Asian Fusion", desc: "Beef Broccoli", price: 190, cal: 520, img: null },
    { id: 606, category: "Balanced", name: "Stews", desc: "Pork Afritada", price: 170, cal: 560, img: null },
    { id: 607, category: "Balanced", name: "Fish & Seafood", desc: "Sweet & Sour Fish", price: 185, cal: 530, img: null },
    { id: 608, category: "Balanced", name: "Merienda Dinner", desc: "Burger Steak", price: 175, cal: 610, img: null },
    { id: 609, category: "Balanced", name: "BBQ", desc: "Pork BBQ (2 sticks)", price: 160, cal: 500, img: null },
    { id: 610, category: "Balanced", name: "Comfort", desc: "Bistek Tagalog", price: 195, cal: 590, img: null },
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
    navigate('/order', { 
      state: { 
        planName: "Custom Box", 
        price: `₱${totalPrice.toLocaleString()}`,
        details: selections 
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
                
                {/* 3:1 IMAGE (Using Placeholder if img is null) */}
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
            <small>Total</small>
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