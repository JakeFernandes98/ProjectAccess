import * as React from 'react';
import MUICheckbox from '@mui/material/Checkbox';
import CheckboxProps from './Checkbox.types';

export default function Checkbox({
  checked,
  onChange,
  color,
  size,
  required,
  disableRipple,
}: CheckboxProps) {
  return (
    <MUICheckbox
      checked={checked}
      onChange={onChange}
      color={color}
      size={size}
      required={required}
      disableRipple={disableRipple}
    ></MUICheckbox>
  );
}
