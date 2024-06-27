import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import StockInfoDetail from "./StockInfoDetail";
import { StyledStockParentDiv } from "./Stock.chart.style";

export default function StockChart(props) {
  const keyword = useSelector((state) => state.keyword.keyword);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const getInitialOptions = (darkMode) => ({
    chart: {
      id: "basic-area",
      toolbar: {
        show: false,
      },
      background: darkMode ? "#333" : "#fff",
      stacked: false,
    },
    theme: {
      mode: darkMode ? "dark" : "light",
    },
    xaxis: {
      categories: [],
      type: "dateTime",
      tickAmount: 6,
      labels: {
        show: true,
        style: {
          colors: darkMode ? "#fff" : "#333",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: [
      {
        min: 0,
        labels: {
          show: true,
          formatter: (value) => value.toFixed(0),
          style: {
            colors: darkMode ? "#fff" : "#333",
          },
        },
      },
      {
        opposite: true,
        labels: {
          show: true,
          formatter: (value) => value.toFixed(0),
          style: {
            colors: darkMode ? "#fff" : "#333",
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: darkMode ? "dark" : "light",
    },
    colors: ["rgba(236, 75, 54, 0.9)", "rgba(168, 232, 249, 0.9)"],
  });

  const [options, setOptions] = useState(getInitialOptions(darkMode));

  const [series, setSeries] = useState([
    {
      name: keyword,
      data: [], // 초기에는 빈 배열로 설정
      yAxisIndex: 0,
    },
    {
      name: "삼성전자",
      data: [], // 초기에는 빈 배열로 설정
      yAxisIndex: 1,
    },
  ]);

  useEffect(() => {
    async function getSeries() {
      const flattenedData = await props.data.map((e) => e.ratio);
      return flattenedData;
    }

    if (props.data && props.data.length > 0) {
      getSeries().then((flattenedData) => {
        setSeries([
          {
            name: keyword,
            data: flattenedData,
            yAxisIndex: 0,
          },
          {
            name: props.curCompanyName,
            data: [...props.curCompanyPrice],
            yAxisIndex: 1,
          },
        ]);

        const categories = props.data.map((e) => {
          let date = new Date(e.period);
          let day = date.getDate();
          let month = date.getMonth() + 1;
          return `${month}/${day}`;
        });

        setOptions((prevOptions) => ({
          ...prevOptions,
          xaxis: {
            ...prevOptions.xaxis,
            categories: categories,
          },
        }));
      });
    }
  }, [props.data, props.curCompanyPrice, keyword]);

  useEffect(() => {
    setOptions(getInitialOptions(darkMode));
  }, [darkMode]);

  return (
    <StyledStockParentDiv darkMode={darkMode}>
      <Chart
        options={options}
        series={series}
        type="area"
        width="790"
        height="400"
      />
      <StockInfoDetail
        info={props.stockDetails}
        curCompanyCode={props.curCompanyCode}
        curCompanyName={props.curCompanyName}
      />
    </StyledStockParentDiv>
  );
}
