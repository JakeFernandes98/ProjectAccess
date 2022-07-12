import * as React from 'react';
import ReactDOM from 'react-dom';
import { red, blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b8cd9',
    },
    secondary: {
      main: '#ffa51f',
    },
  },
  typography: {
    fontFamily: `'Lato', sans-serif`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
