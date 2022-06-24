import * as React from 'react';
import MUIBox from '@mui/material/Box';
import BoxProps from './Box.types';

export default function Box({ sx, children }: BoxProps) {
  return <MUIBox sx={sx}>{children}</MUIBox>;
}
