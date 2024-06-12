import styled from "styled-components";

export const StyledLogoImg = styled.img`
  width: ${({ size }) =>
    size === "s" ? "50px" : size === "m" ? "100px" : "150px"};
  aspect-ratio: "4/3";
`;
