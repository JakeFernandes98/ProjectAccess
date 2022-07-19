import * as React from 'react';

import MUIListItemText from '@mui/material/ListItemText';
import ListItemTextProps from './ListItemText.types';

export default function ListItemText({
  primary,
  secondary,
}: ListItemTextProps) {
  return (
    <MUIListItemText
      primary={primary}
      secondary={secondary}
    />
  );
}
