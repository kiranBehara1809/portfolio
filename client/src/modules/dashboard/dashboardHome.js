import React, { useState, useEffect } from "react";
import CustomHeaderWithSearchBar from "../../common/components/customHeaderWithSearchBar";
import UnderDev from "../../common/components/underDev";
import { HOME_ICON } from "../../constants/icons";
import { Octokit } from "@octokit/core";
import { useSelector } from "react-redux";

const DashboardHome = () => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);

  useEffect(() => {
    console.log(currentUser);
    // getRepos();
  });

  const getRepos = async () => {
    const octokit = new Octokit({
      auth: "",
    });
    await octokit.request("GET /gists", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    await octokit.request("GET /emojis", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  };
  return (
    <>
      <CustomHeaderWithSearchBar
        hideSearchBar
        headerText={"Home Dashboard"}
        headerIcon={HOME_ICON}
      />
    </>
  );
};

export default DashboardHome;
