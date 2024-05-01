import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toTitleCase } from "../../common/functions/function";
import { useSelector } from "react-redux";
import store from "../../store";
import { CURRENT_USER_ACTIONS } from "../../store/slices/currentUser";

const ThemeSwitcher = () => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const [themesNew, setThemesNew] = useState([
    {
      themeName: "defaultTheme",
      hoverColor: "#d9733f",
      selected: true,
    },
    {
      themeName: "blueTheme",
      hoverColor: "#0277bd",
      selected: false,
    },
    {
      themeName: "purpleTheme",
      hoverColor: "#660066",
      selected: false,
    },
    {
      themeName: "greenTheme",
      hoverColor: "#0e6f5d",
      selected: false,
    },
    {
      themeName: "blackTheme",
      hoverColor: "#4C4E56",
      selected: false,
    },
    {
      themeName: "mistyGreenTheme",
      hoverColor: "#206371",
      selected: false,
    },
    {
      themeName: "rosyPinkTheme",
      hoverColor: "#C25E8F",
      selected: false,
    },
  ]);

  useEffect(() => {
    if (currentUser !== null) {
      setThemesNew((prev) => {
        return prev.map((x) => {
          return {
            ...x,
            selected: x.themeName === currentUser.theme ? true : false,
          };
        });
      });
    }
  }, [currentUser]);

  const handleChangeTheme = async (obj) => {
    store.dispatch(
      CURRENT_USER_ACTIONS.setCurrentUser({
        theme: obj.themeName,
      })
    );
    // const response = await updateMastersData(
    //   `users/update/${currentUser?._id}`,
    //   {
    //     ...currentUser,
    //     theme: obj.themeName,
    //   }
    // );
  };

  return (
    <>
      <Grid container spacing={1}>
        {themesNew.map((x, i) => (
          <Grid
            item
            key={i}
            xs={3}
            onClick={() => handleChangeTheme(x)}
            sx={{
              height: "80px",
              cursor: "pointer",
              margin: "5px",
              borderRadius: "10px",
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: x.selected ? x.hoverColor : "",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              "&:hover": {
                background: x.hoverColor,
                color: "white",
              },
            }}
          >
            <Typography variant="body2">{toTitleCase(x.themeName)}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ThemeSwitcher;
