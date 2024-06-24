import Header from "../../components/common/header/Header";
import Sidebar from "../../components/common/sidebar/Sidebar";
import { StyledMainDiv, MainBody, MainContent } from "./Main.style";
import RelatedStockContent from "./RelatedStockContent";
import { useSelector } from "react-redux";
import SearchContent from "./SearchContent";
import { useState } from "react";
import ScrollToTopButton from "../../components/common/scroll-top-button/Scroll.top.button";

export default function MainPage() {
  const keyword = useSelector((state) => state.keyword.keyword);

  return (
    <StyledMainDiv>
      <Sidebar />
      <MainContent>
        <MainBody>
          <Header />
          <RelatedStockContent keyword={keyword}></RelatedStockContent>
          <SearchContent keyword={keyword}></SearchContent>
        </MainBody>
      </MainContent>
    </StyledMainDiv>
  );
}
