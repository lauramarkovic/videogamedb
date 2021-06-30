import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" className="header-link">
          <h2 className="logo">Laura's Video Game Database</h2>
        </Link>
        <p>created with the <a href="https://rawg.io/" target="_blank" rel="noreferrer" id="logo-link">RAWG API</a></p>
      </div>
      <form className="search-form">
        <input id="search-input" placeholder="Search for a game, developer..." />
        <button><i className="fas fa-search"></i></button>
      </form>
      <div className="user-buttons">
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      </div>
    </header>
  )
}

export default Header;