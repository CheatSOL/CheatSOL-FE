import React, { useState, useEffect } from "react";
import { StyledMainContentDiv } from "./Main.style";
import ContentHeader from "./contents-item/ContentHeader";
import NormalGraph from "../../components/common/graphs/normalGraph/NormalGraph";
import { Contents } from "./contents-item/Contents.style";

import { useQuery } from "react-query";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const fetchStockData = async (keyword) => {
  console.log(`Fetching data for keyword: ${keyword}`);
  const response = await axios.get("/api/trends", {
    params: {
      keyword: keyword,
    },
  });
  return JSON.parse(response.data);
};

export default function SearchContent({ keyword }) {
  const [percent, setPercent] = useState(0);
  const [currentWeekData, setCurrentWeekData] = useState([]);
  const [currentWeekDates, setCurrentWeekDates] = useState([]);

  const {
    data: stockData,
    isLoading,
    error,
  } = useQuery(["stockData", keyword], () => fetchStockData(keyword), {
    staleTime: Infinity,
    enabled: !!keyword,
  });

  useEffect(() => {
    if (stockData) {
      const dayOfData = stockData.default.timelineData.sort((a, b) => {
        return b.time - a.time;
      });

      let currentWeek = 0;
      let lastWeek = 0;

      const currentWeekValues = dayOfData
        .slice(0, 7)
        .reverse()
        .map((elem) => {
          currentWeek += parseFloat(elem.formattedValue);
          return parseFloat(elem.formattedValue);
        });

      const currentWeekTimes = dayOfData
        .slice(0, 7)
        .reverse()
        .map((elem) => {
          console.log("dfs", elem.formattedTime);
          return elem.formattedTime;
        });

      dayOfData
        .slice(7, 14)
        .reverse()
        .map((elem) => {
          lastWeek += parseFloat(elem.formattedValue);
        });

      const calculatedPercent = ((currentWeek - lastWeek) / lastWeek) * 100;

      setPercent(Math.round(calculatedPercent * 100) / 100);
      setCurrentWeekData(currentWeekValues);
      setCurrentWeekDates(currentWeekTimes);
    }
  }, [stockData]);

  if (error) return <div>Error loading data</div>;

  return (
    <StyledMainContentDiv>
      <ContentHeader
        imgUrl="/assets/images/search.svg"
        keyword={keyword}
        description={
          !isLoading ? (
            <>
              {percent > 0 && (
                <>
                  <p>
                    의 검색량이 전 주에 비해
                    <strong
                      style={{
                        fontSize: "30px",
                        margin: "0 0.5rem",
                      }}
                    >
                      {Math.abs(Math.round(percent))}%
                    </strong>
                  </p>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "-0.5rem 0.5rem",
                    }}
                    src="/assets/images/increase.svg"
                    alt="increase"
                  />
                  증가했어요.
                </>
              )}
              {percent < 0 && (
                <>
                  <p>
                    의 검색량이 전 주에 비해
                    <strong
                      style={{
                        fontSize: "30px",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {Math.abs(percent)}%
                    </strong>
                  </p>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "-0.5rem 0.5rem",
                    }}
                    src="/assets/images/decrease.svg"
                    alt="decrease"
                  />
                  감소했어요.
                </>
              )}
              {percent === 0 && <>의 이번주 검색량이 전 주와 동일해요.</>}
            </>
          ) : (
            <>
              <p>의 검색량을 불러오는 중이에요...</p>
            </>
          )
        }
        toLink="/main/social"
      />
      <Contents>
        {isLoading ? (
          <div width="600px" height="400px">
            <ClipLoader color="#43d2ff"></ClipLoader>
          </div>
        ) : (
          <NormalGraph
            data={currentWeekData}
            date={currentWeekDates}
            color={[66, 133, 244]}
            lineSpeed={0.05}
            barSpeed={0.05}
            width={600}
          />
        )}
      </Contents>
    </StyledMainContentDiv>
  );
}
