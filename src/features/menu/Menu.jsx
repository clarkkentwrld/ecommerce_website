import React, { useState } from 'react';
import './Menu.css';

// --- IMPORT IMAGES (54 Total) ---

// 1. Calorie-Controlled
import cal1 from '../../assets/cal (1).jpg';
import cal2 from '../../assets/cal (2).jpg';
import cal3 from '../../assets/cal (3).jpg';
import cal4 from '../../assets/cal (4).jpg';
import cal5 from '../../assets/cal (5).jpg';
import cal6 from '../../assets/cal (6).jpg';
import cal7 from '../../assets/cal (7).jpg';
import cal8 from '../../assets/cal (8).jpg';
import cal9 from '../../assets/cal (9).jpg';

// 2. High-Protein
import hp1 from '../../assets/high-protein (1).jpg';
import hp2 from '../../assets/high-protein (2).jpg';
import hp3 from '../../assets/high-protein (3).jpg';
import hp4 from '../../assets/high-protein (4).jpg';
import hp5 from '../../assets/high-protein (5).jpg';
import hp6 from '../../assets/high-protein (6).jpg';
import hp7 from '../../assets/high-protein (7).jpg';
import hp8 from '../../assets/high-protein (8).jpg';
import hp9 from '../../assets/high-protein (9).jpg';

// 3. Low Carb
import lc1 from '../../assets/low-carb (1).jpg';
import lc2 from '../../assets/low-carb (2).jpg';
import lc3 from '../../assets/low-carb (3).jpg';
import lc4 from '../../assets/low-carb (4).jpg';
import lc5 from '../../assets/low-carb (5).jpg';
import lc6 from '../../assets/low-carb (6).jpg';
import lc7 from '../../assets/low-carb (7).jpg';
import lc8 from '../../assets/low-carb (8).jpg';
import lc9 from '../../assets/low-carb (9).jpg';

// 4. Ketogenic
import keto1 from '../../assets/ketogenic (1).jpg';
import keto2 from '../../assets/ketogenic (2).jpg';
import keto3 from '../../assets/ketogenic (3).jpg';
import keto4 from '../../assets/ketogenic (4).jpg';
import keto5 from '../../assets/ketogenic (5).jpg';
import keto6 from '../../assets/ketogenic (6).jpg';
import keto7 from '../../assets/ketogenic (7).jpg';
import keto8 from '../../assets/ketogenic (8).jpg';
import keto9 from '../../assets/ketogenic (9).jpg';

// 5. Vegetarian
import veg1 from '../../assets/veg (1).jpg';
import veg2 from '../../assets/veg (2).jpg';
import veg3 from '../../assets/veg (3).jpg';
import veg4 from '../../assets/veg (4).jpg';
import veg5 from '../../assets/veg (5).jpg';
import veg6 from '../../assets/veg (6).jpg';
import veg7 from '../../assets/veg (7).jpg';
import veg8 from '../../assets/veg (8).jpg';
import veg9 from '../../assets/veg (9).jpg';

// 6. Balanced
import bal1 from '../../assets/balanced (1).jpg';
import bal2 from '../../assets/balanced (2).jpg';
import bal3 from '../../assets/balanced (3).jpg';
import bal4 from '../../assets/balanced (4).jpg';
import bal5 from '../../assets/balanced (5).jpg';
import bal6 from '../../assets/balanced (6).jpg';
import bal7 from '../../assets/balanced (7).jpg';
import bal8 from '../../assets/balanced (8).jpg';
import bal9 from '../../assets/balanced (9).jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Calorie-Controlled");

  const menuData = {
    "Calorie-Controlled": {
      subtitle: "The 'Balik-Alindog' Line - Portion control focus.",
      color: "#2ecc71", // Green
      items: [
        { title: "The Classic Slim", image: cal1, b: "Skinless Chicken Longganisa, Brown Rice, Vinegar", l: "Chicken Adobo Puti (No Soy), Boiled Egg", d: "Steamed Fish Fillet, Soy-Ginger Glaze", nutrition: { cal: "1200", protein: "90g", carbs: "130g", fat: "35g" } },
        { title: "Fish & Fowl", image: cal2, b: "Spanish Style Bangus, Scrambled Egg", l: "Chicken Afritada (No Potato)", d: "Tuna 'Sisig' (Water-packed), Steamed Sayote", nutrition: { cal: "1250", protein: "95g", carbs: "120g", fat: "40g" } },
        { title: "Egg & Veg", image: cal3, b: "Tortang Dulong (Fish Omelet)", l: "Ginisang Munggo, Tinapa Flakes", d: "Grilled Chicken Breast, Lemon-Herb Rub", nutrition: { cal: "1180", protein: "85g", carbs: "140g", fat: "30g" } },
        { title: "The Roast", image: cal4, b: "Corned Beef (Lean), Onion, Potato", l: "Roast Chicken, Pumpkin Side", d: "Sweet & Sour Fish (Baked)", nutrition: { cal: "1220", protein: "92g", carbs: "135g", fat: "38g" } },
        { title: "Vinegar Preservation", image: cal5, b: "Daing na Bangus, Atchara", l: "Pork Asado Slices (Lean)", d: "Chicken Inasal, Turmeric Rice", nutrition: { cal: "1210", protein: "88g", carbs: "125g", fat: "42g" } },
        { title: "Spicy Kick", image: cal6, b: "Spicy Tuyo Flakes, Garlic Rice", l: "Bicol Express (Lean, No Cream)", d: "Chili Garlic Shrimp, Cabbage", nutrition: { cal: "1190", protein: "90g", carbs: "130g", fat: "36g" } },
        { title: "Light Pasta", image: cal7, b: "Ham & Cheese Omelet", l: "Tuna Pesto Pasta (Oil-based)", d: "Burger Steak (Lean), Mushroom Gravy", nutrition: { cal: "1240", protein: "94g", carbs: "128g", fat: "41g" } },
        { title: "Savory Staples", image: cal8, b: "Tocino (Sugar-Free), Vinegar, Egg", l: "Beef Giniling with Raisins", d: "Fish Escabeche", nutrition: { cal: "1200", protein: "89g", carbs: "132g", fat: "37g" } },
        { title: "Simple Sauté", image: cal9, b: "Scrambled Eggs (Sarciado)", l: "Stir-Fried Sayote, Chicken Strips", d: "Lemon Butter Pork Chop, Green Beans", nutrition: { cal: "1230", protein: "91g", carbs: "129g", fat: "40g" } }
      ]
    },
    "High-Protein": {
      subtitle: "The 'Lakas' Line - Double meat portions.",
      color: "#e74c3c", // Red
      items: [
        { title: "The Power Silog", image: hp1, b: "Beef Tapa (Sirloin), Egg, Garlic Adlai", l: "Beef Mechado (Larded Beef)", d: "Grilled Chicken, Hummus, Carrots", nutrition: { cal: "1600", protein: "140g", carbs: "110g", fat: "60g" } },
        { title: "Pork Power", image: hp2, b: "Homemade Pork Tocino, Salted Egg", l: "Pork Menudo (Meat Chunks & Liver)", d: "Lechon Kawali (Oven Crisped)", nutrition: { cal: "1650", protein: "135g", carbs: "100g", fat: "70g" } },
        { title: "Sausage Fest", image: hp3, b: "Chorizo de Cebu (2pcs), Egg, Rice", l: "Callos (Ox Tripe & Chickpeas)", d: "Hungarian Sausage, Mashed Potato", nutrition: { cal: "1700", protein: "130g", carbs: "120g", fat: "75g" } },
        { title: "Chicken Gains", image: hp4, b: "Chicken Longganisa (4pcs)", l: "Chicken Curry (Japanese Roux)", d: "Roasted Lechon Manok, Sarsa", nutrition: { cal: "1580", protein: "145g", carbs: "115g", fat: "55g" } },
        { title: "Fish & Beef", image: hp5, b: "Fried Bangus Belly, Garlic Rice", l: "Salisbury Steak (Double Patty)", d: "Tuna Steak, Soy Onion Glaze", nutrition: { cal: "1620", protein: "138g", carbs: "105g", fat: "65g" } },
        { title: "Asian Muscle", image: hp6, b: "Beef Gyudon, Onions, Egg", l: "Chicken Teriyaki, Broccoli", d: "Spicy Pork Bulgogi", nutrition: { cal: "1610", protein: "142g", carbs: "112g", fat: "62g" } },
        { title: "The Grind", image: hp7, b: "Arroz a la Cubana", l: "Spaghetti with Meat Sauce", d: "Picadillo, Quail Eggs", nutrition: { cal: "1640", protein: "136g", carbs: "118g", fat: "68g" } },
        { title: "Spicy Protein", image: hp8, b: "Spicy Sardines, Egg, Rice", l: "Bicol Express (Pork Shoulder)", d: "Buffalo Chicken Tenders (Baked)", nutrition: { cal: "1590", protein: "141g", carbs: "114g", fat: "58g" } },
        { title: "Adobo Loading", image: hp9, b: "Adobo Flakes (Crispy), Rice, Egg", l: "Pork Belly Adobo, Boiled Egg", d: "Chicken Thigh Adobo, Potatoes", nutrition: { cal: "1630", protein: "137g", carbs: "108g", fat: "67g" } }
      ]
    },
    "Low Carb": {
      subtitle: "The 'Bawas Rice' Line - Heavy veggies, no rice.",
      color: "#3498db", // Blue
      items: [
        { title: "Daily Low Carb", image: lc1, b: "Skinless Longganisa, Egg, Atchara", l: "Pork Chop, Buttered Corn & Carrots", d: "Chicken Adobo, Hard Boiled Egg", nutrition: { cal: "1100", protein: "95g", carbs: "30g", fat: "65g" } },
        { title: "Beef & Broccoli", image: lc2, b: "Beef Tapa, Cauliflower Rice", l: "Beef Stir Fry, Broccoli", d: "Burger Patty, Cheese, Coleslaw", nutrition: { cal: "1150", protein: "100g", carbs: "25g", fat: "70g" } },
        { title: "Fish Day", image: lc3, b: "Tinapa, Salted Egg, Tomato", l: "Fried Tilapia, Green Beans", d: "Steamed Fish, Bok Choy", nutrition: { cal: "1050", protein: "90g", carbs: "35g", fat: "55g" } },
        { title: "Chicken Run", image: lc4, b: "Chicken Tocino, Vinegar, Scramble", l: "Chicken Afritada (No Potato)", d: "Roasted Chicken, Steamed Pumpkin", nutrition: { cal: "1120", protein: "98g", carbs: "28g", fat: "62g" } },
        { title: "Asian Inspired", image: lc5, b: "Egg Foo Young (Gravy)", l: "Chopsuey (Meat Heavy, Quail Eggs)", d: "Thai Basil Minced Pork, Fried Egg", nutrition: { cal: "1130", protein: "96g", carbs: "32g", fat: "64g" } },
        { title: "Wrap-less Wrap", image: lc6, b: "Ham & Cheese Roll-ups", l: "Chicken Shawarma Bowl", d: "Taco Salad Bowl (Beef, Salsa)", nutrition: { cal: "1160", protein: "99g", carbs: "26g", fat: "68g" } },
        { title: "Eggplant Special", image: lc7, b: "Tortang Talong (Stuffed)", l: "Eggplant Parmigiana", d: "Binagoongan Baboy, Grilled Talong", nutrition: { cal: "1140", protein: "94g", carbs: "33g", fat: "66g" } },
        { title: "Noodle Swap", image: lc8, b: "Shirataki Pancit Bihon", l: "Zucchini Lasagna", d: "Pancit Canton (Konjac/Veggie)", nutrition: { cal: "1110", protein: "92g", carbs: "30g", fat: "60g" } },
        { title: "Simple Grill", image: lc9, b: "Bacon & Egg Bites", l: "Grilled Liempo, Steamed Okra", d: "Chicken Inasal, Atchara", nutrition: { cal: "1170", protein: "97g", carbs: "24g", fat: "72g" } }
      ]
    },
    "Ketogenic": {
      subtitle: "The 'High Fat' Line - Pork belly, oils, and cheese.",
      color: "#9b59b6", // Purple
      items: [
        { title: "Pork Belly Feast", image: keto1, b: "Fried Pork Belly Strips, Eggs", l: "Lechon Kawali, Vinegar Dip", d: "Adobo sa Gata (Coconut Oil)", nutrition: { cal: "1300", protein: "85g", carbs: "15g", fat: "100g" } },
        { title: "Sisig Special", image: keto2, b: "Tuna Sisig (Oil), Fried Egg", l: "Pork Sisig (Mask/Belly), Mayo", d: "Chicken Sisig, Chicharon", nutrition: { cal: "1350", protein: "90g", carbs: "12g", fat: "105g" } },
        { title: "Beef & Butter", image: keto3, b: "Corned Beef (High Fat)", l: "Beef Salpicao (Garlic Butter)", d: "Roast Beef, Herb Butter", nutrition: { cal: "1320", protein: "88g", carbs: "14g", fat: "102g" } },
        { title: "Cheesy Days", image: keto4, b: "Chorizo & Cheese Omelet", l: "Cheesy Meatballs (Mozzarella)", d: "Carbonara Chicken (Cream Sauce)", nutrition: { cal: "1380", protein: "92g", carbs: "16g", fat: "108g" } },
        { title: "Seafood Fat", image: keto5, b: "Bangus Belly (Butter Fried)", l: "Salmon Belly, Lemon Butter", d: "Crab Fat (Aligue) Prawns", nutrition: { cal: "1290", protein: "86g", carbs: "18g", fat: "98g" } },
        { title: "Spicy Keto", image: keto6, b: "Spicy Sardines (Olive Oil), Egg", l: "Bicol Express (Pork, Oil-based)", d: "Chili Garlic Pork, Peanuts", nutrition: { cal: "1310", protein: "87g", carbs: "13g", fat: "101g" } },
        { title: "Sausage Fest", image: keto7, b: "Longganisa (Garlic/Batutay)", l: "Hungarian Sausage Slices", d: "Frankfurters, Cheese Sauce", nutrition: { cal: "1360", protein: "89g", carbs: "17g", fat: "106g" } },
        { title: "Veggie Fat", image: keto8, b: "Scrambled Eggs, Pesto, Cheese", l: "Laing (Pork Fat)", d: "Cauliflower 'Mac' & Cheese", nutrition: { cal: "1330", protein: "84g", carbs: "20g", fat: "103g" } },
        { title: "Fried & Crispy", image: keto9, b: "Bacon Strips, Hard Boiled Eggs", l: "Fried Chicken (Almond Flour)", d: "Crispy Pata Slices, Soy Vinegar", nutrition: { cal: "1390", protein: "91g", carbs: "11g", fat: "110g" } }
      ]
    },
    "Vegetarian": {
      subtitle: "The 'Plant Power' Line - Shelf stable, avoided spoiling greens.",
      color: "#27ae60", // Dark Green
      items: [
        { title: "Tofu & Beans", image: veg1, b: "Tofu Scramble, Turmeric", l: "Tokwa't Baboy Style (No Pork)", d: "Monggo Guisado, Malunggay", nutrition: { cal: "1150", protein: "70g", carbs: "150g", fat: "30g" } },
        { title: "Egg Classics", image: veg2, b: "Tortang Talong (Plain)", l: "Egg Curry", d: "Sarciadong Itlog", nutrition: { cal: "1180", protein: "75g", carbs: "145g", fat: "35g" } },
        { title: "Mushroom Magic", image: veg3, b: "Mushroom Risotto", l: "Mushroom Burger Steak, Gravy", d: "Sotanghon Guisado (Mushrooms)", nutrition: { cal: "1160", protein: "72g", carbs: "148g", fat: "32g" } },
        { title: "Pasta & Noodles", image: veg4, b: "Pancit Bihon (Veggie)", l: "Pesto Pasta (Oil-based)", d: "Marinara Pasta, Veggie Balls", nutrition: { cal: "1200", protein: "68g", carbs: "155g", fat: "38g" } },
        { title: "Stews", image: veg5, b: "Champorado (Choco Rice)", l: "Kalderetang Gulay", d: "Menudong Gulay", nutrition: { cal: "1170", protein: "71g", carbs: "152g", fat: "33g" } },
        { title: "Sweet & Sour", image: veg6, b: "Banana Pancakes (Saba)", l: "Sweet & Sour Tofu", d: "Veggie Balls, Sweet Chili", nutrition: { cal: "1190", protein: "69g", carbs: "158g", fat: "36g" } },
        { title: "Asian Veggie", image: veg7, b: "Fried Rice (Corn/Carrots), Egg", l: "Stir-Fry Baguio Beans", d: "Chopsuey (Quail Eggs)", nutrition: { cal: "1140", protein: "73g", carbs: "146g", fat: "31g" } },
        { title: "Pumpkin Special", image: veg8, b: "Squash Fritters (Okoy)", l: "Ginataang Kalabasa", d: "Roasted Pumpkin, Feta", nutrition: { cal: "1155", protein: "70g", carbs: "150g", fat: "34g" } },
        { title: "The Imitation", image: veg9, b: "Veggie Longganisa", l: "Veggie 'Pork' BBQ (Seitan)", d: "Vegetarian Kare-Kare", nutrition: { cal: "1185", protein: "74g", carbs: "147g", fat: "37g" } }
      ]
    },
    "Balanced": {
      subtitle: "The 'Everyday' Line - Filipino favorites.",
      color: "#2c3e50", // Dark Blue
      items: [
        { title: "Best Sellers", image: bal1, b: "Tapsilog", l: "Pork Adobo (Belly)", d: "Beef Caldereta", nutrition: { cal: "1500", protein: "100g", carbs: "160g", fat: "50g" } },
        { title: "Sweet & Savory", image: bal2, b: "Longsilog", l: "Pinoy Spaghetti", d: "Humba (Braised Pork)", nutrition: { cal: "1550", protein: "95g", carbs: "170g", fat: "55g" } },
        { title: "Fried Favorites", image: bal3, b: "Tocilog", l: "Fried Chicken, Gravy", d: "Pork Chop, Ketchup", nutrition: { cal: "1580", protein: "98g", carbs: "165g", fat: "60g" } },
        { title: "Roast Special", image: bal4, b: "Corned Beef, Potatoes", l: "Lechon Paksiw", d: "Roast Chicken, Mang Tomas", nutrition: { cal: "1520", protein: "102g", carbs: "155g", fat: "52g" } },
        { title: "Asian Fusion", image: bal5, b: "Siomai, Garlic Rice", l: "Orange Chicken", d: "Beef Broccoli", nutrition: { cal: "1480", protein: "96g", carbs: "162g", fat: "48g" } },
        { title: "Stews", image: bal6, b: "Hotdog & Egg Stew", l: "Pork Afritada", d: "Menudo", nutrition: { cal: "1510", protein: "99g", carbs: "158g", fat: "51g" } },
        { title: "Fish & Seafood", image: bal7, b: "Daing na Bangus", l: "Fish Fillet Tartar", d: "Sweet & Sour Fish", nutrition: { cal: "1490", protein: "94g", carbs: "160g", fat: "49g" } },
        { title: "Merienda Dinner", image: bal8, b: "Spam Lite, Egg", l: "Pancit Canton", d: "Burger Steak", nutrition: { cal: "1530", protein: "97g", carbs: "164g", fat: "53g" } },
        { title: "BBQ", image: bal9, b: "Skinless Longganisa", l: "Pork BBQ", d: "Chicken BBQ", nutrition: { cal: "1505", protein: "101g", carbs: "156g", fat: "50g" } }
      ]
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Explore Our Menu</h1>
        <p>Select a diet category to view our chef-curated Filipino meals.</p>
      </div>

      {/* CATEGORY TABS */}
      <div className="category-tabs">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            className={`cat-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="category-info" style={{ borderColor: menuData[activeCategory].color }}>
        <h2 style={{ color: menuData[activeCategory].color }}>{activeCategory}</h2>
        <p>{menuData[activeCategory].subtitle}</p>
      </div>

      {/* MENU GRID */}
      <div className="menu-grid">
        {menuData[activeCategory].items.map((item, index) => (
          <div key={index} className="menu-card">
            
            {/* 1. IMAGE DISPLAY */}
            <div className="meal-image-placeholder">
              {item.image ? (
                <img src={item.image} alt={item.title} className="meal-img" />
              ) : (
                <span className="emoji-icon">🍲</span>
              )}
            </div>
            
            <div className="card-body">
              <h3>{item.title}</h3>
              <div className="meal-row">
                <span className="meal-label">Breakfast:</span>
                <span className="meal-content">{item.b}</span>
              </div>
              <div className="meal-row">
                <span className="meal-label">Lunch:</span>
                <span className="meal-content">{item.l}</span>
              </div>
              <div className="meal-row">
                <span className="meal-label">Dinner:</span>
                <span className="meal-content">{item.d}</span>
              </div>

              {/* 2. NUTRITION OVERLAY */}
              <div className="nutrition-overlay" style={{backgroundColor: menuData[activeCategory].color}}>
                <div className="nutrition-content">
                  <h4>Daily Nutrition</h4>
                  <div className="nutrition-grid">
                    <div className="nutrition-item">
                      <span className="nutri-label">Calories</span>
                      <span className="nutri-value">{item.nutrition.cal}</span>
                    </div>
                    <div className="nutrition-item">
                      <span className="nutri-label">Protein</span>
                      <span className="nutri-value">{item.nutrition.protein}</span>
                    </div>
                    <div className="nutrition-item">
                      <span className="nutri-label">Carbs</span>
                      <span className="nutri-value">{item.nutrition.carbs}</span>
                    </div>
                    <div className="nutrition-item">
                      <span className="nutri-label">Fat</span>
                      <span className="nutri-value">{item.nutrition.fat}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;