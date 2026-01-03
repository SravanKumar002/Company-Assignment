import React from "react";
import "./Footer.css";

const Footer = ({ selectedCount, totalPrice, onContinue }) => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>

        <div className="footer-info">
          <div className="info-block">
            <span className="info-label">SELECTED ITEMS</span>
            <span className="info-value">{selectedCount} dishes</span>
          </div>

          <div className="info-divider"></div>

          <div className="info-block">
            <span className="info-label">ESTIMATED TOTAL</span>
            <span className="info-value">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button className="continue-btn" onClick={onContinue}>
        <span>Continue</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
