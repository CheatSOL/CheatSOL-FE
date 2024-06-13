import React from "react";
import { StyledHeaderDiv, StyledHeaderParentDiv } from "./Header.style";
import Search from "../search/Search";

export default function Header(props) {
  return (
    <StyledHeaderDiv>
      <StyledHeaderParentDiv>
        <Search width="900px" height="50px" />
      </StyledHeaderParentDiv>
    </StyledHeaderDiv>
  );
}
