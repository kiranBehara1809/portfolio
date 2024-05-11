import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
  Autocomplete,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { DRAG_ICON } from "../../../../constants/icons";
import { http_get } from "../../../../http/github";
import { prepareAutoCompleteData } from "../../../functions/function";

function PaperComponent(props) {
  return (
    <Draggable
      bounds="parent"
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const CompleteRepo = ({
  handleCompleteRepoDialogClose,
  openCompleteRepoDialog,
  repoObj,
}) => {
  const theme = useTheme();
  const [repoDetails, setRepoDetails] = useState({
    branches: [],
  });

  useEffect(() => {
    if (repoObj !== null) {
      // const branches = repoObj.branches_url
      getRepoInnerDetails();
    }
  }, [repoObj]);

  const getRepoInnerDetails = async () => {
    const branchesResp = await http_get(repoObj.branches_url?.split("{")[0]);
    const tempBranches = prepareAutoCompleteData(branchesResp?.data, "name");
    setRepoDetails({
      branches: tempBranches || [],
    });
  };

  const handleDialogClose = (event, reason) => {
    if (reason !== "backdropClick") {
      handleCompleteRepoDialogClose();
    }
  };
  return (
    <>
      <Dialog
        maxWidth={"lg"}
        fullWidth
        disableEscapeKeyDown
        PaperComponent={PaperComponent}
        open={true}
        onClose={handleDialogClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "inherit", alignItems: "center" }}>
              <img
                src={repoObj?.owner?.avatar_url}
                loading="eager"
                width={35}
                height={35}
                style={{
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <span style={{ fontWeight: "550" }}>{repoObj?.name}</span>
            </Box>
            <Box>
              <Chip
                variant="outlined"
                label={repoObj?.private ? "Private" : "Public"}
              />
              <Chip
                variant="outlined"
                id="draggable-dialog-title"
                style={{ cursor: "move", marginLeft: "5px" }}
                icon={DRAG_ICON}
                label={"Drag"}
              />
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={repoDetails.branches || []}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="Branches" />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ textTransform: "none" }} onClick={handleDialogClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CompleteRepo;
