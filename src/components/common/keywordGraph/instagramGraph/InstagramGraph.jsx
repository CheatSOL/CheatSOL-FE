import React, { useEffect, useState } from "react";
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
import { getInstagramSocialTrend } from "../../../../lib/apis/social";

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
  const [lineData, setLineData] = useState({});
  const [options, setOptions] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(word) {
      try {
        const data = await getInstagramSocialTrend(word);
        setData(data);

        const labels = data.map((item) => item.date);
        const counts = data.map((item) => item.posts);
        const changes = data.map((item, index) => {
          if (index === 0) return 0;
          return item.posts - data[index - 1].posts;
        });

        const maxChange = Math.max(...changes);
        const minChange = Math.min(...changes);
        const symRange = Math.max(Math.abs(maxChange), Math.abs(minChange));

        const updatedOptions = {
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
                drawTicks: true,
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
              min: -symRange,
              max: symRange,
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

        setLineData({
          labels: labels,
          datasets: [
            {
              label: "포스트 수",
              data: counts,
              borderColor: "rgba(214, 41, 118, 1)",
              borderWidth: 3,
              yAxisID: "y1",
            },
            {
              label: "전월 대비 증감",
              data: changes,
              backgroundColor: "rgba(214, 41, 118, 0.2)",
              borderRadius: 20,
              barThickness: 20,
              yAxisID: "y2",
              type: "bar",
            },
          ],
        });

        setOptions(updatedOptions);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    }

    fetchData("카페");
  }, []);

  return data.length > 0 ? (
    <ChartWrapper>
      <Line data={lineData} options={options} />
    </ChartWrapper>
  ) : (
    <div
      style={{
        display: "flex",
        margin: "0px",
        width: "550px",
        height: "300px",
        padding: "10px",
      }}
    ></div>
  );
};

export default InstagramGraph;
