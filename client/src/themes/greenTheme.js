import { createTheme } from "@mui/material";

const defaultGeneralSettings = {
  fontSize: 12,
  fontFamily: "sans-serif",
};

const greenTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0e6f5d",
    },
    secondary: {
      main: "#eaa342",
    },
    error: {
      main: "#FF0000",
    },
    background: {
      default: "#FFFBF5",
      paper: "#FFFBF5",
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
            background: "#0e6f5d !important",
            color: "#ffffff !important",
          },
          ".Mui-selected": {
            background: "#0e6f5d !important",
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
export default greenTheme;
