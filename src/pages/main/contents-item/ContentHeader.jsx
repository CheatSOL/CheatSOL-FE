import React from "react";
import { HeaderContentDiv, GlowIcon } from "./ContentHeader.style";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function ContentHeader(props) {
  const location = useLocation();
  return (
    <HeaderContentDiv>
      <div
        style={{
          textAlign: "top",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img style={{ width: "60px", height: "60px" }} src={props.imgUrl}></img>
        <span style={{ display: "flex", fontSize: "24px", color: "#2E2E30" }}>
          <strong
            style={{
              fontSize: "30px",
              margin: "0 0.5rem",
            }}
          >
            "{props.keyword}"
          </strong>
          {props.description}
        </span>
      </div>
      <div
        style={{
          textAlign: "top",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <a href={props.toLink}>
          <GlowIcon>
            <HiChevronDoubleRight
              style={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                color: "#00537A",
              }}
            ></HiChevronDoubleRight>
          </GlowIcon>
        </a>
      </div>
    </HeaderContentDiv>
  );
}
