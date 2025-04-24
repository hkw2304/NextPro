import colors from './colors'
import fontSizes from './fontSizes'
import letterSpacings from './letterSpacing'
import lineHeights from './lineHeights'
import space from './space'

export const theme = {
    space,
    fontSizes,
    letterSpacings,
    lineHeights,
    colors,
} as const // 객체의 속성을 읽기 전용으로 함