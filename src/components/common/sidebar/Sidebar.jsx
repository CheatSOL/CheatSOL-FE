import {
  StyledSidebarDiv,
  StyledSidebarItemDiv,
  StyledHomeIcon,
  StyledAnalyzeIcon,
  StyledRelateIcon,
  StyledKeywordIcon,
} from "./Sidebar.style";

export default function Sidebar() {
  return (
    <StyledSidebarDiv>
      <StyledSidebarItemDiv>
        <StyledHomeIcon />
        <span>한눈에 보기</span>
      </StyledSidebarItemDiv>
      <StyledSidebarItemDiv>
        <StyledAnalyzeIcon />
        <span>소셜 분석</span>
      </StyledSidebarItemDiv>
      <StyledSidebarItemDiv>
        <StyledRelateIcon />
        <span>연관 주식</span>
      </StyledSidebarItemDiv>
      <StyledSidebarItemDiv>
        <StyledKeywordIcon />
        <span>연관 키워드</span>
      </StyledSidebarItemDiv>
    </StyledSidebarDiv>
  );
}
