import {
  FETCH_CURRENT_LOCATION,
  FETCH_SPECIFIED_LOCATION,
  SET_CURRENT_LOCATION,
  SET_SPECIFIED_LOCATION
} from "./action-types";

export const fetchCurrentLocation = () => {
  return {
    type: FETCH_CURRENT_LOCATION
  };
};

export const fetchSpecifiedLocation = () => {
  return {
    type: FETCH_SPECIFIED_LOCATION
  };
};

export const setCurrentLocation = position => {
  return {
    type: SET_CURRENT_LOCATION,
    payload: {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }
  };
};

export const setSpecifiedLocation = position => {
  return {
    type: SET_SPECIFIED_LOCATION,
    payload: {
      latitude: position.latitude,
      longitude: position.longitude
    }
  };
};
