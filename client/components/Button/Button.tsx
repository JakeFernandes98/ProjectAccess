import * as React from 'react';

import MUIButton from '@mui/material/Button';
import ButtonProps from './Button.types';

export default function Button({
  label,
  color,
  variant,
  fullWidth,
  disabled,
  type,
  sx,
}: ButtonProps) {
  return (
    <MUIButton
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      type={type}
      sx={sx}
    >
      {label}
    </MUIButton>
  );
}
