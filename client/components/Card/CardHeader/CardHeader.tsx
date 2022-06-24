import * as React from 'react';
import MUICardHeader from '@mui/material/CardHeader';
import CardHeaderProps from './CardHeader.types';

export default function CardHeader({
  action,
  avatar,
  subheader,
  title,
  sx,
}: CardHeaderProps) {
  return (
    <MUICardHeader
      action={action}
      avatar={avatar}
      subheader={subheader}
      title={title}
      sx={sx}
    ></MUICardHeader>
  );
}
