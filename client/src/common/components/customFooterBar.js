import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Box, Typography } from "@mui/material";

export default function CustomFooterBar({ children }) {
  return (
    <Paper
      //   key={props.headerText}
      sx={{
        mb: 1.7,
        display: "flex",
        alignItems: "center",
        minHeight: "40px",
        maxHeight: "40px",
        justifyContent: "space-between",
        maxWidth: "100% !important",
        border: "0.015px solid lightgray",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      {children}
    </Paper>
  );
}
