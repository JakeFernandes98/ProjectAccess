import * as React from 'react';

import MUIList from '@mui/material/List';
import ListProps from './List.types';

export default function List({ children, dense }: ListProps) {
  return <MUIList dense={dense}>{children}</MUIList>;
}
