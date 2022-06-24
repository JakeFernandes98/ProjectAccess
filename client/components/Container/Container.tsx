import * as React from 'react';

import MUIContainer from '@mui/material/Container';
import ContainerProps from './Container.types';

export default function Container({
  component,
  maxWidth,
  disableGutters,
  sx,
  children,
}: ContainerProps) {
  return (
    <MUIContainer
      component={component}
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={sx}
    >
      {children}
    </MUIContainer>
  );
}
