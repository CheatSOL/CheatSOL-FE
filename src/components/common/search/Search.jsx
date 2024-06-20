import React, { useState } from "react";
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
  console.log(keyword);

  const handleInputChange = (e) => {
    dispatch(searchKeyword(e.target.value));
  };

  return (
    <StyledHeaderInputDiv>
      <StyledHeaderInput
        placeholder="Search"
        width={props.width}
        height={props.height}
        value={keyword} // Redux 상태를 input의 value로 설정
        onChange={handleInputChange} // input 값이 변경될 때 Redux 상태 업데이트
      />
      <StyledSearchIcon />
    </StyledHeaderInputDiv>
  );
}
