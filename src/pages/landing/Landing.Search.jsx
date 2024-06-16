import { useState } from "react";
import {
  StyledSearchDiv,
  StyledSearchInputDiv,
  StyledSearchInput,
  StyledSearchLogoImgDiv,
  StyledSearchIcon,
  StyledKeywordsParentDiv,
  StyledKeywordsDiv,
  StyledKeyword,
  HighlightedText,
} from "./Landing.Search.style";

const Highlight = ({ text, highlight }) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <HighlightedText key={index}>{part}</HighlightedText>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default function LandingSearch() {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);

  const keywords = [
    "신한투자증권",
    "신한지주",
    "투자신한",
    "신한투자증권",
    "신한투자증권",
  ];

  const onChangeText = (e) => {
    setText(e.target.value);
    if (e.target.value.length > 0) setFocus(true);
    else setFocus(false);
  };

  const onClickKeyword = (text) => () => {
    setText(text);
  };

  return (
    <StyledSearchDiv>
      <StyledSearchLogoImgDiv>
        <img src="/assets/images/logo.png" />
      </StyledSearchLogoImgDiv>
      <StyledSearchInputDiv>
        <StyledSearchInput
          type="text"
          placeholder="Search"
          value={text}
          onChange={onChangeText}
          focus={focus}
        />
        <StyledSearchIcon visible={!focus && text.length === 0} />
      </StyledSearchInputDiv>
      <StyledKeywordsDiv>
        <div>연관 검색어</div>
        <StyledKeywordsParentDiv>
          {keywords.map((keyword, index) => (
            <StyledKeyword key={index} onClick={onClickKeyword(keyword)}>
              <Highlight text={keyword} highlight="신한" />
            </StyledKeyword>
          ))}
        </StyledKeywordsParentDiv>
      </StyledKeywordsDiv>
    </StyledSearchDiv>
  );
}
