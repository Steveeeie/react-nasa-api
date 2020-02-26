import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    red: {
      regular: '#df1b33',
      transparent: 'rgba(217, 47, 47, 0.2)'
    },
    light: {
      regular: '#eef5d9',
      transparent: 'rgba(255, 255, 255, 0.2)'
    },
    dark: {
      regular: '#1d2a39',
      transparent: 'rgb(30, 44, 61, 0.4)'
    },
    darker: {
      regular: '#1c2529',
      transparent: 'rgba(0, 0, 0, 0.4)'
    }
  },
  height: {
    input: '48px'
  },
  elevation: unit =>
    [
      '0 2px 6px rgba(0, 0, 0, 0.1)',
      '0 4px 8px rgba(0, 0, 0, 0.15)',
      '0 6px 10px rgba(0, 0, 0, 0.2)'
    ][unit],
  radius: unit => [0, 4, 8, 16][unit] + 'px',
  spacing: unit => [0, 4, 8, 12, 16, 24, 32, 48, 64][unit] + 'px'
});

export default theme;
