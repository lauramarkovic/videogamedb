import React from "react";
import "./Game.css";

const Game = ({ name, background_image, released, metacritic }) => {
  return (
    <div className="game">
      <img src={background_image} alt="" />
      <div className="game-text">
        <div className="game-info">
          <div className="platforms-icons">
            <i className="fab fa-playstation"></i>
            <i className="fab fa-xbox"></i>
          </div>
          <span className="rating">{metacritic}</span>
        </div>
        <h3>{name}</h3>
        <p>Genres: <span>Action, Adventure</span></p>
        <hr className="game-text-line" />
        <p>Release date: <span>{released}</span></p>
        <button>Show details</button>
      </div>
    </div>
  );
}

export default Game;