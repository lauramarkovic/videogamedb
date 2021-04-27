import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h2 className="logo">Laura's Videogame Database</h2>
      <form className="search-form">
        <input placeholder="Search for a game, developer..." />
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