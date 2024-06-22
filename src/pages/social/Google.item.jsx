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
} from "./Google.style";

export default function GoogleItem() {
  const scrollRef = useRef(null);
  const [isGraphVisible, setIsGraphVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          setIsGraphVisible(entry.isIntersecting); // Toggle visibility state based on scroll event
        });
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    observer.observe(scrollRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <StyledSocialGoogleDiv>
      <StyledGoogleItemDiv>
        <div>
          <img src="/assets/images/google.png" alt="Google" />
        </div>
        <StyledGoogleHeaderDiv>
          <PeriodSelectBar />
          <CountrySelectBar />
        </StyledGoogleHeaderDiv>
        <div></div>
      </StyledGoogleItemDiv>
      <StyledGoogleChartNewsDiv ref={scrollRef}>
        <div>
          <span>
            <strong>"불닭"</strong>이 이만큼 언급됐어요
          </span>
          {isGraphVisible ? (
            <GoogleGraph />
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
