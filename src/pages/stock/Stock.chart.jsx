import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import StockInfoDetail from "./StockInfoDetail";
import { StyledStockParentDiv } from "./Stock.chart.style";
export default function StockChart(props) {
  const keyword = useSelector((state) => state.keyword.keyword);
  const [options, setOptions] = useState({
    chart: {
      id: "basic-area",
      toolbar: {
        show: false,
      },
      background: "#fff",
      stacked: false,
    },
    xaxis: {
      categories: [],
      type: "dateTime",
      tickAmount: 6,
      labels: {
        show: true,
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
        },
      },
      {
        opposite: true,
        labels: {
          show: true,
          formatter: (value) => value.toFixed(0),
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
    colors: ["rgba(236, 75, 54, 0.9)", "rgba(168, 232, 249, 0.9)"],
  });

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
      const flattenedData = await props.data.flatMap((e) => e.value);
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
          let date = new Date(e.formattedTime);
          let day = date.getDate();
          let month = date.getMonth() + 1;
          return `${month}/${day}`;
        });

        setOptions((prevOptions) => ({
          ...prevOptions,
          xaxis: {
            type: "dateTime",
            tickAmount: 6,
            categories: categories,
            labels: {
              rotate: 0,
            },
          },
        }));
      });
    }
  }, [props.data, props.curCompanyPrice]);

  return (
    <StyledStockParentDiv>
      <Chart
        options={options}
        series={series}
        type="area"
        width="790"
        height="400"
        border-radius="10px"
      />
      <StockInfoDetail info={props.stockDetails}></StockInfoDetail>
    </StyledStockParentDiv>
  );
}
