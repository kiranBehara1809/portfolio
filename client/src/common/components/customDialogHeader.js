import { Box, DialogTitle, Divider, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import { CLOSE_ICON } from "../../constants/icons";

const CustomDialogHeader = (props) => {
  return (
    <>
      <DialogTitle sx={{p:1.5}}>
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {props.headerIcon}
            <Typography variant="h6" sx={{ pl: 1 }}>
              {props.headerTitle}
            </Typography>
          </Box>
          <Tooltip arrow title={`Close ${props.headerTitle}`}>
            <span
              style={{ cursor: "pointer" , marginBottom : "-8px"}}
              onClick={() => props.closeDialog()}
            >
              {CLOSE_ICON}
            </span>
          </Tooltip>
        </Stack>
      </DialogTitle>
      <Divider />
    </>
  );
};

export default CustomDialogHeader;
