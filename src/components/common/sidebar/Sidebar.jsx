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
          <Link to="/main">
            <StyledSidebarItemDiv active={isActive("/main")}>
              <StyledHomeIcon />
              <span>한눈에 보기</span>
            </StyledSidebarItemDiv>
          </Link>
          <Link to="/main/social">
            <StyledSidebarItemDiv active={isActive("/main/social")}>
              <StyledAnalyzeIcon />
              <span>소셜 분석</span>
            </StyledSidebarItemDiv>
          </Link>
          <Link to="/main/stock">
            <StyledSidebarItemDiv active={isActive("/main/stock")}>
              <StyledRelateIcon />
              <span>연관 주식</span>
            </StyledSidebarItemDiv>
          </Link>
          <Link to="/main/keyword">
            <StyledSidebarItemDiv active={isActive("/main/keyword")}>
              <StyledKeywordIcon />
              <span>연관 키워드</span>
            </StyledSidebarItemDiv>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <StyledHeaderFillSunIcon
            darkmode={isDarkMode}
            onClick={() => {
              isDarkMode ? toggleTheme() : null;
            }}
          />
          <StyledToggleContainer isDarkMode={isDarkMode} onClick={toggleTheme}>
            <StyledToggleCircle isDarkMode={isDarkMode} />
          </StyledToggleContainer>
          <StyledHeaderFillMoonIcon
            darkmode={isDarkMode}
            onClick={() => {
              !isDarkMode ? toggleTheme() : null;
            }}
          />
        </div>
      </StyledSidebarInfoDiv>
    </StyledSidebarDiv>
  );
}
