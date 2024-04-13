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

const Header = () => {
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(null);
  const navigate = useNavigate();
  const curUserEmail = localStorage.getItem("CUR_USER_EMAIL") || "";
  const customIconStyles = {
    margin: "0px 5px",
    cursor: "pointer",
  };
  const pageHeader = useSelector((state) => state.pageHeader.name);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [randomAvatar, setRandomAvatar] = useState(faker.image.avatar());

  useEffect(() => {
    // getCurrentLoggedUser();
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
          }
        }
      );
    } else {
      navigate(addBaseUrl(option.url));
      handleClose();
    }
  };

  const getCurrentLoggedUser = async () => {
    // const currentUser = await getCurrentUser();
    // setCurrentUserData(currentUser || null);
    // store.dispatch(CURRENT_USER_ACTIONS.setCurrentUser(currentUser || null));
  };

  return (
    <>
      <ProfileDialog
        currentUserData={currentUserData}
        profileDialogOpen={profileDialogOpen}
        setProfileDialogOpen={handleProfileDialogClose}
      />
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {randomAvatar === null ? (
            <AccountCircleIcon
              fontSize="large"
              sx={customIconStyles}
              onClick={(event) => handleClick(event)}
            />
          ) : (
            <img
              src={randomAvatar}
              width={35}
              onClick={(event) => handleClick(event)}
              height={35}
              style={{ borderRadius: "50%", cursor: "pointer" }}
            />
          )}
          <Tooltip title={curUserEmail}>
            <span
              onClick={(event) => handleClick(event)}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "220px",
                paddingLeft: "10px",
                cursor: "pointer",
              }}
            >
              {curUserEmail}
            </span>
          </Tooltip>
        </Box>
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
        <List sx={{ width: "250px" }}>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "center", p: 1 }}
          >
            <img
              src={randomAvatar}
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
            <Tooltip title={curUserEmail}>
              <span
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {curUserEmail}
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
