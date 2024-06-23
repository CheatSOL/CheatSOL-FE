import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const StyledLandingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledCenterDiv = styled.div`
  position: relative; /* 중앙에 위치한 자식 요소를 relative로 설정 */
  height: 40vh; /* 원하는 높이 설정 */
  display: flex; /* Flexbox로 자식 요소들 설정 */
  flex-direction: column;
  justify-content: flex-end; /* 자식 요소를 수평 중앙 정렬 */
  align-items: center; /* 자식 요소를 수직 중앙 정렬 */
`;

export const StyledSearchDiv = styled.div`
  flex-grow: 4;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  border-radius: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0px 0px 10px 10px rgba(49, 136, 164, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  backdrop-filter: blur(5px); /* 또는 filter: blur(8px); */
`;

export const StyledSearchLogoImgDiv = styled.div`
  flex-grow: 1;
  opacity: 1;
  & img {
    opacity: 1;
    position: relative;
    top: 29%;
  }
  z-index: 1;
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
