import styled from "styled-components";

export const StyledHeaderChart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  & > span {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 8px 80px;
    border-radius: 50px;
    background-color: white;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledSearchSpan = styled.span`
  color: #ec4b36;
  font-weight: bold;
`;
export const StyledPriceSpan = styled.span`
  color: #43d2ff;
  font-weight: bold;
`;
