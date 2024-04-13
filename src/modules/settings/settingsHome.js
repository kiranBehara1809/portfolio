import {
  Grid,
  Typography,
  Box,
  Backdrop,
  CircularProgress,
  Card,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { SETTINGS_MENU } from "../../db/dbMasters/settingsMenu";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import CustomHeaderWithSearchBar from "../../common/components/customHeaderWithSearchBar";
import SearchResultsNotFound from "../../common/components/searchResultsNotFound";
import {
  ADMIN_PANEL_ICON,
  RX_DASHBOARD_ICON,
  SETTINGS_ICON,
} from "../../constants/icons";
import ThemeSwitcher from "../shared/themeSwitcher";
import UnderDev from "../../common/components/underDev";

const SettingsHome = () => {
  const theme = useTheme();
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [settingMasterMenu, setSettingMasterMenu] = useState(
    SETTINGS_MENU || []
  );
  const [selectedMenuCard, setSelectedMenuCard] = useState(null);

  const handleSearchInput = (searchedInput) => {
    if (
      searchedInput === "" ||
      searchedInput === null ||
      searchedInput === undefined
    ) {
      setSettingMasterMenu(SETTINGS_MENU);
      return;
    }
    setSettingMasterMenu(
      SETTINGS_MENU.filter((x) =>
        x.name
          .toString()
          .toLocaleLowerCase()
          .includes(searchedInput.toString().toLocaleLowerCase())
      )
    );
  };
  const handleSettingCardClick = (option) => {
    setSelectedMenuCard(option);
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
      <Grid
        container
        direction={"row"}
        sx={{ width: "calc(100vw - 53px) !important" }}
      >
        <Grid item xs={12} sm={4.5}>
          <CustomHeaderWithSearchBar
            searchedInput={handleSearchInput}
            headerText={"Settings"}
            headerIcon={SETTINGS_ICON}
            placeholder={"Search Settings"}
          />

          {settingMasterMenu.length === 0 ? <SearchResultsNotFound /> : null}
          <Grid container spacing={1}>
            {settingMasterMenu?.map((option, index) => {
              return (
                <Grid
                  onClick={() => handleSettingCardClick(option.uniqueName)}
                  item
                  xs={5}
                  sm={3.7}
                  key={option.uniqueName}
                  sx={{
                    height: "80px",
                    cursor: "pointer",
                    margin: "5px",
                    borderRadius: "10px",
                    p: 1,
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    borderBottom:
                      selectedMenuCard === option.uniqueName
                        ? `1.5px solid ${theme.palette.primary.main} !important`
                        : "",
                    background: (theme) =>
                      selectedMenuCard === option.uniqueName
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
                  <Stack
                    sx={{
                      display: "flex",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {option.icon}
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {option.name}
                    </Typography>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={7.5} sx={{pl:1}}>
          {selectedMenuCard === "THEME" && <ThemeSwitcher />}
          {selectedMenuCard === "FONT_SIZE" && <UnderDev />}
        </Grid>
      </Grid>
    </>
  );
};

export default SettingsHome;
