import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Main from "./pages/Main/Main";
import SignUp from "./components/SignUp/SignUp";

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
      <Switch>
        {
          isLoading
            ? <Route exact path="/" component={Loader} />
            : <Route
              exact
              path="/"
              render={() =>
                <Main
                  title={title}
                  games={games}
                  startingDate={currentDate}
                  fromDate={fromDate}
                  toDate={toDate}
                  handleFromDate={handleFromDate}
                  handleToDate={handleToDate}
                />
              } />
        }
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;