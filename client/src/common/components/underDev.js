import { Box, Typography, alpha } from "@mui/material";
import image from "../../assets/404.png";
import { UNDER_DEV_ICON } from "../../constants/icons";

const UnderDev = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: props?.boxHeight || "80vh",
        }}
      >
        <Box
          sx={{
            height: "300px",
            width: "400px",
            background: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
            borderTopRightRadius: "30%",
            borderBottomLeftRadius: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {UNDER_DEV_ICON}
          <Typography variant="h4" color={"primary.main"}>
            Under Development...!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UnderDev;
