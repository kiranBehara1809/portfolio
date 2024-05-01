import { Box, Typography, alpha } from "@mui/material";
import image from "../../assets/404.png";
import { PAGE_NOT_FOUND_ICON } from "../../constants/icons";

const PageNotFound = (props) => {
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
            display : "flex",
            justifyContent : "center",
            alignItems : 'center',
            flexDirection : "column"
          }}
        >
          {PAGE_NOT_FOUND_ICON}
          <Typography variant="h4" color={"primary.main"}>Oops..Page Not Found</Typography>
        </Box>
        {/* <img src={image} width={props?.width || 500} height={props?.height || 300} /> */}
      </Box>
    </>
  );
};

export default PageNotFound;
