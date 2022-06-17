import * as React from 'react';
import MUIAvatar from '@mui/material/Avatar';
import AvatarProps from './Avatar.types';

export default function Avatar({ alt, src, variant, sx }: AvatarProps) {
  return (
    <MUIAvatar
      alt={alt}
      src={src}
      variant={variant}
      sx={sx}
    ></MUIAvatar>
  );
}
