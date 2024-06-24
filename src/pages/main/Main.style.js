import styled from "styled-components";

export const StyledMainDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
`;

export const MainBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`;

export const MainContent = styled.div`
  display: block;
  flex: 1;
  width: 100vw;
  height: auto;
  overflow-y: scroll;
`;

export const StyledMainContentDiv = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 30px;
  overflow-x: auto;
  white-space: nowrap;
`;
