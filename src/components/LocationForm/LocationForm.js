import React from "react";

import darkskyAPI from "../../apis/darkskyAPI";

import "./LocationForm.scss";

class LocationForm extends React.Component {
  state = {
    latitude: null,
    longitude: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getCurrentPosition);
  }

  getCurrentPosition = position => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  };

  onChangeLatitude = e => {
    this.setState({ latitude: e.target.value });
  };

  onChangeLongitude = e => {
    this.setState({ longitude: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.latitude, this.state.longitude);
  };

  render() {
    return (
      <div className="locationform" onSubmit={this.onFormSubmit}>
        <form className="locationform-container">
          <input
            type="number"
            name="latitude"
            onChange={this.onChangeLatitude}
            placeholder={this.state.latitude}
          />
          <input
            type="number"
            name="longitude"
            onChange={this.onChangeLongitude}
            placeholder={this.state.longitude}
          />
          <button type="submit">Get weather forecast</button>
        </form>
      </div>
    );
  }
}

export default LocationForm;
