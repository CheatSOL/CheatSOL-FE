import styled, {keyframes,css}from "styled-components";


export const StyledNewsDiv = styled.div`   
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "400px"};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

export const StyledNewsKeyword = styled.div`
  width: 100%;
  font-size: 23px;
  text-align: start;
  margin-bottom: 20px;
  & span {
    font-weight: bold;
  }
`;

export const StyledNewsItemPatentDiv = styled.div`
  height: 450px;
  overflow-y: ${(props) => props.isscroll || "scroll"};
`;

export const StyledNewsItemDiv = styled.div`
  font-size: ${(props) => props.Hfontsize || "16px"};
  width: 100%;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-bottom: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const StyledNewsItemHeaderDiv = styled.div`
  font-size: 0.7rem;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;

  & span:nth-child(2) {
    margin: 0px 10px;
  }
  & span:nth-child(3) {
    margin-left: 10px;
  }
`;

export const StyledNewsItemContentDiv = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-size: ${(props) => props.Cfontsize || "14px"};
  margin-top: 10px;
`;
