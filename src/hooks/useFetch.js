import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { API_KEY, API_GAMES_URL } from "../util/constants";

export const useFetch = (fromDate, toDate) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);

  const fetchGames = useCallback(async () => {
    try {
      const result = await axios(`${API_GAMES_URL}?key=${API_KEY}&dates=${fromDate},${toDate}`);
      const data = result.data;
      const games = data.results;

      console.log(data);

      setGames(games);
      // setPage(prevPage => prevPage + 1);
      setIsLoading(false);
    } catch (err) {
      console.log('Fetching error', err);
    }
  }, [fromDate, toDate]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames, fromDate, toDate]);

  return [games, setGames, isLoading, fetchGames];
}