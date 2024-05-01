import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Box, Typography } from "@mui/material";

export default function CustomHeader(props) {
  const handleInputChange = (event) => {
    props.searchedInput(event.target.value);
  };

  // commented this because onKeyPress is depriciated
  //onKeyPress={(event) => handleKeyPress(event)}
  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      props.searchedInput(event.target.value);
    }
  };

  return (
    <Paper
      key={props.headerText}
      sx={{
        p: "0 10px",
        mb: 1.7,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "100% !important",
      }}
    >
      {props?.headerIcon || null}
      <Typography variant="h6" sx={{ pl: 1 }}>
        {props?.headerText || ""}
      </Typography>
      <Box sx={{ flex: 1 }}></Box>
      <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
      {props?.btnHtml || null}
    </Paper>
  );
}
