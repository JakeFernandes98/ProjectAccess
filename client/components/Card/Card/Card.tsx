import * as React from 'react';

import MUICard from '@mui/material/Card';
import CardProps from './Card.types';

export default function Card({
  children,
  raised,
  variant,
  square,
  sx,
}: CardProps) {
  return (
    <MUICard
      raised={raised}
      variant={variant}
      square={square}
      sx={sx}
    >
      {children}
    </MUICard>
  );
}
