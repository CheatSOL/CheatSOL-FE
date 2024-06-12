import styled, { css } from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-top: 20px;
`;

export const StyledHeaderParentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
  width: 90%;
`;

export const StyledHeaderInputDiv = styled.div`
  position: relative;
`;

export const StyledHeaderInput = styled.input`
  width: ${(props) => props.width || "900px"};
  height: ${(props) => props.height || "50px"};
  padding: 10px;
  line-height: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  font-size: 20px;
  margin-left: 100px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(40, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }

  &::placeholder {
    font-size: 18px;
    padding-left: 10px;
  }
`;

export const StyledSearchIcon = styled(IoSearch)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: rgba(0, 0, 0, 0.5);
`;

const iconStyles = css`
  font-size: 1.6rem !important;
  margin-right: 10px;
  cursor: pointer;
`;

export const StyledHeaderMoonIcon = styled(IoMoonOutline)`
  ${iconStyles}
`;

export const StyledHeaderSunIcon = styled(IoSunnyOutline)`
  ${iconStyles}
`;

export const StyledHeaderFillMoonIcon = styled(IoMoon)`
  ${iconStyles}
  color: ${({ filled }) => (filled ? "gold" : "#000")};
`;

export const StyledHeaderFillSunIcon = styled(IoSunny)`
  ${iconStyles}
  color: ${({ filled }) => (filled ? "#F87315" : "#000")};
`;
