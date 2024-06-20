import { useState } from "react";
import Header from "../../components/common/header/Header";
import Sidebar from "../../components/common/sidebar/Sidebar";
import { StyledMainDiv, MainBody, MainContent } from "./Main.style";
import RelatedStock from "./RelatedStock";

export default function MainPage() {
  const [keyword, setKeyWord] = useState("메타몽");

  return (
    <StyledMainDiv>
      <Sidebar />
      <MainContent>
        <MainBody>
          <Header />
          <RelatedStock keyword={keyword}></RelatedStock>
        </MainBody>
      </MainContent>
    </StyledMainDiv>
  );
}
