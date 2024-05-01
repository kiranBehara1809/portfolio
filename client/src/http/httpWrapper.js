import axios from "axios";
import { ACCESS_TOKEN_KEY_NAME, API_ENDPOINT } from "../constants/project";

const api = axios.create({
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY_NAME);
  // config.headers.Authorization = `Bearer ${accessToken}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default api;
