import {
  FETCH_FORECAST_CURRENT_LOCATION,
  FETCH_FORECAST_SPECIFIED_LOCATION
} from "./action-types";
import darkskyAPI from "../apis/darkskyAPI";

export const fetchForecastCurrentLocation = position => async dispatch => {
  const response = await darkskyAPI.get(
    `${position.latitude},${position.longitude}`
  );
  dispatch({ type: FETCH_FORECAST_CURRENT_LOCATION, payload: response.data });
};

export const fetchForecastSpecifiedLocation = position => async dispatch => {
  const response = await darkskyAPI.get(
    `${position.latitude},${position.longitude}`
  );

  dispatch({ type: FETCH_FORECAST_SPECIFIED_LOCATION, payload: response.data });
};
