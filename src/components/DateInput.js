import React from 'react';
// import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DateInput = props => (
  <div className="text-white">
    {/* Select a date :
    <DatePicker
      selected={props.date}
      onChange={props.changeDate}
    /> */}
    <form onSubmit={props.changeDate}>
      Enter a date (YYYY-MM-DD):
      <input />
      <input type="submit" />
    </form>
  </div>
);

export default DateInput;
