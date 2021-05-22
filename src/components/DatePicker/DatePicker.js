import React from 'react';

import './DatePicker.css';

const DatePicker = ({ startingDate, fromDate, toDate, handleFromDate, handleToDate }) => {

  // const updateFetchingUrl = () => {
  //   const orderGamesBy = document.getElementById('orderGamesBy');
  //   fetchingByCriteria(orderGamesBy.value);
  //   console.log(orderGamesBy.value)
  // }

  return (
    <div className="main-select">
      <div className="main-select-container">
        <label htmlFor="fromDate">From: </label>
        <input
          type="date"
          name="fromDate"
          min={startingDate}
          value={fromDate}
          onChange={handleFromDate}
        />
      </div>
      <div className="main-select-container">
        <label htmlFor="toDate">To: </label>
        <input
          type="date"
          name="toDate"
          min={fromDate}
          value={toDate}
          onChange={handleToDate}
        />
      </div>
      <div className="order-games">
        <label htmlFor="orderGamesBy">Order by:</label>
        <select id="orderGamesBy" name="orderGamesBy">
          <option value="?ordering=relevance">Relevance</option>
          <option value="?ordering=release-date">Release date</option>
          <option value="?ordering=rating">Average rating</option>
          <option value="?ordering=name">Name</option>
        </select>
      </div>
    </div>
  )
};

export default DatePicker;
