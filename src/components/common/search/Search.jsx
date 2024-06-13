import React from "react";
import {
  StyledHeaderInput,
  StyledHeaderInputDiv,
  StyledSearchIcon,
} from "./Search.style";

export default function Search(props) {
  return (
    <StyledHeaderInputDiv>
      <StyledHeaderInput
        placeholder="Search"
        width={props.width}
        height={props.height}
      />
      <StyledSearchIcon />
    </StyledHeaderInputDiv>
  );
}
