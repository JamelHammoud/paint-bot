import { typeface } from './typeface'
import { elevation } from './elevation'
import { breakpoint } from './breakpoint'
import { color } from './color'

export const theme = {
  color,
  elevation,
  breakpoint,
  typeface
}

export type Theme = typeof theme