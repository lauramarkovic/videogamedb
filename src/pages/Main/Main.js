import React from 'react';
// import InfiniteScroll from "react-infinite-scroll-component";

import Games from "../../components/Games/Games";
import DatePicker from "../../components/DatePicker/DatePicker";

import "./Main.css";

const Main = ({ title, games, startingDate, fromDate, toDate, handleFromDate, handleToDate }) => {

  return (
    <main>
      <h1>{title}</h1>
      <DatePicker
        startingDate={startingDate}
        fromDate={fromDate}
        toDate={toDate}
        handleFromDate={handleFromDate}
        handleToDate={handleToDate}
      />
      <Games games={games} />
    </main>
  );
}

export default Main;
