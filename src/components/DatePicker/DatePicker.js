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
  </div>
);

export default DatePicker;
