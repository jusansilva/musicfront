import { DefaultProps } from '@resources/types'

import { Fonts } from '@resources/types/mixins'

export interface ILineProps extends DefaultProps {
  line?: boolean
  item?: boolean
  mv?: number
  mh?: number
}

export interface IItemProps extends DefaultProps {
  item?: boolean
  width?: string
  color?: string
  fontType?: Fonts
  align?: string
  letterSpacing?: string
  size?: number
  weight?: string
  clickable?: boolean
}
