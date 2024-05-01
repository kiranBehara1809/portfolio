import { createTheme } from "@mui/material";

const defaultGeneralSettings = {
  fontSize: 12,
  fontFamily: "sans-serif",
};
export const sunBurstOrange = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff9800",
    },
    secondary: {
      main: "#8d6e63",
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
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
});
