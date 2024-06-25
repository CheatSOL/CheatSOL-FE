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
          display: "flex",
        }}
      >
        <img style={{ width: "60px", height: "60px" }} src={props.imgUrl}></img>
        <span style={{ display: "flex", fontSize: "22px", color: "#2E2E30", alignItems:"center" }}>
          <strong
            style={{
              fontSize: "28px",
              margin: "0 0.3rem",
            }}
          >
            "{props.keyword}"
          </strong>
          <span style={{marginTop:"5px", display:"flex"}}>
          {props.description}
          </span>
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
                width: "38px",
                color: "#00537A",
              }}
            ></HiChevronDoubleRight>
          </GlowIcon>
        </a>
      </div>
    </HeaderContentDiv>
  );
}
