import styled from '@emotion/styled'

// import { IViewProps } from './types'

export const Container = styled.div`
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;

  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }
`

export const DataRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &:nth-child(even) {
    background-color: 'grey;
  }
  padding-left: 10px;
`

export const Row = styled.div<{ item?: boolean } >`
  display: flex;
  width: 100%;
  height: auto;
  float: left;
  cursor: default;
  box-sizing: border-box;
  margin: 5px 0;
  /* background: greenyellow; */
  cursor: default;
  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }

  ${({ item, theme }) =>
    !item &&
    `
  `}

  ${({ item, theme }) =>
    item &&
    `
    &:hover {
      background: 'grey;
    }
  `}
`
export const RowHead = styled.div<{ item?: boolean } >`
  display: flex;
  width: 100%;
  height: auto;
  float: left;
  cursor: default;
  box-sizing: border-box;
  margin: 5px 0;
  /* background: greenyellow; */
  cursor: default;
  padding: 10px;
  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }

  ${({ item, theme }) =>
    !item &&
    `
  `}

  ${({ item, theme }) =>
    item &&
    `
    &:hover {
    }
  `}
`

export const BgWhite = styled.span<{ item?: boolean } >`
  display: flex;
  align-items: center;
  ${({ item }) =>
    item
      ? `
    margin-left: -118px;
  `
      : `margin-left: -65px;`}
  padding: 5px 20px;
`

export const Column = styled.div<
  {
    grid: number
    align: string
    field?: string
  }
>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 27px;
  width: 100%;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 27px;
  width: 95%;
  cursor: default;
  border-radius: 4px;
  justify-content: ${({ align }) =>
    align === 'left' ? 'flex-start' : 'flex-end'};

  @media only screen and (min-width: 768px) {
    width: ${({ grid }) => (grid ? (grid / 11) * 100 : '8:33')}%;
  }

  &:first-of-type {
    margin: 0px 10px 0px 0px;
  }

  &:last-child {
    margin: 0px 0px 0px 2px;
  }
`
