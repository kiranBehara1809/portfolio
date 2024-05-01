import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { ACC_POPOVER_PROFILE_ICON } from "../../constants/icons";
import CustomDialogHeader from "../../common/components/customDialogHeader";
import { Grid } from "@mui/material";

export default function ProfileDialog({
  profileDialogOpen,
  setProfileDialogOpen,
  currentUserData,
}) {
  return (
    <Dialog
      fullWidth
      maxWidth={"sm"}
      onClose={() => setProfileDialogOpen(false)}
      open={profileDialogOpen}
    >
      <CustomDialogHeader
        headerIcon={ACC_POPOVER_PROFILE_ICON}
        headerTitle={"Profile Information"}
        closeDialog={() => setProfileDialogOpen(false)}
      />
      <Grid container spacing={0.5} sx={{ padding: "15px 15px" }}>
        <Grid item xs={4}>
          <ListItemText
            primary={currentUserData?.firstName || ""}
            secondary="First Name"
          />
        </Grid>
        <Grid item xs={4}>
          <ListItemText
            primary={currentUserData?.middleName || "--"}
            secondary="Middle Name"
          />
        </Grid>
        <Grid item xs={4}>
          <ListItemText
            primary={currentUserData?.lastName || ""}
            secondary="Last Name"
          />
        </Grid>
        <Grid item xs={4}>
          <ListItemText
            primary={currentUserData?.contactNo || ""}
            secondary="Contact No"
          />
        </Grid>
        <Grid item xs={4}>
          <ListItemText
            primary={currentUserData?.gender || ""}
            secondary="Gender"
          />
        </Grid>
        <Grid item xs={4}>
          <ListItemText
            primary={currentUserData?.role || ""}
            secondary="Role"
          />
        </Grid>
        <Grid item xs={4}>
          <ListItemText
            primary={currentUserData?.userName || ""}
            secondary="User Name"
          />
        </Grid>
        <Grid item xs={4}>
          <ListItemText
            primary={currentUserData?.idType || ""}
            secondary="ID Type"
          />
        </Grid>
        <Grid item xs={4}>
          <ListItemText
            primary={currentUserData?.idNo || ""}
            secondary="ID No"
          />
        </Grid>
      </Grid>
    </Dialog>
  );
}
