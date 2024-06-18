import React from "react";
import { useRef } from "react";
import RelatedKeyword from "../../components/common/bubble-relatedkeyword/RelatedKeyword";
import Sidebar from "../../components/common/sidebar/Sidebar";
import Header from "../../components/common/header/Header";
import { StyledSocialDiv,StyledSocialInfoDiv } from "../social/Social.style";


export default function KeywordPage() {
  const scrollRef = useRef(null);

  return (  <StyledSocialDiv>
      <Sidebar />
      <StyledSocialInfoDiv ref={scrollRef}>
        <Header />
      <RelatedKeyword></RelatedKeyword>
      </StyledSocialInfoDiv>
      </StyledSocialDiv>
  )
  ;
}
