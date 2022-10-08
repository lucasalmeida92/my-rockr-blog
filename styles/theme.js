import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F1A10A",
    },
    secondary: {
      main: "#032937",
    },
    text: {
      main: "#2D2D2D",
    },
    neutral: {
      main: '#2D2D2D',
    },
    placeholder: "#00000077",
  },
  typography: {
    fontSize: '14px',
    fontFamily: `'Rubik', Segoe UI, Roboto, Helvetica Neue, sans-serif`,
    h1: {
      fontSize: '20px',
      fontWeight: '700',
    },
    button: {
      fontSize: '14px',
    },
  },
});
