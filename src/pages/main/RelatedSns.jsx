import React from "react";

import {
  StyledTitleDiv,
  YoutubeContent,
  InstagramContent,
  StyledMainContentDiv,
} from "./RelatedSns.style";
import ContentHeader from "./contents-item/ContentHeader";
import YoutubeVideo from "./contents-item/YoutubeVideo";
import Instagram from "./contents-item/Instagram";
export default function RelatedSns({ keyword }) {
  return (
    <StyledMainContentDiv>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <ContentHeader
          imgUrl="/assets/images/total-sns.png"
          keyword={keyword}
          description="에 대한 SNS 반응이에요."
          toLink="/main/social"
        />
        <StyledTitleDiv>"{keyword}" 에 대한 유튜브 반응</StyledTitleDiv>
        <YoutubeContent>
          <YoutubeVideo keyword={keyword} />
        </YoutubeContent>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <StyledTitleDiv>"{keyword}" 에 대한 인스타그램 반응</StyledTitleDiv>
        <InstagramContent>
          <Instagram keyword={keyword} />
        </InstagramContent>
      </div>
    </StyledMainContentDiv>
  );
}
