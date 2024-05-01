import { Outlet } from "react-router"
import SideNav from "./sideNav"
import { useSelector } from "react-redux";
import { Backdrop, CircularProgress } from "@mui/material";

const Home = () => {
  const loaderState = useSelector((state) => state.loader);
    return (
      <>
        <Backdrop
          sx={{
            color: "primary.main",
            zIndex: (theme) => 9999999,
          }}
          open={loaderState.loading || false}
        >
          <CircularProgress sx={{ color: "primary.main" }} />
        </Backdrop>
        <SideNav />
      </>
    );
}

export default Home