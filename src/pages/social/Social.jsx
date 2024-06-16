// src/pages/SocialPage.js
import React, { useRef } from "react";
import Header from "../../components/common/header/Header";
import Sidebar from "../../components/common/sidebar/Sidebar";
import GoogleItem from "./Google.item";
import InstagramItem from "./Instagram.item";
import NaverItem from "./NaverItem";
import { StyledSocialDiv, StyledSocialInfoDiv } from "./Social.style";
import YoutubeItem from "./Youtube.item";
import ScrollToTopButton from "../../components/common/scroll-top-button/Scroll.top.button";

export default function SocialPage() {
  const scrollRef = useRef(null);

  return (
    <StyledSocialDiv>
      <Sidebar />
      <StyledSocialInfoDiv ref={scrollRef}>
        <Header />
        <GoogleItem />
        <YoutubeItem />
        <InstagramItem />
        <NaverItem />
      </StyledSocialInfoDiv>
      <ScrollToTopButton scrollRef={scrollRef} />
    </StyledSocialDiv>
  );
}
