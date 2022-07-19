import * as React from 'react';
import MUIListItemIcon from '@mui/material/ListItemIcon';
import ListItemIconProps from './ListItemIcon.types';

export default function ListItemIcon({ children }: ListItemIconProps) {
  return <MUIListItemIcon>{children}</MUIListItemIcon>;
}
