import React from 'react';
import Game from "../../components/Game/Game";

import './SearchResults.css';

const SearchResults = ({ games }) => {
  return (
    <main>
      <div className="searchResults">
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
        <div ref={loader} />
      </div>
    </main>
  )
}

export default SearchResults;
