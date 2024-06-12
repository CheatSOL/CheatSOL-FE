import styled, { css } from "styled-components";
import { IoSearch } from "react-icons/io5";

export const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 10px;
  padding-bottom: 0px;
`;
export const StyledHeaderLogoDiv = styled.div`
  margin-left: 30px;
`;

export const StyledHeaderParentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 50px;
  margin-left: 100px;
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
