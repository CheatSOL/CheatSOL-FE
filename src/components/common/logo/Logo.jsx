import React from "react";
import { StyledLogoImg } from "./Logo.style";

export default function Logo({ size }) {
  return (
    <a href="/">
      <StyledLogoImg size={size} src="public/assets/images/logo.png" />
    </a>
  );
}
