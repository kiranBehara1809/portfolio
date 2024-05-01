import { createTheme } from "@mui/material";

const defaultGeneralSettings = {
  fontSize: 12,
  fontFamily: "sans-serif",
};
export const mistyGreenTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#206371",
    },
    secondary: {
      main: "#2F4858",
    },
    error: {
      main: "#da1111",
    },
    background: {
      default: "#f5f2f2",
      paper: "#f5f2f2",
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
            background: "#206371 !important",
            color: "#ffffff !important",
          },
          ".Mui-selected": {
            background: "#206371 !important",
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
