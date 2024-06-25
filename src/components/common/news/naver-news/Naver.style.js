import styled, { keyframes, css } from "styled-components";

export const StyledNewsDiv = styled.div`
  width: calc(100% - 600px);
  height: 500px;
  background-color: ${(props) => (props.darkMode ? "" : "white")};
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
  color: ${(props) => (props.darkMode ? "white" : "rgba(0, 0, 0, 0.7)")};
`;
export const StyledBlurDiv = styled.div`
  width: calc(25% - 30px);
  height: 70px;
  position: absolute;
  bottom: 30px;
  background: ${(props) =>
    props.darkMode
      ? `linear-gradient(to top, transparent, 0%, #444547, 50%, transparent)`
      : `linear-gradient(to top, transparent, 0%, white, 50%, transparent)`};
`;

export const StyledNewsItemPatentDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const StyledNewsItemDiv = styled.div`
  font-size: ${(props) => props.Hfontsize || "16px"};
  width: 100%;
  background-color: ${(props) =>
    props.darkMode ? "rgb(65, 65, 65);" : "rgba(0, 0, 0, 0.02)"};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-bottom: 20px;
  color: ${(props) => (props.darkMode ? "white" : "rgba(0, 0, 0, 0.7)")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const StyledNewsItemHeaderDiv = styled.div`
  font-size: 0.7rem;
  margin-bottom: 10px;
  color: ${(props) => (props.darkMode ? "white" : "rgba(0, 0, 0, 0.7)")};
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
  margin-top: 10px;
  color: ${(props) => (props.darkMode ? "white" : "rgba(0, 0, 0, 0.7)")};
`;

export const StyledContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background-color: white;
  margin-bottom: 5px;
`;
