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
    shadowGrey: PaletteColorOptions;
    greyBackground: PaletteColorOptions;
  }

  interface Palette {
    black: PaletteColor;
    green: PaletteColor;
    yellow: PaletteColor;
    shadowGrey: PaletteColor;
    greyBackground: PaletteColor;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
    green: true;
    yellow: true;
    shadowGrey: true;
    greyBackground: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    h2: {
      fontSize: '32px',
      fontWeight: 400,
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
      main: '#006036',
      light: '#87D2A1',
    },
    yellow: {
      main: '#D0A900',
      contrastText: '#ffffff',
    },
    shadowGrey: {
      main: '#D9D9D9',
    },
    greyBackground: {
      main: '#F5F5F5',
    },
    text: {
      primary: '#262626',
    },
    background: {
      default: '#ffffff',
    },
  },
});

export default theme;
