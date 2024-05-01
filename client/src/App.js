import logo from "./logo.svg";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
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

function App() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [ct, setCt] = useState(currentUser?.theme || defaultTheme);
  useEffect(() => {
    const root = document.documentElement;
    document.title = PROJECT_INFO.name;
    if (currentUser === null) {
      root.style.setProperty(
        "--reacIconsColor",
        defaultTheme.palette.primary.main
      );
      setCt(defaultTheme);
    }
    if (currentUser?.theme === "greenTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        greenTheme.palette.primary.main
      );
      setCt(greenTheme);
    }
    if (currentUser?.theme === "defaultTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        defaultTheme.palette.primary.main
      );
      setCt(defaultTheme);
    }
    if (currentUser?.theme === "mistyGreenTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        mistyGreenTheme.palette.primary.main
      );
      setCt(mistyGreenTheme);
    }
    if (currentUser?.theme === "blueTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        blueTheme.palette.primary.main
      );
      setCt(blueTheme);
    }
    if (currentUser?.theme === "purpleTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        purpleTheme.palette.primary.main
      );
      setCt(purpleTheme);
    }
    if (currentUser?.theme === "rosyPinkTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        rosyPinkTheme.palette.primary.main
      );
      setCt(rosyPinkTheme);
    }
    if (currentUser?.theme === "blackTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        blackTheme.palette.primary.main
      );
      setCt(blackTheme);
    }
    if (currentUser?.theme === "greyTheme") {
      root.style.setProperty(
        "--reacIconsColor",
        greyTheme.palette.primary.main
      );
      setCt(greyTheme);
    }
    if (currentUser?.theme === "sunBurstOrange") {
      root.style.setProperty(
        "--reacIconsColor",
        sunBurstOrange.palette.primary.main
      );
      setCt(sunBurstOrange);
    }
  }, [currentUser]);
  return (
    <>
      <ThemeProvider theme={ct || defaultTheme}>
        <CssBaseline />
        <BrowserRouter basename="/">
          <HelmetProvider>
            <Routings />
          </HelmetProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
