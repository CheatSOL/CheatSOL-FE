import styled from "styled-components";

export const StyledLogoImg = styled.img`
  transform: ${({ size }) =>
    size === "s" ? "scale(0.3)" : size === "m" ? "scale(0.5)" : "scale(0.8)"};
`;
