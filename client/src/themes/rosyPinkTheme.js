import { createTheme } from "@mui/material";

const defaultGeneralSettings = {
  fontSize: 12,
  fontFamily: "sans-serif",
};
export const rosyPinkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#C25E8F",
    },
    secondary: {
      main: "#F9F871",
    },
    error: {
      main: "#da1111",
    },
    background: {
      default: "#3a3035",
      paper: "#3a3035",
    },
  },
  typography: {
    fontFamily: `${defaultGeneralSettings.fontFamily}`,
    fontSize: defaultGeneralSettings.fontSize,
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        asterisk: {
          color: "#FF0000",
          fontSize: "20px",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: "30px",
          minHeight: "30px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          textTransform: "capitalize !important",
          height: "30px",
        },
      },
    },
    MuiToggleButtonGroup: {
      defaultProps: {
        sx: {
          height: "30px",
          textTransform: "capitalize !important",
        },
      },
      styleOverrides: {
        root: {
          ".Mui-selected:hover": {
            background: "#C25E8F !important",
            color: "#ffffff !important",
          },
          ".Mui-selected": {
            background: "#C25E8F !important",
            color: "#ffffff !important",
          },
        },
      },
    },
    MuiToggleButton: {
      defaultProps: {
        sx: {
          textTransform: "capitalize !important",
        },
      },
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
});
