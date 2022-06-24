import * as React from 'react';
import MUICheckbox from '@mui/material/Checkbox';
import CheckboxProps from './Checkbox.types';
import FormControlLabel from '@mui/material/FormControlLabel';
export default function Checkbox({
  checked,
  onChange,
  label,
  color,
  size,
  required,
  disableRipple,
}: CheckboxProps) {
  return (
    <>
      <FormControlLabel
        control={
          <MUICheckbox
            checked={checked}
            onChange={onChange}
            color={color}
            size={size}
            required={required}
            disableRipple={disableRipple}
          ></MUICheckbox>
        }
        label={label}
        value={label}
      />
    </>
  );
}
