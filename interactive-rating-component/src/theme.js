import { hsl } from 'polished'

const theme = {
  colors: {
    orange: hsl(25, 0.97, 0.53),
    white: hsl(0, 0, 1),
    lightGrey: hsl(217, 0.12, 0.63),
    mediumGrey: hsl(216, 0.12, 0.54),
    darkBlue: hsl(213, 0.19, 0.18),
    veryDarkBlue: hsl(216, 0.12, 0.08),
  },

  fonts: {
    family: 'Overpass, sans-serif',
    baseSize: '15px',
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },
}

export default theme
