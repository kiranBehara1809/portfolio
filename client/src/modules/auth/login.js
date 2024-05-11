import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { faker } from "@faker-js/faker";
import {
  Backdrop,
  CircularProgress,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";
import { addBaseUrl, showBasicToast } from "../../common/functions/function";
import { Controller, useForm } from "react-hook-form";
import store from "../../store";
import { PAGE_HEADER_ACTIONS } from "../../store/slices/pageHeader";
import axios from "axios";
import { PROJECT_INFO } from "../../constants/project";
import { CURRENT_USER_ACTIONS } from "../../store/slices/currentUser";

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(addBaseUrl("home"));
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    if (codeParam && localStorage.getItem("accessToken") === null) {
      getAccessToken(codeParam);
    }
    // if (localStorage.getItem("accessToken") !== null) {
    //   getCurrentUser();
    //   store.dispatch(PAGE_HEADER_ACTIONS.setPageHeader("Dashboard"));
    // }
  }, []);

  const handleLoginWithGithub = async () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=e49f8e3173f0e4ec2b83`
    );
  };

  async function getAccessToken(codeParam) {
    const resp = await axios.post("/getAccessToken", { code: codeParam });
    if (resp.data.access_token) {
      localStorage.setItem("accessToken", resp.data.access_token);
      navigate(addBaseUrl("home"));
      store.dispatch(PAGE_HEADER_ACTIONS.setPageHeader("Dashboard"));
    }
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          background: "background.default",
          p: 1,
        }}
      >
        <Typography variant="h6" sx={{ pb: 1 }}>
          Welcome to Kiran Behara's Portfolio
        </Typography>

        <Box
          sx={{
            p: 1.5,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            background: "background.default",
            width: "280px",
            borderRadius: "10px",
            minHeight: "auto",
            maxHeight: "auto",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
        >
          <img
            src={PROJECT_INFO.logo}
            width={"100%"}
            height={250}
            style={{ borderRadius: "10px" }}
          />
          <Divider sx={{ pt: 2, mb: 2 }} />
          <Button
            variant="contained"
            onClick={() => handleLoginWithGithub()}
            fullWidth
            sx={{ mb: 1, textTransform: "capitalize" }}
          >
            Sign in with GitHub
          </Button>
          {/* <Button
            variant="contained"
            fullWidth
            onClick={() => signInWithGoogle()}
            sx={{ mb: 1, textTransform: "capitalize" }}
          >
            Sign in with Google
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleSignInAnonymously()}
            sx={{ mb: 1, textTransform: "capitalize" }}
          >
            Sign in Anonymously
          </Button> */}
        </Box>
      </Box>
    </>
  );
}
