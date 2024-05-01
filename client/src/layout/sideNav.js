import React, { useEffect, useState } from "react";
import { alpha, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, useNavigate } from "react-router";
import { SIDE_NAV_ITEMS } from "../db/sideNavItems";
import Header from "./header";
import { addBaseUrl } from "../common/functions/function";
import { Collapse, Tooltip } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { PROJECT_INFO } from "../constants/project";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  borderRight: "0.7px dashed",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(5.5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6.5)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: "1px dotted",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNav() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [nestedOption, setNestedOption] = useState("collapse");
  const [currentOption, setCurrentOption] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open === false) {
      setNestedOption("collapse");
    }
  }, [open]);

  const clearCurrentOptionAndCloseNestedArr = () => {
    // setCurrentOption(null);
    // setNestedOption((prev) => prev === "collapse" ? "expand" : "collapse");
  };

  const handleSideNavOptionClick = (option) => {
    setCurrentOption(option);
    if (option?.children?.length > 0) {
      if (!open) handleDrawerOpen();

      setNestedOption((prev) => (prev === "collapse" ? "expand" : "collapse"));
    }
    if (option.url !== null) {
      handleDrawerClose();
      // clearCurrentOptionAndCloseNestedArr()
      navigate(addBaseUrl(option.url));
    }
  };

  const handleNestedSideNavClick = (option) => {
    if (option.url !== null) {
      handleDrawerClose();
      // clearCurrentOptionAndCloseNestedArr()
      navigate(addBaseUrl(option.url));
    }
  };

  return (
    <Box sx={{ display: "flex", overflowX: "hidden" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          minHeight: "45px !important",
          maxHeight: "45px !important",
          height: "45px !important",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "45px !important",
            maxHeight: "45px !important",
            height: "45px !important",
          }}
        >
          <img
            src={PROJECT_INFO.logo}
            width={35}
            height={35}
            onClick={handleDrawerOpen}
            style={{
              borderRadius: "50%",
              cursor: "pointer",
              marginLeft: "-15px",
            }}
          />
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 1,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton> */}
          <Header />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ minHeight: "40px !important" }}>
          <Typography variant="h6">{PROJECT_INFO.name}</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {SIDE_NAV_ITEMS.map((option) => {
            return (
              <ListItem
                key={option.name}
                disablePadding
                sx={{
                  display: "block",
                }}
              >
                <Tooltip arrow placement="right" title={option.tooltip}>
                  <ListItemButton
                    onClick={() => handleSideNavOptionClick(option)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {option.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={option.name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                    {option?.children?.length > 0 && open ? (
                      nestedOption === "expand" ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItemButton>
                </Tooltip>
                <Collapse
                  in={
                    nestedOption === "expand" &&
                    currentOption !== null &&
                    currentOption.name === option.name
                  }
                  timeout="auto"
                  unmountOnExit
                >
                  {currentOption?.children?.map((x) => {
                    return (
                      <List component="div" key={x.name} disablePadding>
                        <Tooltip arrow placement="right" title={x.tooltip}>
                          <ListItemButton
                            sx={{ pl: 5 }}
                            onClick={() => handleNestedSideNavClick(x)}
                          >
                            <ListItemIcon>{x?.icon}</ListItemIcon>
                            <ListItemText primary={x?.name} />
                          </ListItemButton>
                        </Tooltip>
                      </List>
                    );
                  })}
                </Collapse>
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: "9px" }}>
        <DrawerHeader />
        <Box sx={{ mt: "-20px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
