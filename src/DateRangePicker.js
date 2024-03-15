import React, { useState } from 'react';
import './DateRangePicker.css'; 

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = event => {
    const { value } = event.target;
    setStartDate(value);
    if (endDate && value > endDate) {
      setEndDate('');
    }
  };

  const handleEndDateChange = event => {
    const { value } = event.target;
    setEndDate(value);
    if (startDate && value < startDate) {
      setStartDate('');
    }
  };

  return (
    <div className="date-range-picker">
      <input
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        min={new Date().toISOString().split('T')[0]}
        placeholder="Select start date"
        className="date-input"
      />
      <input
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        min={startDate}
        disabled={!startDate}
        placeholder="Select end date"
        className="date-input"
      />
    </div>
  );
};

export default DateRangePicker;
