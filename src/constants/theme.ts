import { colors } from './colors';

export const theme = {
  colors,
  spacing: {
    page: {
      x: 'px-4 md:px-6',
      y: 'py-4'
    }
  },
  rounded: {
    default: 'rounded-lg'
  }
} as const;