import React, { useRef, useState, useEffect } from "react";
import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import GoogleNews from "../../components/common/news/google-news/Google.news";
import GoogleGraph from "../../components/common/keywordGraph/googleGraph/GoogleGraph";
import {
  StyledSocialGoogleDiv,
  StyledGoogleItemDiv,
  StyledGoogleHeaderDiv,
  StyledGoogleChartNewsDiv,
  StyledLoadingDiv,
} from "./Google.style";
import axios from "axios";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const fetchGoogleStockData = async (keyword, startTime) => {
  console.log("startTime : ", startTime);
  const response = await axios.get("/api/trends", {
    params: {
      keyword: keyword,
      startTime: startTime,
    },
  });
  return JSON.parse(response.data);
};

export default function GoogleItem() {
  const scrollRef = useRef(null);
  const [isGraphVisible, setIsGraphVisible] = useState(false);
  const keyword = useSelector((state) => state.keyword.keyword);
  const [startTime, setStartTime] = useState(7);
  const { data, isLoading, error } = useQuery(
    ["googleStockData", keyword, startTime],
    () =>
      startTime
        ? fetchGoogleStockData(keyword, startTime)
        : Promise.resolve(null),
    {
      staleTime: Infinity,
      enabled: !!keyword,
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsGraphVisible(true); // Set visibility state to true if intersecting
            observer.disconnect(); // Disconnect observer once graph is visible
          }
        });
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    observer.observe(scrollRef.current);

    return () => {
      observer.disconnect(); // Cleanup function to disconnect observer on unmount
    };
  }, []);

  const handlePeriodChange = (selectedPeriod) => {
    let t = "";
    if (selectedPeriod.includes("일")) {
      let index = selectedPeriod.indexOf("일");
      t = selectedPeriod.slice(0, index);
    } else {
      let index = selectedPeriod.indexOf("일");
      t = Number(selectedPeriod.slice(0, index)) * 365;
    }
    setStartTime(t);
  };

  return (
    <StyledSocialGoogleDiv>
      <StyledGoogleItemDiv>
        <div>
          <img src="/assets/images/google.png" alt="Google" />
        </div>
        <StyledGoogleHeaderDiv>
          <PeriodSelectBar handlePeriodChange={handlePeriodChange} />
          {/* <CountrySelectBar /> */}
        </StyledGoogleHeaderDiv>
        <div></div>
      </StyledGoogleItemDiv>
      <StyledGoogleChartNewsDiv ref={scrollRef}>
        <div>
          <span>
            <strong>{`"${keyword}"`}</strong>이 이만큼 언급됐어요
          </span>
          {isGraphVisible ? (
            isLoading ? (
              <StyledLoadingDiv>
                <ClipLoader color={"#43D2FF"} loading={true} />
              </StyledLoadingDiv>
            ) : (
              <GoogleGraph
                data={data?.default?.timelineData || []} // 빈 배열로 전달
              />
            )
          ) : (
            <div
              style={{ marginTop: "20px", width: "600px", height: "400px" }}
            ></div>
          )}
        </div>
        <GoogleNews />
      </StyledGoogleChartNewsDiv>
    </StyledSocialGoogleDiv>
  );
}
