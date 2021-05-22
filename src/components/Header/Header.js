import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <h2 className="logo">Laura's Video Game Database</h2>
        <p>created with the <a href="https://rawg.io/" target="_blank" rel="noreferrer" id="logo-link">RAWG API</a></p>
      </div>
      <form className="search-form">
        <input id="search-input" placeholder="Search for a game, developer..." />
        <button><i className="fas fa-search"></i></button>
      </form>
      <div className="user-buttons">
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </header>
  )
}

export default Header;