import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DishCard.css";

const DishCard = ({ dish, isSelected, onToggleSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription =
    dish.description.length > 80
      ? dish.description.substring(0, 80) + "..."
      : dish.description;

  return (
    <div className={`dish-card ${isSelected ? "selected" : ""}`}>
      {isSelected && (
        <div className="selected-badge">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Selected</span>
        </div>
      )}

      <div className="dish-image-container">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        <div className="dish-type-indicator" data-type={dish.type}>
          {dish.type === "VEG" ? "🟢" : "🔴"}
        </div>
      </div>

      <div className="dish-content">
        <h3 className="dish-name">{dish.name}</h3>

        <div className="dish-meta">
          <span className="dish-price">${dish.price.toFixed(2)}</span>
          <span className="dish-calories">{dish.calories} kcal</span>
        </div>

        <p className="dish-description">
          {isExpanded ? dish.description : truncatedDescription}
          {dish.description.length > 80 && (
            <button
              className="read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>

        <div className="dish-actions">
          <Link
            to={`/ingredient/${dish.id}`}
            className="ingredient-btn"
            title="View Ingredients"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </Link>

          <button
            className={`add-btn ${isSelected ? "remove" : ""}`}
            onClick={() => onToggleSelect(dish.id)}
          >
            {isSelected ? (
              <>
                <span>Remove</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </>
            ) : (
              <>
                <span>Add to Menu</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
