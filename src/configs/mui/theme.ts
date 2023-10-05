import {
  PaletteColor,
  PaletteColorOptions,
  createTheme,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    black: PaletteColorOptions;
    green: PaletteColorOptions;
    yellow: PaletteColorOptions;
  }

  interface Palette {
    black: PaletteColor;
    green: PaletteColor;
    yellow: PaletteColor;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
    green: true;
    yellow: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    h2: {
      fontSize: '24px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 500,
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  palette: {
    black: {
      main: '#262626',
      contrastText: '#ffffff',
    },
    green: {
      main: '#237740',
    },
    yellow: {
      main: '#D0A900',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#262626',
    },
  },
});

export default theme;
