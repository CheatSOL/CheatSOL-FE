import { useState } from "react";
import { StyledNav, StyledNavItem } from "./Period.style";

export default function PeriodSelectBar(props) {
  const [selected, setSelected] = useState("7일");
  const period = ["7일", "30일", "1년", "5년"];

  const handlePeriodClick = (period) => {
    setSelected(period);
    props.handlePeriodChange(period);
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
