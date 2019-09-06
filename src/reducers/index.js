import { combineReducers } from "redux";

import dateReducer from "./dateReducer";

import forecastReducer from "./forecastReducer";

export default combineReducers({
  date: dateReducer,
  forecast: forecastReducer
});
