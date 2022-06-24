import * as React from 'react';
import MUICardContent from '@mui/material/CardContent';
import CardContentProps from './CardContent.types';

export default function CardContent({ children, sx }: CardContentProps) {
  return <MUICardContent sx={sx}>{children}</MUICardContent>;
}
