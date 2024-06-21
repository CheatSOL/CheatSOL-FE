import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchKeyword } from "../../store/reducers/search";
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
import { useNavigate } from "react-router-dom";

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
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.keyword.keyword);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const keywords = [
    "신한투자증권",
    "신한지주",
    "투자신한",
    "신한투자증권",
    "신한투자증권",
  ];

  const onChangeText = (e) => {
    const { value } = e.target;
    setText(value);
    if (e.target.value.length > 0) setFocus(true);
  };

  const onClickKeyword = (text) => () => {
    setText(text);
    inputRef.current.focus();
  };

  const onKeyDownText = (e) => {
    if (e.key === "Enter") {
      setText("");
      setFocus(false);
      dispatch(searchKeyword(text));
      navigate("/main");
    }
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <StyledSearchDiv>
      <StyledSearchLogoImgDiv>
        <img src="/assets/images/logo.png" alt="Logo" />
      </StyledSearchLogoImgDiv>
      <StyledSearchInputDiv>
        <StyledSearchInput
          type="text"
          value={text}
          placeholder={focus ? "" : "Search"}
          onChange={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          focus={focus}
          onKeyDown={onKeyDownText}
          ref={inputRef}
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
