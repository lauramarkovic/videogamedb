import React from 'react';
import Game from '../Game/Game';

import './Games.css';

const Games = ({ games }) => {
  return (
    <div className="games">
      {
        games && games.map(({ id, name, background_image, released, metacritic, platforms, genres }) => (
          <Game
            key={id}
            name={name}
            background_image={background_image}
            released={released} metacritic={metacritic}
            platforms={platforms} genres={genres}
          />
        ))
      }
    </div>
  )
};

export default Games;
