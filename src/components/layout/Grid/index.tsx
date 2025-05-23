
import styled from 'styled-components'
import Box, { BoxProps } from '../Box'
import type { CSSPropertyGridArea, CSSPropertyGridAutoFlow, CSSPropertyGridColumn, CSSPropertyGridRow, Responsive } from '../../../types/styles'
import { toPropValue } from '../../../utils/styles'
import { theme } from '@/themes'

type GridProps = BoxProps & {
    gridGap?: Responsive<string>
    gridColumnGap?: Responsive<string>
    gridRowGap?: Responsive<string>
    gridColumn?: Responsive<CSSPropertyGridColumn>
    gridRow?: Responsive<CSSPropertyGridRow>
    gridAutoFlow?: Responsive<CSSPropertyGridAutoFlow>
    gridAutoColumns?: Responsive<string>
    gridAutoRows?: Responsive<string>
    gridTemplateColumns?: Responsive<string>
    gridTemplateRows?: Responsive<string>
    gridTemplateAreas?: Responsive<CSSPropertyGridArea>
    gridArea?: Responsive<string>
}

/**
 * Grid 컴포넌트
 * grid 레이아웃 구현에 사용한다
 */
const Grid = styled(Box)<GridProps>`
    ${(props) => toPropValue('grid-gap', props.gridGap, theme)}
    ${(props) => toPropValue('grid-column-gap', props.gridColumnGap, theme)}
    ${(props) => toPropValue('grid-row-gap', props.gridRowGap, theme)}
    ${(props) => toPropValue('grid-row', props.gridRow, theme)}
    ${(props) => toPropValue('grid-column', props.gridColumn, theme)}
    ${(props) => toPropValue('grid-auto-flow', props.gridAutoFlow, theme)}
    ${(props) => toPropValue('grid-auto-columns', props.gridAutoColumns, theme)}
    ${(props) => toPropValue('grid-auto-rows', props.gridAutoRows, theme)}
    ${(props) => toPropValue('grid-template-columns', props.gridTemplateColumns, theme)}
    ${(props) => toPropValue('grid-template-rows', props.gridTemplateRows, theme)}
    ${(props) => toPropValue('grid-template-areas', props.gridTemplateAreas, theme)}
    ${(props) => toPropValue('grid-area', props.gridArea, theme)}
`

Grid.defaultProps = {
    display: 'grid',
}

export default Grid