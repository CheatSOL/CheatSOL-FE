import { useState } from "react";
import { StyledNav, StyledNavItem } from "./Period.style";

export default function PeriodSelectBar() {
  const [selected, setSelected] = useState("1일");
  const period = ["1일", "7일", "30일", "1년", "5년"];

  const handlePeriodClick = (period) => {
    setSelected(period);
  };

  return (
    <StyledNav>
      {period.map((e, index) => (
        <StyledNavItem
          key={index}
          active={selected === e}
          onClick={() => handlePeriodClick(e)}
        >
          {e}
        </StyledNavItem>
      ))}
    </StyledNav>
  );
}
