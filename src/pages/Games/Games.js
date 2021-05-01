import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import Game from "../../components/Game/Game";
import DatePicker from "../../components/DatePicker/DatePicker";

import "./Games.css";

const Games = ({ games, startingDate, fromDate, toDate, handleFromDate, handleToDate, addPage }) => {

  console.log(games.length);

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
      <InfiniteScroll
        className="games"
        dataLength={games.length}
        hasMore={true}
        next={addPage}
      >
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
      </InfiniteScroll>
    </main>
  );
}

export default Games;
