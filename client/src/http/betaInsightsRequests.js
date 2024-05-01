import axios from "axios";
import { API_ENDPOINT } from "../constants/project";
import api from "./httpWrapper";
import store from "../store";
import { LOADER_ACTIONS } from "../store/slices/loader";
import { showBasicToast } from "../common/functions/function";
import { API_FAILURE_MSG } from "../constants/errorText";

const http_get = async (endPoint) => {
  store.dispatch(LOADER_ACTIONS.setLoading(true));
  try {
    let response = await api.get(`${endPoint}`);
    store.dispatch(LOADER_ACTIONS.setLoading(false));
    return response || null;
  } catch (e) {
    store.dispatch(LOADER_ACTIONS.setLoading(false));
    showBasicToast("error", API_FAILURE_MSG);
    console.log(`Error While calling ${endPoint} API ---> `, e);
  }
};


export { http_get };
