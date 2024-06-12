import styled, { css } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { TbCirclesRelation } from "react-icons/tb";
import { VscSymbolKeyword } from "react-icons/vsc";

export const StyledSidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  padding-top: 20px;
`;

export const StyledSidebarInfoDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSidebarItemDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 60px;
  cursor: pointer;

  &:hover {
    background-color: #43d2ff;
    border-radius: 50px;
    & span,
    & svg {
      color: white;
    }
  }

  & span {
    margin-left: 15px;
    transition: color 0.3s;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const iconStyles = css`
  font-size: 1.5rem !important;
  transition: color 0.3s;
`;

export const StyledHomeIcon = styled(AiOutlineHome)`
  ${iconStyles}
`;
export const StyledAnalyzeIcon = styled(IoStatsChart)`
  ${iconStyles}
`;
export const StyledRelateIcon = styled(TbCirclesRelation)`
  ${iconStyles}
`;
export const StyledKeywordIcon = styled(VscSymbolKeyword)`
  ${iconStyles}
`;
