import axios from "axios";

export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${
    process.env.REACT_APP_DARK_SKY_SECRET_KEY
  }`
});
