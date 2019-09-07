import React from "react";
import "./ForecastHourly.scss";

const ForecastHourly = props => {
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

  const currentDate = new Date(props.time * 1000);
  return (
    <div className="forecast-hourly">
      <div>
        <span className="forecast-hourly-time">
          {formatHour(currentDate.getHours())}
        </span>
        <span className="forecast-hourly-temperature">
          {convertToCelsius(props.apparentTemperature)} °C
        </span>
      </div>
      <span className="forecast-hourly-date">
        {formatMonth(currentDate)} {currentDate.getDate()}
      </span>
      <span className="forecast-hourly-rain">
        {(props.precipProbability * 100).toFixed(2)}% chance to{" "}
        {props.precipType}
      </span>
    </div>
  );
};

export default ForecastHourly;
