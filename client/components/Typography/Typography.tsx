import * as React from 'react';
import MUITypography from '@mui/material/Typography';
import TypographyProps from './Typography.types';

export default function Typography({
  children,
  variant,
  component,
  align,
  gutterBottom,
  color,
}: TypographyProps) {
  return (
    <MUITypography
      variant={variant}
      component={component}
      align={align}
      gutterBottom={gutterBottom}
      color={color}
    >
      {children}
    </MUITypography>
  );
}
