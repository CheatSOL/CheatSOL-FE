import styled from "styled-components";

export const StyledNewsDiv = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  padding-top: 0px;
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
  height: 350px;
  overflow-y: scroll;
`;

export const StyledNewsItemDiv = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-bottom: 20px;
`;

export const StyledNewsItemHeaderDiv = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);

  & span:nth-child(1) {
    margin-right: 10px;
  }
  & span:nth-child(2) {
    margin-left: 10px;
  }
`;
