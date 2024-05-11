import logo from "./logo.svg";
import {
  CssBaseline,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import "./App.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Routings from "./routings";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import greenTheme from "./themes/greenTheme";
import { blackTheme } from "./themes/blackTheme";
import { blueTheme } from "./themes/bluetheme";
import { mistyGreenTheme } from "./themes/mistyGreenTheme";
import { rosyPinkTheme } from "./themes/rosyPinkTheme";
import { greyTheme } from "./themes/greyTheme";
import { defaultTheme } from "./themes/defaultTheme";
import { sunBurstOrange } from "./themes/sunburstOrange";
import { purpleTheme } from "./themes/purpleTheme";
import { PROJECT_INFO } from "./constants/project";
import { useSelector } from "react-redux";
import store from "./store";
import { CURRENT_THEME_ACTIONS } from "./store/slices/currentTheme";

function App() {
  // const currentUser = useSelector((state) => state.currentUser.currentUser);
  const currentTheme = useSelector((state) => state.currentTheme?.value);
  const [ct, setCt] = useState(currentTheme || defaultTheme);
  const very_small = useMediaQuery("(max-width:500px)");

  useEffect(() => {
    if (
      localStorage.getItem("currentTheme") !== null ||
      localStorage.getItem("currentTheme") !== "null"
    ) {
      localStorage.setItem(
        "currentTheme",
        localStorage.getItem("currentTheme")
      );
      store.dispatch(
        CURRENT_THEME_ACTIONS.setCurrentTheme(
          localStorage.getItem("currentTheme")
        )
      );
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    document.title = PROJECT_INFO.name;
    if (currentTheme === null || currentTheme === "defaultTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        defaultTheme.palette.primary.main
      );
      setCt(defaultTheme);
    }
    if (currentTheme === "greenTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        greenTheme.palette.primary.main
      );
      setCt(greenTheme);
    }
    if (currentTheme === "defaultTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        defaultTheme.palette.primary.main
      );
      setCt(defaultTheme);
    }
    if (currentTheme === "mistyGreenTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        mistyGreenTheme.palette.primary.main
      );
      setCt(mistyGreenTheme);
    }
    if (currentTheme === "blueTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        blueTheme.palette.primary.main
      );
      setCt(blueTheme);
    }
    if (currentTheme === "purpleTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        purpleTheme.palette.primary.main
      );
      setCt(purpleTheme);
    }
    if (currentTheme === "rosyPinkTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        rosyPinkTheme.palette.primary.main
      );
      setCt(rosyPinkTheme);
    }
    if (currentTheme === "blackTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        blackTheme.palette.primary.main
      );
      setCt(blackTheme);
    }
    if (currentTheme === "greyTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        greyTheme.palette.primary.main
      );
      setCt(greyTheme);
    }
    if (currentTheme === "sunBurstOrange") {
      root.style.setProperty(
        "--reacIconsColor",
        sunBurstOrange.palette.primary.main
      );
      setCt(sunBurstOrange);
    }
  }, [currentTheme]);

  return (
    <>
      {very_small ? (
        "Switch to mobile version ?"
      ) : (
        <ThemeProvider theme={ct || defaultTheme}>
          <CssBaseline />
          <BrowserRouter basename="/">
            <HelmetProvider>
              <Routings />
            </HelmetProvider>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
