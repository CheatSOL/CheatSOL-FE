import React, { useState } from "react";
import {
  StyledHeaderDiv,
  StyledHeaderInput,
  StyledHeaderParentDiv,
  StyledHeaderInputDiv,
  StyledSearchIcon,
} from "./Header.style";

export default function Header(props) {
  return (
    <StyledHeaderDiv>
      <StyledHeaderParentDiv>
        <StyledHeaderInputDiv>
          <StyledHeaderInput
            placeholder="Search"
            width={props.width}
            height={props.height}
          />
          <StyledSearchIcon />
        </StyledHeaderInputDiv>
      </StyledHeaderParentDiv>
    </StyledHeaderDiv>
  );
}
