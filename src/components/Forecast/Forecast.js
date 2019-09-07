import React from "react";

import "./Forecast.scss";

import ForecastCurrent from "./ForecastCurrent";
import ForecastHourly from "./ForecastHourly";

class Forecast extends React.Component {
  renderHourly = data => {
    return data.map((forecastData, index) => {
      return <ForecastHourly key={index} {...forecastData} />;
    });
  };

  render() {
    const currentForecastProps = {
      ...this.props.forecastData.currently,
      timezone: this.props.forecastData.timezone,
      latitude: this.props.forecastData.latitude,
      longitude: this.props.forecastData.longitude
    };

    return (
      <div className="forecast">
        {this.props.forecastData && this.props.forecastData.currently ? (
          <ForecastCurrent {...currentForecastProps}></ForecastCurrent>
        ) : (
          ""
        )}
        <div className="forecast-hourly-container">
          {this.renderHourly(this.props.forecastData.hourly.data)}
        </div>
      </div>
    );
  }
}

export default Forecast;
