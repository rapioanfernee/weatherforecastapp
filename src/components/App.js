import React from "react";
import "./App.scss";
import { connect } from "react-redux";

import { fetchForecastCurrentLocation } from "../actions/forecast";

import { setCurrentLocation, setSpecifiedLocation } from "../actions/location";

import LocationForm from "./LocationForm/LocationForm";
import Forecast from "./Forecast/Forecast";

class App extends React.Component {
  state = {
    forecastData: null,
    refresh: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => this.refresh(), 10000);
    navigator.geolocation.getCurrentPosition(this.props.setCurrentLocation);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.props.fetchForecastCurrentLocation(this.props.location);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCurrentPosition = position => {
    this.props.fetchForecastCurrentLocation(position.coords);
  };

  onFormSubmit = (latitude, longitude) => {
    this.props.setSpecifiedLocation({ latitude, longitude });
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
      case "cloudy": {
        return "cloudy-morning";
      }
      default: {
        return "";
      }
    }
  };

  refresh = () => {
    this.setState(prevState => ({
      ...prevState,
      refresh: prevState.refresh + 1
    }));
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
          // <div
          //   className={`container-app container-app-${this.setForecastClass(
          //     this.props.forecast.currently.icon
          //   )}`}
          // >
          <div className={`container-app container-app-rainy-night`}>
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
  location: state.location,
  forecast: state.forecast
});

export default connect(
  mapStateToProps,
  {
    fetchForecastCurrentLocation,

    setCurrentLocation,
    setSpecifiedLocation
  }
)(App);
