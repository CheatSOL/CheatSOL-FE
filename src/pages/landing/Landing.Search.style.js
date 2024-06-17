import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const StyledSearchDiv = styled.div`
  width: 700px;
  height: auto;
  padding-bottom: 30px;
  border-radius: 30px;
  background-color: white;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.12);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSearchLogoImgDiv = styled.div`
  opacity: 1;
  & img {
    opacity: 1;
  }
`;

export const StyledSearchInputDiv = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  opacity: 1;
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  line-height: 2.8rem;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 20px;
  opacity: 1;
  font-size: 17px;

  &::placeholder {
    padding-left: 20px;
  }
`;

export const StyledSearchIcon = styled(IoSearchOutline)`
  position: absolute;
  font-size: 1.4rem !important;
  color: rgba(0, 0, 0, 0.5);
  left: 10px;
  top: 12px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export const StyledKeywordsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  opacity: 1;

  & > div:first-child {
    margin-bottom: 10px;
  }
`;
export const StyledKeywordsParentDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

export const StyledKeyword = styled.span`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 5px 20px;
  cursor: pointer;
`;

export const HighlightedText = styled.span`
  color: #025592;
`;
