import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Games from "./pages/Games/Games";
import { currentDate, nextDate } from "./util/fetchGames";
import { API_KEY, API_GAMES_URL } from "./util/constants";

import axios from "axios";

import './App.css';

const App = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [fromDate, setFromDate] = useState(currentDate);
  const [toDate, setToDate] = useState(nextDate);

  const FETCH_URL = `${API_GAMES_URL}?key=${API_KEY}&dates=${fromDate},${toDate}&page=${page}&page_size=10`;

  useEffect(() => {
    const fetchGames = async () => {
      const result = await axios(`${FETCH_URL}`);
      const data = result.data;
      const games = data.results;

      setGames(prevGames => {
        return [...prevGames, ...games]
      });
      setIsLoading(false);
    }
    fetchGames(page);
  }, [FETCH_URL, page, fromDate, toDate]);

  const addPage = () => {
    setPage(curPage => curPage + 1);
  }

  const handleFromDate = (e) => {
    e.preventDefault();
    // this.setState({
    //   fromDate: e.target.value
    // }, () => {
    //   this.fetchGames(this.state.page)
    // })
    setGames([]);
    setFromDate(e.target.value);
  }

  const handleToDate = (e) => {
    e.preventDefault();
    // this.setState({
    //   toDate: e.target.value
    // }, () => {
    //   this.fetchGames(this.state.page)
    // })
    setGames([]);
    setToDate(e.target.value);
  }

  return (
    <div>
      <Header />
      {isLoading
        ? <Loader />
        : <Games
          games={games}
          startingDate={currentDate}
          fromDate={fromDate}
          toDate={toDate}
          handleFromDate={handleFromDate}
          handleToDate={handleToDate}
          addPage={addPage}
        />
      }
    </div>
  );
}

export default App;