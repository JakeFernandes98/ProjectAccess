import * as React from 'react';

import MUIListItemButton from '@mui/material/ListItemButton';
import ListItemText from '../ListItemText/ListItemText';
import ListItemButtonProps from './ListItemButton.types';

export default function ListItemButton({
  primary,
  secondary,
  children,
}: ListItemButtonProps) {
  return (
    <MUIListItemButton>
      {children}
      <ListItemText
        primary={primary}
        secondary={secondary}
      ></ListItemText>
    </MUIListItemButton>
  );
}
