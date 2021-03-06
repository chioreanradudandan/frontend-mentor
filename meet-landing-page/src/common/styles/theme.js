import { hsl } from 'polished'

const theme = {
  colors: {
    primary: hsl(192, 0.37, 0.48),
    primaryAccent: hsl(192, 0.9, 0.77),
    secondary: hsl(268, 0.34, 0.53),
    secondaryAccent: hsl(268, 1, 0.86),
    dark: hsl(240, 0.21, 0.2),
    grey: hsl(240, 0.1, 0.57),
    light: hsl(0, 0, 0.98),
  },

  fonts: {
    family: 'Red Hat Display, sans-serif',
    baseSize: '18px',
  },

  fontWeights: {
    normal: 400,
    semiBold: 500,
    bold: 700,
    extraBold: 900,
  },

  fontSizes: {
    xs: '16px',
    s: '18px',
    m: '26px',
    l: '32px',
    xl: '40px',
    xxl: '64px',
  },
}

export default theme
