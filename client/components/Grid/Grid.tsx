import * as React from 'react';

import MUIGrid from '@mui/material/Grid';
import GridProps from './Grid.types';

export default function Grid({
  children,
  item,
  container,
  columns,
  columnSpacing,
  rowSpacing,
  spacing,
  direction,
  justifyContent,
  wrap,
  xs,
  sm,
  md,
  lg,
  xl,
}: GridProps) {
  return (
    <MUIGrid
      item={item}
      container={container}
      columns={columns}
      columnSpacing={columnSpacing}
      rowSpacing={rowSpacing}
      spacing={spacing}
      direction={direction}
      justifyContent={justifyContent}
      wrap={wrap}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {children}
    </MUIGrid>
  );
}
