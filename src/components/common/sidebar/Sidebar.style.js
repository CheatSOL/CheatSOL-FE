import styled, { css } from "styled-components";
import { sidebarHeightOffset } from "../../variables";
import { AiOutlineHome } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { TbCirclesRelation } from "react-icons/tb";
import { VscSymbolKeyword } from "react-icons/vsc";

export const StyledSidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin-top: 10px;
  height: calc(100% - ${sidebarHeightOffset});
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  padding-top: 50px;
`;

export const StyledSidebarItemDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 50px;
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
  color: rgba(0, 0, 0, 0.7);
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
