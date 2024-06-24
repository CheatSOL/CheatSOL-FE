import styled, { keyframes, css } from "styled-components";

// 둥둥 떠다니는 애니메이션
const float = keyframes`
  0% {
    transform: translate(-20%, -20%) translateY(0);
  }
  50% {
    transform: translate(-20%, -20%) translateY(-20px);
  }
  100% {
    transform: translate(-20%, -20%) translateY(0);
  }
`;

const pop = keyframes`
  0% {
    transform: translate(-20%, -20%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-20%, -20%) scale(1.5);
    opacity: 0;
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
  opacity: 1;
  transform: translate(-50%, -50%);
  animation: ${(props) =>
    props.pop
      ? css`
          ${pop} 0.5s ease-in-out forwards
        `
      : css`
          ${float} ${(props) => props.time} ease-in-out infinite
        `};
  cursor: pointer;
`;
