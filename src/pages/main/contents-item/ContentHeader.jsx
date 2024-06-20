import React from "react";
import { HeaderContentDiv } from "./ContentHeader.style";

export default function ContentHeader(props) {
  return (
    <HeaderContentDiv>
      <img style={{ width: "60px", height: "60px" }} src={props.imgUrl}></img>
      <span style={{ fontSize: "24px", color: "#2E2E30" }}>
        <strong
          style={{
            fontSize: "30px",
          }}
        >
          "{props.keyword}"
        </strong>
        {props.description}
      </span>
    </HeaderContentDiv>
  );
}
