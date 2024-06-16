import styled from "styled-components";

export const StyledNewsItemParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 450px;
  overflow-y: scroll;
  padding: 20px 0px;
  padding-top: 0px;
`;

export const StyledNewsItemDiv = styled.div`
  display: flex;
  gap: 20px;

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

  & p {
    font-size: 0.8rem;
  }
  & #hashtags {
    margin-top: 10px;
    font-weight: 800;
  }
  & section > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledNewsItemHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.7rem;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);

  & span:nth-child(1) {
    margin-right: 10px;
  }
  & span:nth-child(2) {
    margin-left: 10px;
  }
  & img {
    width: 15px;
  }
`;

export const StyledImageDiv = styled.div`
  & img {
    height: 200px;
    border-radius: 15px;
  }
`;
