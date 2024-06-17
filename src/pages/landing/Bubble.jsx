import React from "react";
import { StyledBubble } from "./Bubble.style";

export default function Bubble({ width, height, top, left, time }) {
  return (
    <StyledBubble
      width={width}
      height={height}
      top={top}
      left={left}
      time={time}
    />
  );
}
