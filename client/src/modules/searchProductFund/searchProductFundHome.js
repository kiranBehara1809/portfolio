import React from "react";
import CustomHeaderWithSearchBar from "../../common/components/customHeaderWithSearchBar";
import { SEARCH_PRODUCT_FUND_ICON } from "../../constants/icons";
import UnderDev from "../../common/components/underDev";

const SearchProductFundHome = () => {
  return (
    <>
      <CustomHeaderWithSearchBar
        hideSearchBar
        headerText={"Search Product / Fund"}
        headerIcon={SEARCH_PRODUCT_FUND_ICON}
      />
      <UnderDev />
    </>
  );
};

export default SearchProductFundHome;
