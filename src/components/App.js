import React from "react";
import "./App.scss";
import { connect } from "react-redux";

import darkskyAPI from "../apis/darkskyAPI";
import {
  fetchForecastCurrentLocation,
  fetchForecastSpecifiedLocation
} from "../actions/forecast";

import LocationForm from "./LocationForm/LocationForm";
import Forecast from "./Forecast/Forecast";

class App extends React.Component {
  state = {
    forecastData: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getCurrentPosition);
  }

  getCurrentPosition = position => {
    this.props.fetchForecastCurrentLocation(position.coords);
  };

  onFormSubmit = (lat, lng) => {
    this.props.fetchForecastSpecifiedLocation({
      latitude: lat,
      longitude: lng
    });
  };

  setForecastClass = status => {
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

  render() {
    const formProps = {
      onFormSubmit: this.onFormSubmit
    };

    const forecastProps = {
      forecastData: this.props.forecast,
      currentDate: this.props.date
    };

    return (
      <div className="container">
        {this.props.forecast.currently ? (
          <div
            className={`container-app container-app-${this.setForecastClass(
              this.props.forecast.currently.icon
            )}`}
          >
            <Forecast {...forecastProps} />
            <LocationForm {...formProps} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: state.date,
  forecast: state.forecast
});

export default connect(
  mapStateToProps,
  { fetchForecastCurrentLocation, fetchForecastSpecifiedLocation }
)(App);
