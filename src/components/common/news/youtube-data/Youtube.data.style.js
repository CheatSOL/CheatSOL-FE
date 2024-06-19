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

export const StyledNewsItemParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 450px;
  overflow-y: scroll;
  padding: 20px 0px;

  & .youtube-title {
    font-weight: 400;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledNewsItemDiv = styled.div`
  display: flex;
  gap: 5px;

  width: 100%;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 20px;
  border-radius: 20px;
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

export const StyledVideoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImageDiv = styled.div`
  & img {
    max-width: 180px;
    height: auto;
    border-radius: 10px;
  }
`;
