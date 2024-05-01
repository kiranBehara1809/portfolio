import {
  Typography,
  Box,
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { PROJECT_INFO } from "../constants/project";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ACCOUNT_POPOVER_LIST } from "../db/header/accountPopoverDb";
import { useNavigate } from "react-router";
import { faker } from "@faker-js/faker";
import {
  addBaseUrl,
  showBasicToast,
  showConfirmToast,
} from "../common/functions/function";
import { http_get } from "../http/betaInsightsRequests";
import ProfileDialog from "../modules/loggedInUser/profile";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import store from "../store";
import { CURRENT_USER_ACTIONS } from "../store/slices/currentUser";

const Header = () => {
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(null);
  const navigate = useNavigate();
  const customIconStyles = {
    margin: "0px 5px",
    cursor: "pointer",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    const tempUserData = localStorage.getItem("TEMP_USER_DATA");
    if (tempUserData) {
      setCurrentUserData(JSON.parse(tempUserData));
      store.dispatch(
        CURRENT_USER_ACTIONS.setCurrentUser(JSON.parse(tempUserData))
      );
    } else {
      navigate("/login");
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileDialogClose = (value) => {
    setProfileDialogOpen(false);
  };
  const handleAccountPopverOption = (option) => {
    if (option.url === null) {
      setProfileDialogOpen(true);
      handleClose();
      return;
    }
    if (option.url === "/login") {
      showConfirmToast("warning", "Do you want to logout?").then(
        async (res) => {
          if (res.isConfirmed) {
            showBasicToast("success", "Logout successful");
            navigate(option.url);
            localStorage.removeItem("TEMP_USER_DATA");
            auth.signOut();
          }
        }
      );
    } else {
      navigate(addBaseUrl(option.url));
      handleClose();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Typography variant="h5" noWrap component="div" sx={{ pl: 2 }}>
          {/* {pageHeader || PROJECT_INFO.name} */}
          {PROJECT_INFO.name}
        </Typography>
        {currentUserData && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={currentUserData?.photoURL}
              loading="eager"
              width={35}
              onClick={(event) => handleClick(event)}
              height={35}
              style={{ borderRadius: "50%", cursor: "pointer" }}
            />
          </Box>
        )}
      </Box>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          sx={{
            background: "#8e7070",
            color: "white",
            display: "flex",
            p: "4px 0",
            justifyContent: "center",
          }}
        >
          Signed in{" "}
          {currentUserData?.provider !== "Anonymously"
            ? "with " + currentUserData?.provider
            : currentUserData?.provider}
        </Box>
        <List sx={{ width: "250px" }}>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "center", p: 1 }}
          >
            <img
              src={currentUserData?.photoURL}
              width={120}
              height={120}
              style={{ borderRadius: "50%" }}
            />
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            <Tooltip title={currentUserData?.displayName}>
              <span
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {currentUserData?.displayName}
              </span>
            </Tooltip>
          </ListItem>
          {ACCOUNT_POPOVER_LIST.map((x, index) => {
            return (
              <ListItem disablePadding key={index}>
                <ListItemButton onClick={() => handleAccountPopverOption(x)}>
                  <ListItemIcon disablePadding sx={{ minWidth: "30px" }}>
                    {x.icon}
                  </ListItemIcon>
                  <ListItemText disablePadding>{x.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Popover>
    </>
  );
};

export default Header;
