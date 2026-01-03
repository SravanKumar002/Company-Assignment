import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dishes } from "../data/dishes";
import "./IngredientDetail.css";

const IngredientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) {
    return (
      <div className="ingredient-page">
        <div className="ingredient-container">
          <h2>Dish not found</h2>
          <button className="back-btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ingredient-page">
      <header className="ingredient-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1>Ingredients</h1>
      </header>

      <div className="ingredient-container">
        <div className="dish-info">
          <div className="dish-image-wrapper">
            <img src={dish.image} alt={dish.name} className="dish-img" />
          </div>
          <div className="dish-details">
            <div className="dish-type-badge" data-type={dish.type}>
              {dish.type === "VEG" ? "🟢" : "🔴"} {dish.type}
            </div>
            <h2 className="dish-title">{dish.name}</h2>
            <p className="dish-category">
              {dish.category.name} • {dish.mealType}
            </p>
            <p className="dish-desc">{dish.description}</p>
            <div className="dish-stats">
              <span className="price">${dish.price.toFixed(2)}</span>
              <span className="calories">{dish.calories} kcal</span>
            </div>
          </div>
        </div>

        <div className="ingredients-section">
          <h3 className="section-heading">Ingredients Required</h3>
          <div className="ingredients-list">
            {dish.ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                <div className="ingredient-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="ingredient-info">
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-quantity">
                    {ingredient.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetail;
