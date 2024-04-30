import React, { useState, useEffect } from "react";
import CustomHeaderWithSearchBar from "../../common/components/customHeaderWithSearchBar";
import UnderDev from "../../common/components/underDev";
import { HOME_ICON } from "../../constants/icons";
import { Chart } from "react-google-charts";

function getRandomNumber() {
  return Math.random() * 100;
}

export function getData() {
  return [
    ["Label", "Value"],
    ["Exp", 50],
  ];
}

export const options = {
  width: 400,
  height: 120,
  redFrom: 80,
  redTo: 100,
  yellowFrom: 60,
  yellowTo: 80,
  minorTicks: 1,
};

export const nd = [
  ["Country", "I am From India in %"],
  ["India", 100],
];

const DashboardHome = () => {
  const [data, setData] = useState(getData);

  useEffect(() => {
    const id = setInterval(() => {
      setData(getData());
    }, 3000);

    return () => {
      clearInterval(id);
    };
  });
  return (
    <>
      <CustomHeaderWithSearchBar
        hideSearchBar
        headerText={"Home Dashboard"}
        headerIcon={HOME_ICON}
      />
      {/* <Chart
        chartType="Gauge"
        width="100%"
        height="600px"
        data={data}
        options={options}
      /> */}
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = nd[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={nd}
      />

      <Chart
        chartType="ScatterChart"
        spreadSheetUrl="https://docs.google.com/spreadsheets/d/18XWdB7E3nNTsT2b4a4XMsfGUD8eXHF1kNLo5YfWVbFM/edit#gid=0"
        options={{
          hAxis: {
            format: "short",
          },
          vAxis: {
            format: "decimal",
          },
        }}
      />
    </>
  );
};

export default DashboardHome;
