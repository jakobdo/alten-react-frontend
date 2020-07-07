import axios from "axios";

export default axios.create({
  baseURL: "https://api.altentechnology.dk/api/",
  responseType: "json"
});