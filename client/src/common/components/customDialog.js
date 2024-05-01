import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function CustomDialog(props) {
  const handleDialogClose = () => {
    props.closeDialog();
  };

  return (
    <React.Fragment>
      <Dialog
        maxWidth={props.maxWidth}
        open={props.openDialog}
        onClose={handleDialogClose}
      >
        <DialogTitle>{props.dialogTitle}</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button sx={{ textTransform: "none" }} onClick={handleDialogClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
