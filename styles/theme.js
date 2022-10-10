import { createTheme } from '@mui/material/styles';
import { globalStyles } from './globalStyles';

const palette = {
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
  grey: {
    main: '#2D2D2D',
    contrastText: '#fff',
  },
  placeholder: '#00000077',
};

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
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: palette.neutral.main,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          '&:hover': {
            backgroundColor: palette.primary.main,
          },
        },
      },
    },
  },
  palette: palette,
  typography: {
    fontSize: 14,
    color: palette.text.main,
    fontFamily: `'Rubik', Segoe UI, Roboto, Helvetica Neue, sans-serif`,
    h1: {
      fontSize: 22,
      fontWeight: '700',
    },
    button: {
      fontSize: 14,
    },
  },
});
