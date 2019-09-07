import React from "react";

import GoogleMapsComponent from "./GoogleMaps";

import "./LocationForm.scss";
import { connect } from "react-redux";

class LocationForm extends React.Component {
  state = {
    latitude: null,
    longitude: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getCurrentPosition);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setState({
        latitude: this.props.location.latitude,
        longitude: this.props.location.longitude
      });
    }
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
    this.props.onFormSubmit(
      parseFloat(this.state.latitude),
      parseFloat(this.state.longitude)
    );
  };

  render() {
    return (
      <div className="locationform" onSubmit={this.onFormSubmit}>
        {/* <form className="locationform-container">
          <input
            type="number"
            name="latitude"
            onChange={this.onChangeLatitude}
            placeholder={this.state.latitude}
            step=".0000000000000000001"
          />
          <input
            type="number"
            name="longitude"
            onChange={this.onChangeLongitude}
            placeholder={this.state.longitude}
            step=".0000000000000000001"
          />
          <button type="submit">Get weather forecast</button>
        </form> */}
        <GoogleMapsComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`}
          loadingElement={<div className="loadingElement googlemap" />}
          containerElement={<div className="containerElement googlemap" />}
          mapElement={
            <div className="mapElement googlemap" style={{ height: "100%" }} />
          }
          isMarkerShown
        ></GoogleMapsComponent>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location
});
export default connect(
  mapStateToProps,
  {}
)(LocationForm);
