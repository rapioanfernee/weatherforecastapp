import React from "react";
import "./ForecastHourly.scss";

const ForecastHourly = props => {
  const convertToCelsius = temp => {
    return ((temp - 32) * (5 / 9)).toFixed(2);
  };

  const setForecastClass = status => {
    switch (status) {
      case "clear-day": {
        return "sunny";
      }
      case "clear-night": {
        return "night";
      }
      case "rain": {
        return "rainy-night";
      }
      case "partly-cloudy-day": {
        return "cloudy-morning";
      }
      case "cloudy": {
        return "cloudy-morning";
      }
      case "partly-cloudy-night": {
        return "cloudy-night";
      }
      case "fog": {
        return "fog";
      }
      default: {
        return "";
      }
    }
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
  console.log(props);
  return (
    <div className="forecast-hourly">
      <div>
        <span className="forecast-hourly-time">{formatHour(props.hour)}</span>
        <span className="forecast-hourly-temperature">
          {convertToCelsius(props.apparentTemperature)} °C
        </span>
      </div>
      <span className="forecast-hourly-rain">
        {(props.precipProbability * 100).toFixed(2)}% chance to{" "}
        {props.precipType}
      </span>
    </div>
  );
};

export default ForecastHourly;
