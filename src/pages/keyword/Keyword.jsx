import React from "react";
import { useRef } from "react";
import RelatedKeyword from "../../components/common/bubble-relatedkeyword/RelatedKeyword";
import Sidebar from "../../components/common/sidebar/Sidebar";
import Header from "../../components/common/header/Header";
import { StyledSocialDiv,StyledSocialInfoDiv } from "../social/Social.style";
import { StyledRelatedKeyword } from "../../components/common/bubble-relatedkeyword/RelatedKeyword.style";

export default function KeywordPage() {
  const scrollRef = useRef(null);

  return (  <StyledSocialDiv>
      <Sidebar />
      <StyledSocialInfoDiv>
        <Header />
        <StyledRelatedKeyword>
          </StyledRelatedKeyword>
      <RelatedKeyword></RelatedKeyword>
      </StyledSocialInfoDiv>
      </StyledSocialDiv>
  )
  ;
}
