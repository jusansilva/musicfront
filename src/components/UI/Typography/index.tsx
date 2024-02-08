import styled from '@emotion/styled'


import { IViewProps } from './types'

const Typography = styled.span<IViewProps>`
  ${({ theme, fontType }) => fontType };

  ${({ color }) => (color ? `color: ${color}` : `color: black`)};
  text-decoration: ${({ textDecoration }) => textDecoration || 'none'};
  text-align: ${({ align }) => align || 'left'};
  ${({ letterSpacing }) => letterSpacing && `letter-spacing:${letterSpacing}`};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`};
  ${({ size }) => size && `font-size: ${size}px`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ limitedText }) =>
    limitedText &&
    `
    display: block;
    width: 140px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `};
`

export default Typography
