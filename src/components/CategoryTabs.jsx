import React from "react";
import "./CategoryTabs.css";

const CategoryTabs = ({
  categories,
  activeCategory,
  setActiveCategory,
  getCategoryCount,
}) => {
  return (
    <div className="category-tabs">
      {categories.map((category) => {
        const count = getCategoryCount(category);
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            className={`category-tab ${isActive ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            <span className="tab-name">{category}</span>
            <span className={`tab-count ${count > 0 ? "has-items" : ""}`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
