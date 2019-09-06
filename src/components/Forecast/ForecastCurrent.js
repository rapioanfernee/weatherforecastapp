import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import "./ForecastCurrent.scss";

const ForecastCurrent = props => {
  const convertToCelsius = temp => {
    return ((temp - 32) * (5 / 9)).toFixed(2);
  };

  const formatHour = hour => {
    if (hour >= 13) {
      hour = hour - 12;
      return hour.toString() + "PM";
    } else if (hour === 0) {
      return "12AM";
    } else if (hour <= 11) {
      return hour.toString() + "AM";
    } else if (hour === 12) {
      return "12PM";
    }
  };

  return (
    <div className={`forecast-current`}>
      <span className="forecast-current-temperature">
        {convertToCelsius(props.apparentTemperature)} °C
      </span>
      <div className="forecast-current-date">
        <span className="forecast-current-date-hour">
          {formatHour(props.date.currentHour)}
        </span>{" "}
        <span className="forecast-current-date-month">
          {props.date.currentMonth} {props.date.currentDate}
        </span>
      </div>

      <span className="forecast-current-rain-chance">
        {(props.precipProbability * 100).toFixed(2)}% chance to{" "}
        {props.precipType}
      </span>
      <span className="forecast-current-summary">{props.summary}</span>
      <span className="forecast-current-timezone">
        {props.timezone.toString().replace("_", " ")}
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  date: state.date
});

export default connect(
  mapStateToProps,
  {}
)(ForecastCurrent);
