import {
  FETCH_FORECAST_CURRENT_LOCATION,
  FETCH_FORECAST_SPECIFIED_LOCATION
} from "../actions/action-types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FORECAST_CURRENT_LOCATION: {
      return {
        ...state,
        ...action.payload
      };
    }
    case FETCH_FORECAST_SPECIFIED_LOCATION: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};
