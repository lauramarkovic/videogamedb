import React from 'react';
import Game from "../../components/Game/Game";
import DatePicker from "../../components/DatePicker/DatePicker";

import "./Games.css";

const Games = ({ games, startingDate, fromDate, toDate, handleFromDate, handleToDate }) => {

  return (
    <main>
      <h1>Upcoming Games</h1>
      <DatePicker
        startingDate={startingDate}
        fromDate={fromDate}
        toDate={toDate}
        handleFromDate={handleFromDate}
        handleToDate={handleToDate}
      />
      <div className="games">
        {
          games.map(({ id, name, background_image, released, metacritic, platforms, genres }) => (
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
    </main>
  );
}

export default Games;
