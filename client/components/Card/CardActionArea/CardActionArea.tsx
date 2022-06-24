import * as React from 'react';
import MUICardActionArea from '@mui/material/CardActionArea';
import CardActionAreaProps from './CardActionArea.types';

export default function CardActionArea({ children, sx }: CardActionAreaProps) {
  return <MUICardActionArea sx={sx}>{children}</MUICardActionArea>;
}
