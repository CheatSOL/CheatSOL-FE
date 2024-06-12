import React, { useState } from "react";
import {
  StyledHeaderDiv,
  StyledHeaderLogoDiv,
  StyledHeaderInput,
  StyledHeaderParentDiv,
  StyledHeaderInputDiv,
  StyledSearchIcon,
  StyledHeaderMoonIcon,
  StyledHeaderSunIcon,
  StyledHeaderFillMoonIcon,
  StyledHeaderFillSunIcon,
} from "./Header.style";
import Logo from "../logo/Logo";

export default function Header(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <StyledHeaderDiv>
      <StyledHeaderLogoDiv>
        <Logo size={"m"} />
      </StyledHeaderLogoDiv>
      <StyledHeaderParentDiv>
        <StyledHeaderInputDiv>
          <StyledHeaderInput
            placeholder="Search"
            width={props.width}
            height={props.height}
          />
          <StyledSearchIcon />
        </StyledHeaderInputDiv>
        <div>
          {isDarkMode ? (
            <>
              <StyledHeaderFillMoonIcon onClick={toggleTheme} filled />
              <StyledHeaderSunIcon onClick={toggleTheme} />
            </>
          ) : (
            <>
              <StyledHeaderMoonIcon onClick={toggleTheme} />
              <StyledHeaderFillSunIcon onClick={toggleTheme} filled />
            </>
          )}
        </div>
      </StyledHeaderParentDiv>
    </StyledHeaderDiv>
  );
}
