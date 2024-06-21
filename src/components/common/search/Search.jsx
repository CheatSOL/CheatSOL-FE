import React, { useState, useEffect } from "react";
import {
  StyledHeaderInput,
  StyledHeaderInputDiv,
  StyledSearchIcon,
} from "./Search.style";
import { useSelector, useDispatch } from "react-redux";
import { searchKeyword } from "../../../store/reducers/search";

export default function Search(props) {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.keyword.keyword);
  const [text, setText] = useState(() => {
    return localStorage.getItem("searchKeyword") || keyword;
  });

  useEffect(() => {
    if (keyword) {
      setText(keyword);
      localStorage.setItem("searchKeyword", keyword);
    }
  }, [keyword]);

  const onChangeKeyword = (e) => {
    setText(e.target.value);
  };

  const onkeydownKeyword = (e) => {
    if (e.key === "Enter") {
      if (text === "") return;
      dispatch(searchKeyword(e.target.value));
      localStorage.setItem("searchKeyword", e.target.value);
    }
  };

  return (
    <StyledHeaderInputDiv>
      <StyledHeaderInput
        placeholder="Search"
        width={props.width}
        height={props.height}
        value={text}
        onChange={onChangeKeyword}
        onKeyDown={onkeydownKeyword}
      />
      <StyledSearchIcon />
    </StyledHeaderInputDiv>
  );
}
