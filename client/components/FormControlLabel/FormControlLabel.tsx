import * as React from 'react';
import MUIFormControlLabel from '@mui/material/FormControlLabel';
import FormControlLabelProps from './FormControlLabel.types';

export default function FormControlLabel({
  value,
  control,
  label,
  labelPlacement,
}: FormControlLabelProps) {
  return (
    <MUIFormControlLabel
      value={value}
      control={control}
      label={label}
      labelPlacement={labelPlacement}
    ></MUIFormControlLabel>
  );
}
