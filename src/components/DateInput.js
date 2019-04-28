import React from "react";

const DateInput = props => (
  <form onSubmit={props.changeDate}>
    <div className="text-white">Enter a date (YYYY-MM-DD) :</div>
    <input />
    <input type="submit" />
  </form>
);

export default DateInput;
