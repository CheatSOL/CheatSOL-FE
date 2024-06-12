import {
  StyledSidebarDiv,
  StyledSidebarItemDiv,
  StyledHomeIcon,
  StyledAnalyzeIcon,
  StyledRelateIcon,
  StyledKeywordIcon,
  StyledHeaderMoonIcon,
  StyledHeaderSunIcon,
  StyledHeaderFillMoonIcon,
  StyledHeaderFillSunIcon,
  StyledSidebarInfoDiv,
  StyledToggleIcon,
  StyledToggleDarkIcon,
} from "./Sidebar.style";
import Logo from "../logo/Logo";
import { useState } from "react";

export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <StyledSidebarDiv>
      <div>
        <Logo />
      </div>
      <StyledSidebarInfoDiv>
        <div>
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
        </div>
    </StyledSidebarDiv>
  );
}
