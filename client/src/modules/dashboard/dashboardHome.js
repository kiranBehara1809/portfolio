import React, { useState, useEffect } from "react";
import CustomHeaderWithSearchBar from "../../common/components/customHeaderWithSearchBar";
import UnderDev from "../../common/components/underDev";
import { GISTS_ICON, HOME_ICON, REPOSITORY_ICON } from "../../constants/icons";
import { Octokit } from "@octokit/core";
import { useSelector } from "react-redux";
import axios from "axios";
import store from "../../store";
import { CURRENT_USER_ACTIONS } from "../../store/slices/currentUser";
import { http_post } from "../../http/github";
import CustomRepoCard from "../../common/components/git-comp/customRepoCard";
import {
  Badge,
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomGistCard from "../../common/components/git-comp/customGistCard";
import CompleteRepo from "../../common/components/git-comp/dialogs/completeRepo";
import CustomPagination from "../shared/customPagination";
import CustomFooterBar from "../../common/components/customFooterBar";

const DashboardHome = () => {
  const theme = useTheme();
  const md_down = useMediaQuery(theme.breakpoints.down("md"));

  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [selectedGist, setSelectedGist] = useState(null);
  const [githubConfigInfo, setGithubConfigInfo] = useState({
    repos: {
      per_page: 20,
      page: 1,
      sort: "created_at",
      direction: "asc",
    },
    gists: {
      per_page: 20,
      page: 1,
    },
  });
  const [githubInfo, setGithubInfo] = useState({
    repos: [],
    gists: [],
  });
  useEffect(() => {
    fetchGithubData();
  }, [currentUser, githubConfigInfo.repos]);

  const handleRepoPageChange = (event) => {
    console.log(event);
    setGithubConfigInfo((prev) => {
      return {
        ...prev,
        repos: {
          page: prev.repos.page + 1,
          per_page: prev.repos.per_page,
        },
      };
    });
  };

  const fetchGithubData = async () => {
    if (currentUser) {
      const reposPgination = `?per_page=${githubConfigInfo.repos.per_page}&page=${githubConfigInfo.repos.page}&sort=${githubConfigInfo.repos.sort}&direction=${githubConfigInfo.repos.direction}`;
      const gistsPgination = `?per_page=${githubConfigInfo.gists.per_page}&page=${githubConfigInfo.gists.page}`;
      const reposResp = await http_post(
        `${currentUser?.repos_url}${reposPgination}`
      );
      const gistsResp = await http_post(
        currentUser?.gists_url?.split("{")[0] + gistsPgination
      );
      setGithubInfo((prev) => {
        return {
          repos: reposResp?.data || [],
          gists: gistsResp?.data || [],
        };
      });
    }
    // const octokit = new Octokit({
    //   auth: localStorage.getItem("accessToken"),
    // });
    // await octokit.request("GET /advisories", {
    //   headers: {
    //     "X-GitHub-Api-Version": "2022-11-28",
    //   },
    // });
    // await octokit.request("GET /emojis", {
    //   headers: {
    //     "X-GitHub-Api-Version": "2022-11-28",
    //   },
    // });
    // await octokit.request("GET /feeds", {
    //   headers: {
    //     "X-GitHub-Api-Version": "2022-11-28",
    //   },
    // });
  };
  const handleSelectedRepo = (repoObj) => {
    setSelectedRepo(repoObj ?? null);
  };
  const handleSelectedGist = (gist) => {
    setSelectedGist(gist ?? null);
  };
  return (
    <>
      {selectedRepo !== null && (
        <CompleteRepo
          repoObj={selectedRepo || null}
          handleCompleteRepoDialogClose={() => setSelectedRepo(null)}
        />
      )}

      <CustomHeaderWithSearchBar
        hideSearchBar
        headerText={"Home Dashboard"}
        headerIcon={HOME_ICON}
      />
      <Grid container spacing={1}>
        <Grid item xs={md_down ? 6 : 4}>
          <CustomHeaderWithSearchBar
            hideSearchBar
            headerText={"Repositories"}
            headerIcon={REPOSITORY_ICON}
          />
          <CustomRepoCard
            list={githubInfo.repos}
            xs={12}
            selectedRepo={handleSelectedRepo}
          />
          {currentUser && githubInfo.repos?.length > 0 && (
            <CustomFooterBar
              children={
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ p: 2.5, wordWrap: "break-word" }}
                    >
                      Total Repos : {currentUser?.public_repos}
                    </Typography>
                    <CustomPagination
                      className="pagination-bar"
                      currentPage={githubConfigInfo.repos.page || 1}
                      totalCount={currentUser?.public_repos || 0}
                      pageSize={githubConfigInfo.repos.per_page || 5}
                      onPageChange={(page) =>
                        setGithubConfigInfo((prev) => {
                          return {
                            ...prev,
                            repos: {
                              per_page: prev.repos.per_page,
                              page: page,
                            },
                          };
                        })
                      }
                    />
                  </Box>
                </>
              }
            />
          )}
        </Grid>
        <Grid item xs={md_down ? 6 : 4}>
          <CustomHeaderWithSearchBar
            hideSearchBar
            headerText={"Your Gists"}
            headerIcon={GISTS_ICON}
          />
          <CustomGistCard
            list={githubInfo.gists}
            xs={12}
            selectedGist={handleSelectedGist}
          />
          {currentUser && githubInfo.gists?.length > 0 && (
            <CustomFooterBar
              children={
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ p: 2.5, wordWrap: "break-word" }}
                    >
                      Total Gists : {currentUser?.public_gists}
                    </Typography>
                    <CustomPagination
                      className="pagination-bar"
                      currentPage={githubConfigInfo.gists.page || 1}
                      totalCount={currentUser?.public_gists || 0}
                      pageSize={githubConfigInfo.gists.per_page || 5}
                      onPageChange={(page) =>
                        setGithubConfigInfo((prev) => {
                          return {
                            ...prev,
                            gists: {
                              per_page: prev.gists.per_page,
                              page: page,
                            },
                          };
                        })
                      }
                    />
                  </Box>
                </>
              }
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardHome;
