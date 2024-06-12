import React, { useState } from "react";
import {
  StyledHeaderDiv,
  StyledHeaderInput,
  StyledHeaderParentDiv,
  StyledHeaderInputDiv,
  StyledSearchIcon,
  StyledHeaderMoonIcon,
  StyledHeaderSunIcon,
  StyledHeaderFillMoonIcon,
  StyledHeaderFillSunIcon,
} from "./Header.style";

export default function Header(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <StyledHeaderDiv>
      <div>logo</div>
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
