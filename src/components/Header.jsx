import React from "react";
import "./Header.css";

const Header = ({
  searchQuery,
  setSearchQuery,
  selectedCuisine,
  setSelectedCuisine,
  cuisines,
  cartCount,
  activeCategory,
}) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <button className="back-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <h1 className="header-title">Plan Party Menu</h1>
        </div>

        <div className="header-center">
          <div className="search-container">
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder={`Search in ${activeCategory}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="header-right-desktop">
          <div className="cuisine-dropdown">
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="cuisine-select"
            >
              {cuisines.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
            <svg
              className="dropdown-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          <button className="cart-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>

        <div className="header-right-mobile">
          <button className="cart-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      <div className="header-mobile-controls">
        <div className="search-container-mobile">
          <svg
            className="search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder={`Search in ${activeCategory}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="cuisine-dropdown-mobile">
          <select
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
            className="cuisine-select"
          >
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
          <svg
            className="dropdown-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
