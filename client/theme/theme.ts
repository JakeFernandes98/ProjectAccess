import * as React from 'react';
import ReactDOM from 'react-dom';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
    components: {
      MuiButton:{
        styleOverrides: {
          root: {
            textTransform: 'none',
          }
        }
      },
      MuiTextField:{
        styleOverrides: {
          root: {
            textTransform: 'none',
          }
        }
      }
    }
  });

export default theme;