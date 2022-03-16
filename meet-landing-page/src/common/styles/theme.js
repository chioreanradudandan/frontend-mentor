import { hsl } from 'polished'

const theme = {
  colors: {
    primary: hsl(192, 0.37, 0.48),
    primaryAccent: hsl(192, 0.9, 0.77),
    secondary: hsl(268, 0.34, 0.53),
    secondaryAccent: hsl(268, 1, 0.86),
    dark: hsl(240, 0.21, 0.2),
    grey: hsl(240, 0.1, 0.57),
    light: hsl(0, 0, 98),
  },

  fonts: {
    family: 'Red Hat Display, sans-serif',
    baseSize: '18px',
  },

  fontWeights: {
    normal: 400,
    semiBold: 700,
    bold: 900,
  },

  fontSizes: {
    s: '16px',
  },
}

export default theme
