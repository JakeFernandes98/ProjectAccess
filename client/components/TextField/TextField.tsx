import * as React from 'react';
import MUITextField from '@mui/material/TextField';
import TextFieldProps from './TextField.types';

export default function TextField({
  label,
  variant,
  disabled,
  error,
  fullWidth,
  type,
  required,
}: TextFieldProps) {
  return (
    <MUITextField
      variant={variant}
      label={label}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      type={type}
      required={required}
    ></MUITextField>
  );
}
