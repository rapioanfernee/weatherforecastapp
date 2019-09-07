import React from "react";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

import SearchBox from "react-google-maps/lib/components/places/SearchBox";

import { connect } from "react-redux";
import { compose } from "redux";
import {
  fetchCurrentLocation,
  fetchSpecifiedLocation,
  setSpecifiedLocation
} from "../../actions/location";

class GoogleMapComponent extends React.Component {
  state = {
    searchValue: ""
  };
  constructor(props) {
    super(props);

    this.searchBoxRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      searchValue: `${this.props.location.latitude}, ${this.props.location.longitude}`
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setState({
        searchValue: `${this.props.location.latitude}, ${this.props.location.longitude}`
      });
    }
  }

  onMapClick = e => {
    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();
    this.props.setSpecifiedLocation({ latitude, longitude });
  };

  onChangeInput = e => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };

  onPlacesChanged = () => {
    const currentPosition = this.searchBoxRef.current.getPlaces()[0];
    const latitude = currentPosition.geometry.location.lat();
    const longitude = currentPosition.geometry.location.lng();
    this.props.setSpecifiedLocation({ latitude, longitude });
  };

  render() {
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{
          lat: this.props.location.latitude,
          lng: this.props.location.longitude
        }}
        center={{
          lat: this.props.location.latitude,
          lng: this.props.location.longitude
        }}
        onClick={this.onMapClick}
      >
        <Marker
          position={{
            lat: this.props.location.latitude,
            lng: this.props.location.longitude
          }}
        ></Marker>

        <SearchBox
          ref={this.searchBoxRef}
          bounds={this.props.bounds}
          controlPosition={window.google.maps.ControlPosition.LEFT_BOTTOM}
          onPlacesChanged={this.onPlacesChanged}
          style={{ zIndex: "5", background: "Blue" }}
        >
          <form
            style={{
              background: "rgba(200,200,200, 0.9)",

              padding: 16,
              display: "flex",
              flexDirection: "column",
              borderRadius: "4px",
              height: 95,
              marginLeft: 8,
              color: "black"
            }}
            className="google-search-form"
          >
            <label style={{ fontSize: "0.7rem" }}>
              Location. Search for a place to determine weather forecast.
            </label>
            <label style={{ fontSize: "0.7rem" }}>Example: SM Megamall</label>
            <label style={{ fontSize: "0.7rem" }}>Example: 14.5, 121.5</label>

            <input
              type="text"
              placeholder={`${this.props.location.latitude}, ${this.props.location.longitude}`}
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `100%`,
                height: `32px`,
                marginTop: `8px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                zIndex: "5",
                padding: 4
              }}
              value={this.state.searchValue}
              onChange={this.onChangeInput}
            />
          </form>
        </SearchBox>

        {/* <div>
          <SearchBox
            ref={this.searchBoxRef}
            bounds={this.props.bounds}
            controlPosition={window.google.maps.ControlPosition.LEFT}
            onPlacesChanged={this.onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Enter location (Can be coordinates or place)"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `40%`,
                height: `32px`,
                marginTop: `27px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`
              }}
            />
          </SearchBox>
        </div> */}
      </GoogleMap>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location
});

export default compose(
  withScriptjs,
  withGoogleMap,
  connect(
    mapStateToProps,
    { fetchCurrentLocation, fetchSpecifiedLocation, setSpecifiedLocation }
  )
)(GoogleMapComponent);
