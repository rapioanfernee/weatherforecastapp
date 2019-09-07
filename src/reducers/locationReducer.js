import {
  FETCH_CURRENT_LOCATION,
  FETCH_SPECIFIED_LOCATION,
  SET_CURRENT_LOCATION,
  SET_SPECIFIED_LOCATION
} from "../actions/action-types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION: {
      return {
        ...state,
        ...action.payload
      };
    }
    case FETCH_CURRENT_LOCATION: {
      return state;
    }
    case SET_SPECIFIED_LOCATION: {
      return {
        ...state,
        ...action.payload
      };
    }
    case FETCH_SPECIFIED_LOCATION: {
      return state;
    }
    default: {
      return state;
    }
  }
};
