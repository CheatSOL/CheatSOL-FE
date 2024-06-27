
import styled , {keyframes, css} from "styled-components";


export const StyledKeywordDiv = styled.div`
  background-color: ${(props) => (props.darkMode ? "#333333" : "FAFCFF")};
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;  
  gap: 2vh;
  align-items: center;

`