// Bubble.style.js
import styled from "styled-components";

export const StyledBubbleDiv = styled.div`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  opacity: ${(props) => props.opacity || "1"};
  background: radial-gradient(
    circle,
    white 0%,
    white 40%,
    rgba(196, 196, 196, 0.1) 50%,
    #bfe9f6 90%,
    #bfe9f6 100%
  );
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: ${(props) => parseInt(props.width || "100px") * 0.12}px;
  color: #2a5676;

  &:before {
    content: "";
    width: calc(${(props) => props.width || "100px"} * 0.4);
    height: calc(${(props) => props.height || "100px"} * 0.2);
    backdrop-filter: blur(10px);
    background: white;
    position: absolute;
    opacity: 0.45;
    top: calc(${(props) => props.height || "100px"} * 0.11);
    left: calc(50% - ${(props) => parseInt(props.width || "100px") * 0.4}px);
    transform: rotate(-30deg);
    border-radius: 50%;
  }
`;
