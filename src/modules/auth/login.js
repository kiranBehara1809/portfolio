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
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
} from "firebase/auth";
import { auth } from "../../firebase";
import { PROJECT_INFO } from "../../constants/project";

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(addBaseUrl("home"));
    store.dispatch(PAGE_HEADER_ACTIONS.setPageHeader("Dashboard"));
  };

  const handleLoginWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }
      const user = res.user;
      if (user) {
        const localObj = {
          email: user.providerData[0]?.email || "",
          phoneNumber: user.providerData[0]?.phoneNumber || "",
          displayName: user.providerData[0]?.displayName || "",
          photoURL: user.providerData[0]?.photoURL || "",
          provider: "GitHub",
        };
        localStorage.setItem("TEMP_USER_DATA", JSON.stringify(localObj));
        handleSubmit();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInAnonymously = async () => {
    try {
      const res = await signInAnonymously(auth);
      if (!res) {
        throw new Error("Could not complete signup");
      }
      console.log(res);
      const user = res.user;
      if (user) {
        const localObj = {
          email: faker.internet.email() || "",
          phoneNumber: faker.internet.port() || "",
          displayName: faker.internet.userName() || "",
          photoURL: faker.image.avatar() || "",
          provider: "Anonymously",
        };
        localStorage.setItem("TEMP_USER_DATA", JSON.stringify(localObj));
        handleSubmit();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const info = signInWithPopup(auth, provider).then((res) => {
      if (res) {
        const localObj = {
          email: res.user.providerData[0]?.email || "",
          phoneNumber: res.user.providerData[0]?.phoneNumber || "",
          displayName: res.user.providerData[0]?.displayName || "",
          photoURL: res.user.providerData[0]?.photoURL || "",
          provider: "Google",
        };
        localStorage.setItem("TEMP_USER_DATA", JSON.stringify(localObj));
        handleSubmit();
      }
    });
  };

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
          <Button
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
          </Button>
        </Box>
      </Box>
    </>
  );
}
