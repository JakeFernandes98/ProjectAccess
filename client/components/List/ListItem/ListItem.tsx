import * as React from 'react';

import MUIListItem from '@mui/material/ListItem';
import ListItemProps from './ListItem.types';

export default function ListItem({ children, divider }: ListItemProps) {
  return <MUIListItem divider={divider}>{children}</MUIListItem>;
}
