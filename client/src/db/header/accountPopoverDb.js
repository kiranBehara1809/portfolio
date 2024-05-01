import {
  ACC_POPOVER_INFO_ICON,
  ACC_POPOVER_LOGOUT_ICON,
  ACC_POPOVER_PROFILE_ICON,
  SETTINGS_ICON,
  ACC_POPOVER_SETTINGS_ICON,
} from "../../constants/icons";


const ACCOUNT_POPOVER_LIST = [
  {
    name: "About",
    url: "about",
    tooltip: "",
    icon: ACC_POPOVER_INFO_ICON,
  },
  {
    name: "Settings",
    url: "settings",
    tooltip: "",
    icon: ACC_POPOVER_SETTINGS_ICON,
  },
  {
    name: "Logout",
    url: "/login",
    tooltip: "",
    icon: ACC_POPOVER_LOGOUT_ICON,
  },
];

export { ACCOUNT_POPOVER_LIST  };