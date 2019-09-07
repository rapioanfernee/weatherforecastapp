import React from "react";

import { connect } from "react-redux";

import "./ForecastCurrent.scss";

const ForecastCurrent = props => {
  const convertToCelsius = temp => {
    return ((temp - 32) * (5 / 9)).toFixed(2);
  };

  const formatMonth = date => {
    let month = date.getMonth();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    return months[month];
  };

  const formatHour = date => {
    let hour = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes.toString();
    } else {
      minutes = minutes.toString();
    }
    if (hour >= 13) {
      hour = hour - 12;
      return hour.toString() + ":" + minutes + " PM";
    } else if (hour === 0) {
      return "12" + minutes.toString() + " AM";
    } else if (hour <= 11) {
      return hour.toString() + ":" + minutes + " AM";
    } else if (hour === 12) {
      return "12" + ":" + minutes + " PM";
    }
  };

  const currentDate = new Date(props.time * 1000);

  return (
    <div className={`forecast-current`}>
      <span className="forecast-current-temperature">
        {convertToCelsius(props.apparentTemperature)} °C
      </span>
      <div className="forecast-current-date">
        <span className="forecast-current-date-hour">
          {formatHour(currentDate)}
        </span>{" "}
        <span className="forecast-current-date-month">
          {formatMonth(currentDate)} {currentDate.getDate()}
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
      <span className="forecast-current-latlong">Lat: {props.latitude}</span>
      <span className="forecast-current-latlong">Long: {props.longitude}</span>

      <span className="forecast-current-note">
        (Scroll to bottom part for the maps)
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
