import React from 'react';
import Game from "../Game/Game";
import "./Games.css";

const Games = ({ games }) => {
  return (
    <main>
      <h1>Upcoming Games</h1>
      <div className="games">
        {
          games.map(({ id, name, background_image, released, metacritic }) => (
            <Game key={id} name={name} background_image={background_image} released={released} metacritic={metacritic} />
          ))
        }
      </div>
    </main>
  );
}

export default Games;
