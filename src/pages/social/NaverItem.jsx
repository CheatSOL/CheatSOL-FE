import React, { useRef, useState, useEffect } from "react";
import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import GoogleNews from "../../components/common/news/google-news/Google.news";
import NaverNews from "../../components/common/news/naver-news/Naver.news";
import NaverGraph from "../../components/common/keywordGraph/naverGraph/NaverGraph";
import NaverGroups from "../../components/common/keywordGraph/naverGraph/NaverGroups";
import {
  StyledSocialNaverDiv,
  StyledNaverItemDiv,
  StyledNaverHeaderDiv,
  StyledNaverChartNewsDiv,
} from "./NaverItem.style";

export default function NaverItem() {
  const scrollRef = useRef(null);
  const [isGraphVisible, setIsGraphVisible] = useState(false);

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
  return (
    <StyledSocialNaverDiv>
      <StyledNaverItemDiv>
        <div>
          <img src="/assets/images/naver.png" />
        </div>
        <StyledNaverHeaderDiv>
          <PeriodSelectBar />
          <CountrySelectBar />
        </StyledNaverHeaderDiv>
        <div></div>
      </StyledNaverItemDiv>
      <StyledNaverChartNewsDiv ref={scrollRef}>
        <div>
          <span>
            <strong>"불닭"</strong>이 이만큼 언급됐어요
          </span>
          {isGraphVisible ? (
            <NaverGraph />
          ) : (
            <div
              style={{ marginTop: "20px", width: "600px", height: "400px" }}
            ></div>
          )}{" "}
          {/* Conditional rendering */}
          <NaverGroups />
        </div>
        <NaverNews />
      </StyledNaverChartNewsDiv>
    </StyledSocialNaverDiv>
  );
}
