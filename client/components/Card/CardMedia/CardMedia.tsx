import * as React from 'react';
import MUICardMedia from '@mui/material/CardMedia';
import CardMediaProps from './CardMedia.types';

export default function CardMedia({
  component,
  height,
  image,
  alt,
  sx,
}: CardMediaProps) {
  return (
    <MUICardMedia
      component={component}
      height={height}
      image={image}
      alt={alt}
      sx={sx}
    ></MUICardMedia>
  );
}
