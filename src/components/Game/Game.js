import React from "react";
import "./Game.css";

const Game = ({ name, background_image, released, metacritic, platforms, genres }) => {

  let platformArray = [];
  platforms.map(platform => {
    return platformArray.push(Object.values(platform.platform));
  });
  const gamesPlatform = platformArray.flat();

  const gameGenres = genres.map((genre, idx) => {
    return idx === genres.length - 1
      ? <span key={genre.id}>{genre.name} </span>
      : <span key={genre.id}>{genre.name}, </span>
  });

  return (
    <div className="game">
      <img src={background_image} alt="" />
      <div className="game-text">
        <div className="game-info">
          <div className="platform-icons">
            {
              gamesPlatform.includes("PC") && <i className="fab fa-windows"></i>
            }
            {
              gamesPlatform.includes(187) || gamesPlatform.includes(18) || gamesPlatform.includes(16) ? <i className="fab fa-playstation"></i> : ''
            }
            {
              gamesPlatform.includes(1) || gamesPlatform.includes(186) || gamesPlatform.includes(14) ? <i className="fab fa-xbox"></i> : ''
            }
            {
              gamesPlatform.includes(7) && <i className="fab iconify" data-icon="fa-brands:nintendo-switch" data-inline="true"></i>
            }
            {
              gamesPlatform.includes(5) && <i className="fab fa-apple"></i>
            }
            {
              gamesPlatform.includes(6) && <i className="fab fa-linux"></i>
            }
            {
              gamesPlatform.includes(3) && <i className="fab fa-app-store-ios"></i>
            }
            {
              gamesPlatform.includes(21) && <i className="fab fa-android"></i>
            }
          </div>
          {metacritic
            ? <span className="rating">{metacritic}</span>
            : ''}
        </div>
        <h3>{name}</h3>
        <p>Genres: {gameGenres}</p>
        <hr className="game-text-line" />
        <p>Release date: <span>{released}</span></p>
        <button>Show details</button>
      </div>
    </div>
  );
}

export default Game;