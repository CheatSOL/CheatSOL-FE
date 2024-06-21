import React, { useRef, useState, useEffect } from "react";
import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import YoutubeData from "../../components/common/news/youtube-data/Youtube.data";
import YoutubeGraph from "../../components/common/keywordGraph/youtubeGraph/YoutubeGraph";
import {
  StyledSocialYoutubeDiv,
  StyledYoutubeItemDiv,
  StyledYoutubeHeaderDiv,
  StyledYoutubeChartNewsDiv,
} from "./Youtube.style";

export default function YoutubeItem() {
  const scrollRef = useRef(null);
  const [isGraphVisible, setIsGraphVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
    <StyledSocialYoutubeDiv>
      <StyledYoutubeItemDiv>
        <div>
          <img src="/assets/images/youtube.png" alt="Youtube" />
        </div>
        <StyledYoutubeHeaderDiv>
          <PeriodSelectBar />
          <CountrySelectBar />
        </StyledYoutubeHeaderDiv>
        <div></div>
      </StyledYoutubeItemDiv>
      <StyledYoutubeChartNewsDiv ref={scrollRef}>
        <div>
          <span>
            <strong>"불닭"</strong>이 이만큼 언급됐어요
          </span>
          {isGraphVisible ? (
            <YoutubeGraph />
          ) : (
            <div
              style={{ marginTop: "20px", width: "600px", height: "400px" }}
            ></div>
          )}
        </div>
        <YoutubeData />
      </StyledYoutubeChartNewsDiv>
    </StyledSocialYoutubeDiv>
  );
}
