import styled from '@emotion/styled'


import { ILineProps, IItemProps } from './types'

const alignTypes = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const Grid = styled.div<ILineProps & IItemProps>`
  width: 100%;
  padding: 5px 0;

  ${({ line, mv = 5, mh = 0 }) =>
    line &&
    `
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: center;
      margin: ${mv}px ${mh}px ${mv < 0 ? '0' : mv}px ${mh}px;
      padding: 0;
  `}
`
const Item = styled.div<IItemProps>`
  display: flex;
  flex: 2 1 auto;
  margin: 0 0 0 5px;
  ${({ align }) => align && `text-align: ${align}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ color }) => color && `color: ${color}`};
  justify-content: ${({ align }) =>
    align ? alignTypes[align] : alignTypes.left};
  ${({ letterSpacing }) => letterSpacing && `letter-spacing:${letterSpacing}`};
  ${({ size }) => size && `font-size: ${size}px`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
  ${({ clickable }) => clickable && 'cursor: pointer'};

  &:first-of-type {
    margin: 0;
  }
`

export { Grid as DataGrid, Item as DataGridItem}
