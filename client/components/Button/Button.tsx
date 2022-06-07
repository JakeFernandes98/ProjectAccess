import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonProps from './Button.types';

export default function BasicButtons({label, color}:ButtonProps) {
  return (
      <Button color={color} variant="contained">{label}</Button>
  );
}