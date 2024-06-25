import React, { useRef, useState, useEffect } from "react";
import InstagramGraph from "../../components/common/keywordGraph/instagramGraph/InstagramGraph";
import InstagramData from "../../components/common/news/instagram-data/instagram.data";
import InstagramHotHashTags from "../../components/common/keywordGraph/instagramGraph/InstagramHotHashTags";
import { useSelector } from "react-redux";
import {
  StyledSocialInstagramDiv,
  StyledInstagramItemDiv,
  StyledInstagramHeaderDiv,
  StyledInstagramChartNewsDiv,
} from "./Instagram.style";
import { getInstagramSocialTrend } from "../../lib/apis/social";

export default function InstagramItem() {
  const [lineData, setLineData] = useState({});
  const [options, setOptions] = useState({});
  const [data, setData] = useState([]);
  const [topTags, setTopTags] = useState([]);
  const [tagInfo, setTagInfo] = useState([]);
  const keyword = useSelector((state) => state.keyword.keyword);

  useEffect(() => {
    async function fetchData(word) {
      try {
        const instagramInfo = await getInstagramSocialTrend(word);
        if (!instagramInfo) return;
        console.log("instagram", instagramInfo);
        setData(instagramInfo.trendData);
        setTopTags(instagramInfo.topTags);
        setTagInfo(instagramInfo.tagInfo);

        const labels = instagramInfo.trendData.map((item) => item.date);
        const counts = instagramInfo.trendData.map((item) => item.posts);
        const changes = instagramInfo.trendData.map((item, index) => {
          if (index === 0) return 0;
          return item.posts - instagramInfo.trendData[index - 1].posts;
        });

        const maxDataValue = Math.max(...changes);
        const minDataValue = Math.min(...changes);
        const range = Math.max(Math.abs(maxDataValue), Math.abs(minDataValue));
        const symRange = range;

        const formatYAxisLabel = (value) => {
          if (Math.abs(value) >= 1000000) {
            return (Math.abs(value) / 1000000).toFixed(1) + "M";
          } else if (Math.abs(value) >= 1000) {
            return (Math.abs(value) / 1000).toFixed(0) + "K";
          }
          return value;
        };

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
    fetchData(keyword);
  }, [keyword]);

  const scrollRef = useRef(null);
  const [isGraphVisible, setIsGraphVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsGraphVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    observerRef.current.observe(scrollRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <StyledSocialInstagramDiv>
      <StyledInstagramItemDiv>
        <div>
          <img src="/assets/images/instagram-logo.png" alt="Instagram Logo" />
        </div>
        <div></div>
      </StyledInstagramItemDiv>
      <StyledInstagramChartNewsDiv ref={scrollRef}>
        <div style={{ marginTop: "18px" }}>
          <div>
            <span style={{ fontSize: "16px" }}>
              <strong>"{keyword}"</strong>이 이만큼 언급됐어요
            </span>
            {isGraphVisible && data ? (
              <InstagramGraph
                data={data.length}
                lineData={lineData}
                options={options}
              />
            ) : (
              <InstagramGraph></InstagramGraph>
            )}
          </div>
          <div>
            <span style={{ fontSize: "18px" }}>
              <strong>"{keyword}"</strong>과 함께 반응이 좋은 해시태그
            </span>
            <InstagramHotHashTags topTags={topTags} />
          </div>
        </div>
        <InstagramData tagInfo={tagInfo} />
      </StyledInstagramChartNewsDiv>
    </StyledSocialInstagramDiv>
  );
}
