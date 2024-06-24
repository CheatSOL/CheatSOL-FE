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
  StyledLandingDiv,
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

  const handleClick = () => {
    dispatch(searchKeyword(text));
    navigate("/main");
  }

  return (
    <StyledLandingDiv>
      {/* <StyledCenterDiv> */}
      <StyledSearchDiv>
      <StyledSearchLogoImgDiv>
        <img src="/assets/images/logo4 (2).png" alt="Logo" />
      </StyledSearchLogoImgDiv>
        <StyledSearchInputDiv>
          <StyledSearchInput
            type="text"
            value={text}
            placeholder={focus ? "" : "관심있는 키워드가 입력하세요."}
            onChange={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            focus={focus}
            onKeyDown={onKeyDownText}
            ref={inputRef}
          />
          <StyledSearchIcon visible={true} onClick={handleClick}/>
          <StyledKeywordsDiv>
          <StyledKeywordsParentDiv>
            {keywords.map((keyword, index) => (
              <StyledKeyword key={index} onClick={onClickKeyword(keyword)}>
                <Highlight text={keyword} highlight="신한" />
              </StyledKeyword>
            ))}
          </StyledKeywordsParentDiv>
        </StyledKeywordsDiv>
        </StyledSearchInputDiv>      
    </StyledSearchDiv>
    {/* </StyledCenterDiv> */}
  </StyledLandingDiv>
  );
}
