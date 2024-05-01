import {
  HOME_ICON,
  SEARCH_PRODUCT_FUND_ICON,
  SETTINGS_ICON,
} from "../constants/icons";

const SIDE_NAV_ITEMS = [
  {
    name: "Home",
    url: "home",
    key: "",
    openInNewTab: false,
    icon: HOME_ICON,
    tooltip: "Home",
  },
  {
    name: "Settings",
    url: "settings",
    key: "settings",
    openInNewTab: false,
    icon: SETTINGS_ICON,
    tooltip: "Settings",
  },
];

export { SIDE_NAV_ITEMS };
