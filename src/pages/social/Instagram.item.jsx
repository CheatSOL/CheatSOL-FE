import React, { useRef, useState, useEffect } from "react";
import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import InstagramGraph from "../../components/common/keywordGraph/instagramGraph/InstagramGraph";
import InstagramData from "../../components/common/news/instagram-data/instagram.data";
import InstagramHotHashTags from "../../components/common/keywordGraph/instagramGraph/InstagramHotHashTags";
import {
  StyledSocialInstagramDiv,
  StyledInstagramItemDiv,
  StyledInstagramHeaderDiv,
  StyledInstagramChartNewsDiv,
} from "./Instagram.style";

export default function InstagramItem() {
  const scrollRef = useRef(null);
  const [isGraphVisible, setIsGraphVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsGraphVisible(true); // When element is in view, set state to true
          } else {
            setIsGraphVisible(false); // When element is out of view, set state to false
          }
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
    <StyledSocialInstagramDiv>
      <StyledInstagramItemDiv>
        <div>
          <img src="/assets/images/instagram-logo.png" />
        </div>

        <div></div>
      </StyledInstagramItemDiv>
      <StyledInstagramChartNewsDiv ref={scrollRef}>
        <div style={{ marginTop: "18px" }}>
          <div>
            <span style={{ fontSize: "16px" }}>
              <strong>"불닭"</strong>이 이만큼 언급됐어요
            </span>
            {isGraphVisible && <InstagramGraph />} {/* Conditional rendering */}
          </div>
          <div>
            <span style={{ fontSize: "18px" }}>
              <strong>"불닭"</strong>과 함께 반응이 좋은 해시태그
            </span>
            <InstagramHotHashTags />
          </div>
        </div>

        <InstagramData />
      </StyledInstagramChartNewsDiv>
    </StyledSocialInstagramDiv>
  );
}
