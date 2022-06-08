import * as React from "react";

import MUIButton from "@mui/material/Button";
import ButtonProps from "./Button.types";

export default function Button({
  label,
  color,
  variant,
  fullWidth,
  disabled,
}: ButtonProps) {
  return (
    <MUIButton
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {label}
    </MUIButton>
  );
}
