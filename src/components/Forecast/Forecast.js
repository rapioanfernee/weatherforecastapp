import React from "react";

import "./Forecast.scss";

import ForecastCurrent from "./ForecastCurrent";
import ForecastHourly from "./ForecastHourly";

class Forecast extends React.Component {
  renderHourly = data => {
    let newData = [];
    let newArray = [];

    data.forEach((forecastData, index) => {
      const newDate = new Date(forecastData.time * 1000);

      if (newDate.getHours() !== 0) {
        newArray.push(forecastData);
      } else {
        newData.push(newArray);
        newArray = [];

        newArray.push(forecastData);
      }
    });

    return newData;
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

        {this.renderHourly(this.props.forecastData.hourly.data).map(
          (hourlydata, index) => (
            <div key={index} className="forecast-hourly-container">
              {hourlydata.map((data, index) => (
                <ForecastHourly key={index} {...data} />
              ))}
            </div>
          )
        )}
      </div>
    );
  }
}

export default Forecast;
