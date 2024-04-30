import projectLogo from "../assets/kb-logo.png";

const PROJECT_INFO = {
  name: "Kiran Behara",
  shortName: "KB",
  logo: projectLogo,
  description: "This is my latest personal portfolio",
};

const UI = {
  colorTheme: "defaultTheme",
  fieldVariant: "standard",
};

const BASE_ROUTE_PATH = "kb";

const API_ENDPOINT = "http://localhost:8888/api/v1";
const ACCESS_TOKEN_KEY_NAME = "A_TOKEN";
const REFRESH_TOKEN_KEY_NAME = "R_TOKEN";

export {
  PROJECT_INFO,
  BASE_ROUTE_PATH,
  API_ENDPOINT,
  ACCESS_TOKEN_KEY_NAME,
  REFRESH_TOKEN_KEY_NAME,
  UI,
};
