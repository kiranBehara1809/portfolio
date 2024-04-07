import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Backdrop, CircularProgress, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import { addBaseUrl, showBasicToast } from "../../common/functions/function";
import { handleLogin } from "../../http/authRequests";
import { API_FAILURE_MSG } from "../../constants/errorText";


export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    // getApodImageOfTheDay();
  }, []);
  const [apodHdUrl, setApodHdUrl] = useState(null);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowBackdrop(true);
    const data = new FormData(event.currentTarget);
    handleLogin(data.get("userName")).then((res) => {
      if (res?.statusCode === 200) {
        showBasicToast("success", res.msg);
        setShowBackdrop(false);
        navigate(addBaseUrl("home"));
      } else {
        setShowBackdrop(false);
        showBasicToast("error", res?.msg || API_FAILURE_MSG);
        return;
      }
    });
  };

  return (
    <>
      <Backdrop
        sx={{
          color: "primary.main",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={showBackdrop}
      >
        <CircularProgress sx={{ color: "secondary.main" }} />
      </Backdrop>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          background: "background.default",
        }}
      >
        <Box
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            p: 3,
            borderRadius: 5,
            background: "background.default",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Avatar
              sx={{
                bgcolor: `${showBackdrop ? "primary.main" : "error.main"}`,
              }}
            >
              {showBackdrop ? <LockOpenIcon /> : <LockOutlinedIcon />}
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
              Sign in
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoComplete="off"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, textTransform: "capitalize" }}
            >
              Sign In
            </Button>
            <Grid container sx={{ mt: 1 }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}