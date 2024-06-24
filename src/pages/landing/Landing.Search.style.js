import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const StyledLandingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const StyledSearchDiv = styled.div`
  width:88%;
  height: 100%;
  padding: 30px;
  border-radius: 70px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.36);
  box-shadow: 0px 0px 10px 10px rgba(49, 136, 164, 0.09);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  backdrop-filter: blur(5px); /* 또는 filter: blur(8px); */
`;

export const StyledSearchLogoImgDiv = styled.div`
  opacity: 1;
  & img {
    opacity: 1;
  }
  z-index: 1;
  padding: 10px;
`;

export const StyledSearchInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  opacity: 1;
`;

export const StyledSearchInput = styled.input`
  width: 80%;
  height: 58px;
  line-height: 2.8rem;
  border-radius: 50px;
  border: 2px solid rgba(255,255,255, 0.1);
  text-align: center;
  opacity: 1;
  font-size: 17px;
  background-color: rgba(255,255,255,0.4);

  &::placeholder {
    padding-left: 20px;
  }
`;

export const StyledSearchIcon = styled(IoSearchOutline)`
  position: absolute;
  font-size: 1.4rem !important;
  color: rgba(0, 0, 0, 0.5);
  right: 15%;
  top: 8%;
  display: ${(props) => (props.visible ? "block" : "none")};
  cursor: pointer;
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
  background-color: rgba(255, 255, 255, 0.55);
  border: 2px solid rgba(255,255,255, 0.1);
  border-radius: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.04);
  margin: 5px 20px;
  cursor: pointer;
`;

export const HighlightedText = styled.span`
  color: #025592;
`;
