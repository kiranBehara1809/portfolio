import axios from "axios";
import { ACCESS_TOKEN_KEY_NAME, API_ENDPOINT, REFRESH_TOKEN_KEY_NAME } from "../constants/project";
import { showBasicToast } from "../common/functions/function";
import { API_FAILURE_MSG } from "../constants/errorText";
import store from '../store'
import { LOADER_ACTIONS } from "../store/slices/loader";

const handleLogin = async (userName, password) => {
  store.dispatch(LOADER_ACTIONS.setLoading(true))
  try {
    let response = await axios.post(`${API_ENDPOINT}/auth/login`, {
      userName,
      password
    });
    store.dispatch(LOADER_ACTIONS.setLoading(false));
    localStorage.setItem(ACCESS_TOKEN_KEY_NAME, response.data.accessToken)
    localStorage.setItem(REFRESH_TOKEN_KEY_NAME, response.data.refreshToken)
    return response.data
  } catch (e) {
    store.dispatch(LOADER_ACTIONS.setLoading(false));
    showBasicToast("error",  e.response.data.error.message ||API_FAILURE_MSG);
    console.log("Error While calling Login API ---> ", e);
  }
};

const handleLogout = async () => {
  store.dispatch(LOADER_ACTIONS.setLoading(true));
  try {
    let response = await axios.post(`${API_ENDPOINT}/auth/logout`, {
      token: localStorage.getItem(REFRESH_TOKEN_KEY_NAME),
    });
    store.dispatch(LOADER_ACTIONS.setLoading(false));
    localStorage.removeItem(ACCESS_TOKEN_KEY_NAME);
    localStorage.removeItem(REFRESH_TOKEN_KEY_NAME);
    return response.data;
  } catch (e) {
    store.dispatch(LOADER_ACTIONS.setLoading(false));
    showBasicToast("error", e.response.data.error.message || API_FAILURE_MSG);
    console.log("Error While calling Logout API ---> ", e);
  }
}

export { handleLogin, handleLogout };
