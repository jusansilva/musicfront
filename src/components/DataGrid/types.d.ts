import { ReactNode } from 'react'

import { Fonts } from '@resources/types/mixins'

export interface IGridHeader {
  label: ReactNode | string
  grid: number
  action: () => void | null
  order: boolean
  value: string
  field: 'value' | 'interaction' | 'select'
  styles: {
    align: 'left' | 'right'
    fontType: Fonts | undefined
    fontSize: number
    color?: string
  }
}

export interface IGridData {
  id: string
  select: ReactNode | string
  action: ReactNode | string
  values: {
    [key: string]: string | number | null
  }
}

export interface IProps {
  header: IGridHeader[]
  data: IGridData[]
  limited?: boolean | undefined
  size?: boolean | undefined
}

export interface IViewProps {
  header: IGridHeader[]
  data: IGridData[]
  limited?: boolean | undefined
  size?: boolean | undefined
}
