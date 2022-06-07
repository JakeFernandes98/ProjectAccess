import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextFieldProps from './TextField.types';

export default function BasicTextFields({label}:TextFieldProps) {
  return (
    <Box component="form" > 
      <TextField variant="outlined" label={label}></TextField>
    </Box>
  );
}