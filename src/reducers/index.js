import { combineReducers } from "redux";

import forecastReducer from "./forecastReducer";
import locationReducer from "./locationReducer";

export default combineReducers({
  forecast: forecastReducer,
  location: locationReducer
});
