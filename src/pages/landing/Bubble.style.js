import styled, { keyframes } from "styled-components";

// @keyframes 애니메이션을 별도로 정의
const animate = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
`;

export const StyledBubble = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: linear-gradient(
    to top right,
    rgba(124, 224, 255, 0.32),
    rgba(124, 224, 255, 0.06),
    rgba(235, 231, 255, 1)
  );
  opacity: 100%;
  animation: ${animate} ${(props) => props.time} ease-in-out infinite alternate;
  cursor: pointer;
`;
