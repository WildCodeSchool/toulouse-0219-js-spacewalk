import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DateInput = props => (
  <div className="h5 text-white text-center pt-4 pb-4 font-weight-bold">
    Select a date :
    <DatePicker
      selected={props.date}
      onChange={props.changeDate}
    />

    {/* <button type="button" onClick={props.handleClick}> Random photo</button> */}
  </div>
);

export default DateInput;
