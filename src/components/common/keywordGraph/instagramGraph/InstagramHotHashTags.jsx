import React, { useState } from "react";
import {
  StyledHotHashTag,
  generateRandomGradient,
} from "./InstagramHotHashTag.style";

export default function InstagramHotHashTags() {
  const [tags, setTags] = useState(["장원영", "스트레이키즈", "차은우"]);

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        gap: "10px",
      }}
    >
      {tags.map((item, index) => {
        const gradient = generateRandomGradient();
        return (
          <StyledHotHashTag key={index} gradient={gradient}>
            # {item}
          </StyledHotHashTag>
        );
      })}
    </div>
  );
}
