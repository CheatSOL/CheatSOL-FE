import styled from "styled-components";

export const StyledNewsDiv = styled.div`
  width: calc(100% - 600px);
  height: 470px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  padding-top: 0px;
  position: relative;
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
export const StyledBlurDiv = styled.div`
  width: calc(100% - 30px);
  height: 70px;
  position: absolute;
  bottom: 0px;
  background: linear-gradient(to top, transparent, 0%, white, 50%, transparent);
`;
export const StyledNewsItemPatentDiv = styled.div`
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 0px;
`;

export const StyledNewsItemDiv = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 10px;

  border-radius: 10px;
  margin-bottom: 10px;
  padding-bottom: 20px;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const StyledNewsItemHeaderDiv = styled.div`
  font-size: 0.7rem;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);

  & span:nth-child(1) {
    margin-right: 10px;
  }
  & span:nth-child(2) {
    margin-left: 10px;
  }
`;
