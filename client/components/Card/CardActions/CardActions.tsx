import * as React from 'react';
import MUICardActions from '@mui/material/CardActions';
import CardActionsProps from './CardActions.types';

export default function CardActions({
  children,
  disableSpacing,
  sx,
}: CardActionsProps) {
  return (
    <MUICardActions
      sx={sx}
      disableSpacing={disableSpacing}
    >
      {children}
    </MUICardActions>
  );
}
