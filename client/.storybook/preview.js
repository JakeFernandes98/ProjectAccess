export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// import { muiTheme } from 'storybook-addon-material-ui';
// import theme from '../theme/theme';
// export const decorators = [muiTheme(theme)];

import { ThemeProvider, createTheme } from '@mui/material/styles';

import theme from '../theme/theme';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
