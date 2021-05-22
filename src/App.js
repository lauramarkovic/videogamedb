import React, { useState } from "react";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Main from "./pages/Main/Main";

import { useFetch } from "./hooks/useFetch";
import { currentDate, nextDate } from "./util/constants";

import './App.css';

const App = () => {

  const [fromDate, setFromDate] = useState(currentDate);
  const [toDate, setToDate] = useState(nextDate);
  const [games, setGames, isLoading] = useFetch(fromDate, toDate);

  const [title, setTitle] = useState('Upcoming Games');
  const [searchTerm, setSearchTerm] = useState('');


  const handleFromDate = (e) => {
    e.preventDefault();
    setGames([]);
    setFromDate(e.target.value);
  }

  const handleToDate = (e) => {
    e.preventDefault();
    setGames([]);
    setToDate(e.target.value);
  }

  return (
    <div>
      <Header />
      {
        isLoading
          ? <Loader />
          : <Main
            title={title}
            games={games}
            startingDate={currentDate}
            fromDate={fromDate}
            toDate={toDate}
            handleFromDate={handleFromDate}
            handleToDate={handleToDate}
          />
      }
    </div>
  );
}

export default App;