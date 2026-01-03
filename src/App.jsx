import { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import DishCard from "./components/DishCard";
import Footer from "./components/Footer";
import IngredientDetail from "./components/IngredientDetail";
import { dishes, categories, mealTypeMap, cuisines } from "./data/dishes";

function MenuPage({ selectedDishes, setSelectedDishes }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");
  const [activeCategory, setActiveCategory] = useState("Starter");

  // Filter dishes based on active category, search query, and cuisine
  const filteredDishes = useMemo(() => {
    const mealType = mealTypeMap[activeCategory];
    return dishes.filter((dish) => {
      const matchesCategory = dish.mealType === mealType;
      const matchesSearch =
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCuisine =
        selectedCuisine === "All Cuisines" ||
        dish.category.name === selectedCuisine;
      return matchesCategory && matchesSearch && matchesCuisine;
    });
  }, [activeCategory, searchQuery, selectedCuisine]);

  // Get count of selected dishes per category
  const getCategoryCount = (category) => {
    const mealType = mealTypeMap[category];
    return dishes.filter(
      (dish) => dish.mealType === mealType && selectedDishes.includes(dish.id)
    ).length;
  };

  // Toggle dish selection
  const handleToggleSelect = (dishId) => {
    setSelectedDishes((prev) =>
      prev.includes(dishId)
        ? prev.filter((id) => id !== dishId)
        : [...prev, dishId]
    );
  };

  // Calculate total price
  const totalPrice = useMemo(() => {
    return dishes
      .filter((dish) => selectedDishes.includes(dish.id))
      .reduce((sum, dish) => sum + dish.price, 0);
  }, [selectedDishes]);

  // Handle continue button
  const handleContinue = () => {
    alert(
      `You've selected ${
        selectedDishes.length
      } dishes with a total of $${totalPrice.toFixed(2)}`
    );
  };

  return (
    <div className="app">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine}
        cuisines={cuisines}
        cartCount={selectedDishes.length}
        activeCategory={activeCategory}
      />

      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        getCategoryCount={getCategoryCount}
      />

      <main className="main-content">
        <div className="content-header">
          <h2 className="section-title">{activeCategory} Selection</h2>
          <span className="dish-count">
            Showing {filteredDishes.length} dishes
          </span>
        </div>

        <div className="dishes-grid">
          {filteredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              isSelected={selectedDishes.includes(dish.id)}
              onToggleSelect={handleToggleSelect}
            />
          ))}
        </div>
      </main>

      <Footer
        selectedCount={selectedDishes.length}
        totalPrice={totalPrice}
        onContinue={handleContinue}
      />
    </div>
  );
}

function App() {
  const [selectedDishes, setSelectedDishes] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MenuPage
              selectedDishes={selectedDishes}
              setSelectedDishes={setSelectedDishes}
            />
          }
        />
        <Route path="/ingredient/:id" element={<IngredientDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
