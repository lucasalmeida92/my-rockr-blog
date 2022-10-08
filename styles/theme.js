import { createTheme } from '@mui/material/styles';
import { globalStyles } from './globalStyles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1086,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: globalStyles,
    },
  },
  palette: {
    primary: {
      main: '#F1A10A',
      light: '#ffd859',
    },
    secondary: {
      main: '#032937',
    },
    text: {
      main: '#2D2D2D',
    },
    neutral: {
      main: '#2D2D2D',
    },
    placeholder: '#00000077',
  },
  typography: {
    fontSize: '14px',
    color: '#2D2D2D',
    fontFamily: `'Rubik', Segoe UI, Roboto, Helvetica Neue, sans-serif`,
    h1: {
      fontSize: '22px',
      fontWeight: '700',
    },
    button: {
      fontSize: '14px',
    },
  },
});
