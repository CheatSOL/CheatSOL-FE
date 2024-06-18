import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  StyledSidebarDiv,
  StyledSidebarItemDiv,
  StyledHomeIcon,
  StyledAnalyzeIcon,
  StyledRelateIcon,
  StyledKeywordIcon,
  StyledHeaderFillMoonIcon,
  StyledHeaderFillSunIcon,
  StyledSidebarInfoDiv,
  StyledToggleCircle,
  StyledToggleContainer,
} from "./Sidebar.style";
import Logo from "../logo/Logo";

export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <StyledSidebarDiv>
      <div>
        <Logo />
      </div>
      <StyledSidebarInfoDiv>
        <div>
          <StyledSidebarItemDiv active={isActive("/main")}>
            <Link to="/main">
              <StyledHomeIcon />
              <span>한눈에 보기</span>
            </Link>
          </StyledSidebarItemDiv>
          <StyledSidebarItemDiv active={isActive("/main/social")}>
            <Link to="/main/social">
              <StyledAnalyzeIcon />
              <span>소셜 분석</span>
            </Link>
          </StyledSidebarItemDiv>
          <StyledSidebarItemDiv active={isActive("/main/stock")}>
            <Link to="/main/stock">
              <StyledRelateIcon />
              <span>연관 주식</span>
            </Link>
          </StyledSidebarItemDiv>
          <StyledSidebarItemDiv active={isActive("/main/keyword")}>
            <Link to="/main/keyword">
              <StyledKeywordIcon />
              <span>연관 키워드</span>
            </Link>
          </StyledSidebarItemDiv>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <StyledHeaderFillSunIcon darkmode={isDarkMode} />
          <StyledToggleContainer onClick={toggleTheme} isDarkMode={isDarkMode}>
            <StyledToggleCircle isDarkMode={isDarkMode} />
          </StyledToggleContainer>
          <StyledHeaderFillMoonIcon darkmode={isDarkMode} />
        </div>
      </StyledSidebarInfoDiv>
    </StyledSidebarDiv>
  );
}
