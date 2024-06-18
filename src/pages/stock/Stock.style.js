import styled from "styled-components";

export const StyledStockDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const StyledStockHeaderDiv = styled.div`
  margin-left: 50px;
  font-size: 18px;

  & strong {
    font-size: 22px;
    margin-right: 5px;
  }

  & span:nth-of-type(1) {
    color: #43d2ff;
  }
  & span:nth-of-type(2) {
    color: #ec4b36;
  }
`;

export const StyledStockBodyDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBodyCompanyDiv = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: 430px;
  overflow-y: scroll;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledLoadingDiv = styled.div`
  width: 650px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
