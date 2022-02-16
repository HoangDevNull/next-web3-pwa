import { createTheme } from '@mui/material/styles';
import overrides from './overrides';

// Create a theme instance.
let theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  // Material UI theme
  breakpoints: {
    values: {
      xs: 0,
      sm: 607,
      md: 960,
      lg: 1230,
      xl: 1920,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: [
      'SFRounded',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '4rem', // 64px
      fontWeight: 600,
      lineHeight: '72px',
    },
    h2: {
      fontSize: '2.125rem', // 34px
      fontWeight: 600,
      lineHeight: '42px',
    },
    h3: {
      fontSize: '1.5rem', // 24px
      fontWeight: 'bold',
      lineHeight: '32px',
    },
    h4: {
      fontSize: '1.25rem', // 20px
      fontWeight: 'bold',
      lineHeight: '28px',
    },
    body1: {
      fontSize: '1rem', // 16px
      fontWeight: 500,
      lineHeight: '24px',
    },
    body2: {
      fontSize: '1rem', // 16px
      lineHeight: '24px',
    },
    subtitle1: {
      fontSize: '0.875rem', // 14px
      fontWeight: 'bold',
    },
    caption: {
      fontSize: '0.8125rem',
      fontWeight: 500, // 13px
      lineHeight: '19.5px',
    },
  },
});

// update shadow
theme.shadows[1] = `0 2px 6px 0 rgb(0 0 17 / 32%)`;
theme.shadows[2] = `0 0 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 10%)`;
theme.shadows[3] = `0 0 8px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 15%)`;

const lightTheme = createTheme(theme, {
  components: overrides,
  palette: {
    mode: 'light',
    primary: {
      light: '#ff5da9',
      main: '#FF007A',
      dark: '#c5004f',
    },
    secondary: {
      light: '#b8b8b8',
      main: '#888888',
      dark: '#5b5b5b',
      contrastText: '#ffffff',
    },
    info: {
      main: '#1bb2f1',
    },
    success: {
      main: '#008000',
    },
    error: {
      main: '#D70000',
    },
    text: {
      primary: '#212529',
      secondary: '#212529',
      disabled: '#566266',
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    },
    action: {
      disabled: '#fff',
      disabledBackground: '#566266',
      disabledOpacity: 1,
    },
  },
});
const darkTheme = createTheme(theme, {
  components: overrides,
  palette: {
    mode: 'dark',
    primary: {
      light: '#ff5da9',
      main: '#ff007a',
      dark: '#c5004f',
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#2D3C41',
      contrastText: '#333',
    },
    info: {
      main: '#1bb2f1',
    },
    success: {
      main: '#008000',
    },
    error: {
      main: '#D70000',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(143, 150, 172, 1)',
      disabled: 'rgba(195, 197, 203, 1)',
    },
    background: {
      paper: '#101214',
      default: '#090a0b',
    },
    action: {
      disabled: '#fff',
      disabledBackground: '#566266',
      disabledOpacity: 1,
    },
  },
});

export { lightTheme, darkTheme };
