import styled from "styled-components";

export const StyledSocialGoogleDiv = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 30px;
`;

export const StyledGoogleItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledGoogleHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & > nav:first-child {
    margin-right: 20px;
  }
`;

export const StyledGoogleChartNewsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div > span:first-child {
    font-size: 23px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
