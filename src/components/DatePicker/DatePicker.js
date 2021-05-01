import React from 'react';

import './DatePicker.css';

const DatePicker = ({ startingDate, fromDate, toDate, handleFromDate, handleToDate }) => (
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
        <option value="relevance">Relevance</option>
        <option value="release-date">Release date</option>
        <option value="rating">Average rating</option>
        <option value="name">Name</option>
      </select>
    </div>
  </div>
);

export default DatePicker;
