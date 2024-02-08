import React, { createElement } from 'react'

import { IProps, IGridHeader, IGridData, IViewProps } from './types'
import View from './view'

const DataGridContainer: React.FC<IProps> = ({
  header,
  data,
  limited,
  size,
}) => {
  const viewProps: IViewProps = { header, data, limited, size }

  return createElement(View, viewProps)
}

export default DataGridContainer
export type { IGridHeader, IGridData }
