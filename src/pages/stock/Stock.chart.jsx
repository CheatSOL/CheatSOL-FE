import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function StockChart(props) {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-area",
      toolbar: {
        show: false,
      },
      background: "#fff",
      stacked: false, // 스택 옵션을 false로 설정
    },
    xaxis: {
      categories: [], // 초기에는 빈 배열로 설정
      labels: {
        show: false,
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
    colors: ["#EC4B36", "#A8E8F9"],
  });

  const [series, setSeries] = useState([
    {
      name: " 불닭",
      data: [], // 초기에는 빈 배열로 설정
      yAxisIndex: 0,
    },
    {
      name: "삼성전자",
      data: [], // 초기에는 빈 배열로 설정
      yAxisIndex: 1,
    },
  ]);

  // 데이터 정규화 함수
  const normalizeData = (data) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    return data.map((value) => ((value - min) / (max - min)) * 100);
  };

  // props.data가 변경될 때마다 series를 업데이트
  useEffect(() => {
    async function getSeries() {
      const flattenedData = await props.data.flatMap((e) => e.value);
      return flattenedData;
    }

    if (props.data && props.data.length > 0) {
      getSeries().then((flattenedData) => {
        console.log(flattenedData);
        const samsungData = [
          76000, 77200, 76900, 77200, 77500, 77800, 78000, 77000, 77000, 79000,
          78000, 77500, 78000, 77500, 78000, 77500, 78000, 77500,
        ];
        setSeries([
          {
            name: "불닭",
            data: flattenedData,
            yAxisIndex: 0,
          },
          {
            name: "삼성전자",
            data: samsungData,
            yAxisIndex: 1,
          },
        ]);
      });

      // x축 카테고리 설정
      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          type: "datetime",
        },
      }));
    }
  }, [props.data]);

  return (
    <div className="mixed-chart">
      <Chart
        options={options}
        series={series}
        type="area"
        width="650"
        height="450"
      />
    </div>
  );
}
