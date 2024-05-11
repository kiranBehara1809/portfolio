import React, { useState, useEffect } from "react";
import { Grid, Box, useTheme, Chip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import dayjs from "dayjs";
import {
  calculateTimeDiffAndReturnStr,
  formatDate,
} from "../../functions/function";

const CustomRepoCard = (props) => {
  const theme = useTheme();
  const [selectedMenuCard, setSelectedMenuCard] = useState("");
  const handleRepoCardClick = (repo) => {
    setSelectedMenuCard(repo.id);
    props.selectedGist(repo);
  };

  return (
    <>
      <Grid
        container
        sx={{
          mb: 1,
          minHeight: "calc(100vh - 250px)",
          maxHeight: "calc(100vh - 250px)",
          overflow: "auto",
        }}
      >
        {props.list?.map((x) => {
          return (
            <Grid
              item
              xs={12}
              key={x.id}
              onClick={() => handleRepoCardClick(x)}
              sx={{
                height: 70,
                cursor: "pointer",
                borderRadius: "10px",
                p: 1,
                m: 0.5,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderBottom:
                  selectedMenuCard === x.id
                    ? `2px solid ${theme.palette.primary.main} !important`
                    : "",
                background: (theme) =>
                  selectedMenuCard === x.id
                    ? alpha(
                        theme.palette.primary.main,
                        theme.palette.action.activatedOpacity
                      )
                    : "",
                "&:hover": {
                  background: (theme) =>
                    alpha(
                      theme.palette.primary.main,
                      theme.palette.action.activatedOpacity
                    ),
                },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img
                  src={x?.owner?.avatar_url}
                  loading="eager"
                  width={15}
                  height={15}
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                />
                <Chip
                  sx={{ height: "20px", fontSize: "10px" }}
                  label={x?.private ? "Private" : "Public"}
                  variant="outlined"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  minHeight: "25px",
                  maxHeight: "25px",
                  fontWeight: "550",
                  width: "100%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                gist:{x.id}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  minHeight: "25px",
                  maxHeight: "25px",
                  wordBreak: "break-word",
                  fontSize: "10px",
                }}
              >
                Created{" "}
                {calculateTimeDiffAndReturnStr(x.created_at, new Date())} ago
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CustomRepoCard;
