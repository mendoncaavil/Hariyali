import React from "react";
import Alert from "../UI/Home/Alert";
import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Alert alert={"FREE SHIPPING ABOVE ₹299 | SHOP NOW"} />

      {/* // Navigation bar */}
      <div className="navigation-bar">
        <Router>
          <div className="navigation-container">
            <div className="navigation-brand">
              <Link to="/">Hariyali</Link>
            </div>
            <div className="navigation-list">
              <Link to="/plants">PLANTS</Link>
              <Link to="/seeds">SEEDS</Link>
              <Link to="/gifting">GIFTING</Link>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Header;
