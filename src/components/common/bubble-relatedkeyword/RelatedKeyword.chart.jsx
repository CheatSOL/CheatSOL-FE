import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useQuery } from "react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton"; // Make sure you have this installed
import "react-loading-skeleton/dist/skeleton.css"; // Import CSS for the skeleton
import { StyledInfoIcon } from "./RelatedKeyword.style";
import { useSelector } from "react-redux";

const googleTrendsAPI = async (keyword) => {
  try {
    const response = await axios.get("/api/trends/google", {
      params: {
        keyword: keyword,
        startTime: 30,
      },
    });
    return JSON.parse(response.data);
  } catch (err) {
    return null; // 에러 발생 시 null 반환
  }
};

export default function RelatedKeywordChart(props) {
  console.log(props.darkMode);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [color, setColor] = useState([]);
  const [backcolor, setBackColor] = useState("");

  useEffect(() => {
    if (props.darkMode) {
      setColor(["rgba(0, 170, 255, 0.9)", "rgba(31, 255, 154, 0.9)"]);
      setBackColor("#282828");
    } else {
      setColor(["rgba(26, 175, 255, 0.9)", "rgba(46, 233, 183, 0.9)"]);
      setBackColor("transparent");
    }
    // 필요한 다른 로직 수행
  }, [props.darkMode]);

  const {
    data: GraphData1,
    isLoading: isLoadingGraph1,
    error: errorGraph1,
  } = useQuery(
    ["GoogleTrendsData1", props.keyword],
    () => googleTrendsAPI(props.keyword),
    {
      staleTime: Infinity,
    }
  );

  const {
    data: GraphData2,
    isLoading: isLoadingGraph2,
    error: errorGraph2,
  } = useQuery(
    ["GoogleTrendsData2", props.related],
    () => googleTrendsAPI(props.related),
    {
      staleTime: Infinity,
    }
  );

  if (errorGraph1 || errorGraph2) {
    return (
      <div>
        Error loading related keywords:{" "}
        {errorGraph1?.message || errorGraph2?.message}
      </div>
    );
  }

  if (!GraphData1 || !GraphData2) {
    return (
      <div style={{ margin: "0.8rem", padding: "10px", borderRadius: "10px" }}>
        <Skeleton width={580} height={270} />
        <Skeleton width={580} height={270} />
      </div>
    );
  }

  const data1 = GraphData1?.default?.timelineData || [];
  const data2 = GraphData2?.default?.timelineData || [];
  const categories = [];
  const value1 = [];
  const value2 = [];

  data1.forEach((e) => {
    const date = new Date(e.formattedTime);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    categories.push(`${month}/${day}`);
    value1.push(e.value[0]);
  });

  data2.forEach((e) => {
    value2.push(e.value[0]);
  });

  const options = {
    chart: {
      type: "line",
      height: 350,
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1500,
        animateGradually: {
          enabled: true,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 150,
        },
      },
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false,
          customIcons: [],
        },
      },
      background: backcolor,
    },
    theme: {
      mode: darkMode ? "dark" : "light",
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: `지난 30일 간의 ${props.keyword} 및 ${props.related} 구글 검색량 비교`,
      align: "center",
    },
    xaxis: {
      categories: categories,
      labels: {
        show: false,
      },
    },
    colors: color,
  };

  const series = [
    {
      name: props.keyword,
      data: value1,
    },
    {
      name: props.related,
      data: value2,
    },
  ];

  return (
    <div style={{ zIndex: -1, position: "relative" }}>
      <StyledInfoIcon darkMode={darkMode}>
        <img
          id="tooltip"
          src="/assets/images/question_mark.png"
          width={"21px"}
        ></img>
        <div id="tag">
          Google에서 한 달 동안의 검색된 추이를 보여줍니다. 가장 많이 검색된
          날을 100으로 고정하여 상대값을 보여주며, 연관키워드 역시 한 달 중
          최고치를 기준으로 상대값을 보여줍니다.
        </div>
      </StyledInfoIcon>
      <Chart
        key={`${props.keyword}-${props.related}`} // 키를 이용해 컴포넌트 리렌더링
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
}
