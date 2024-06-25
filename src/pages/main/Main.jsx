import Header from "../../components/common/header/Header";
import Sidebar from "../../components/common/sidebar/Sidebar";
import { StyledMainDiv, MainBody, MainContent } from "./Main.style";
import RelatedStockContent from "./RelatedStockContent";
import { useSelector } from "react-redux";
import RelatedKeyword from "./RelatedKeyword";
import SearchContent from "./SearchContent";
import { useState } from "react";
import ScrollToTopButton from "../../components/common/scroll-top-button/Scroll.top.button";
import RelatedSns from "./RelatedSns";
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
          <div style={{display:"flex",flexDirection:"row", gap:"50px" }}>
          <RelatedKeyword keyword={keyword}></RelatedKeyword>
          <RelatedSns keyword={keyword}></RelatedSns>
          </div>
        </MainBody>
      </MainContent>
    </StyledMainDiv>
  );
}
