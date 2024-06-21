import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
} from "chart.js";
import styled from "styled-components";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale
);

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  width: 550px;
  height: 300px;
  padding: 10px;
`;

const formatYAxisLabel = (value) => {
  if (Math.abs(value) >= 1000000) {
    return (Math.abs(value) / 1000000).toFixed(0) + "M";
  } else if (Math.abs(value) >= 1000) {
    return (Math.abs(value) / 1000).toFixed(0) + "K";
  }
  return value;
};

const InstagramGraph = () => {
  const data = [
    { date: "24.11", posts: 520 },
    { date: "24.12", posts: 5505 },
    { date: "25.01", posts: 5005 },
  ];

  const labels = data.map((item) => item.date);

  const lineData = {
    labels: labels,
    datasets: [
      {
        label: "포스트 수",
        data: data.map((item) => item.posts),
        borderColor: "rgba(214, 41, 118, 1)", // Pink color for Instagram aesthetic
        borderWidth: 3, // Thicker line
        yAxisID: "y1",
      },
      {
        label: "전월 대비 증감",
        data: data.map((item, index) => {
          if (index === 0) return 0; // First entry has no growth
          return item.posts - data[index - 1].posts; // Previous post count minus current post count
        }),
        backgroundColor: "rgba(214, 41, 118, 0.2)", // Blue color for Instagram aesthetic
        borderRadius: 20, // Rounded corners
        barThickness: 50, // Thinner bars
        yAxisID: "y2",
        type: "bar",
      },
    ],
  };

  const maxDataValue = Math.max(...lineData.datasets[0].data);
  const minDataValue = Math.min(...lineData.datasets[0].data);

  const range = Math.max(Math.abs(maxDataValue), Math.abs(minDataValue));
  const symRange = range + Math.abs(range % 1000);

  const options = {
    scales: {
      y1: {
        beginAtZero: true,
        position: "left",
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: (value) => formatYAxisLabel(value),
        },
      },
      y2: {
        beginAtZero: true,
        position: "right",
        grid: {
          drawTicks: true, // Draw horizontal grid lines without displaying labels
          display: true,
        },
        ticks: {
          callback: (value) => {
            let formattedValue = formatYAxisLabel(Math.abs(value));
            if (value > 0) {
              return `${formattedValue}`;
            } else if (value < 0) {
              return `-${formattedValue}`;
            }
            return formattedValue;
          },
        },
      },
      x: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
  };

  // Adjust y-axis range to ensure symmetric
  if (Math.abs(maxDataValue) > Math.abs(minDataValue)) {
    options.scales.y2.max = symRange;
    options.scales.y2.min = -symRange;
  } else {
    options.scales.y2.max = symRange;
    options.scales.y2.min = -symRange;
  }

  return (
    <ChartWrapper>
      <Line data={lineData} options={options} />
    </ChartWrapper>
  );
};

export default InstagramGraph;
