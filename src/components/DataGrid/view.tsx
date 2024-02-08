import React from 'react'

import Typography from '@components/UI/Typography'

import { IViewProps } from './types'
import { Container, Row, Column, BgWhite, DataRow, RowHead } from './styles'

const DataGrid: React.FC<IViewProps> = ({ header, data, limited, size }) => {
  return (
    <Container>
      <RowHead>
        {header.map((headerItem) => (
          <Column
            align={headerItem.styles.align}
            grid={headerItem.grid}
          >
            {typeof headerItem.label === 'string' ? (
              <Typography
                color='black'
                size={13}
              >
                {headerItem.label}
              </Typography>
            ) : (
              <>{headerItem.label}</>
            )}
          </Column>
        ))}
      </RowHead>
      {data.map((dataItem, dataIndex) => (
        <DataRow key={dataIndex}>
          <Row key={`${dataIndex}-${String(dataItem)}`} item>
            {header.map((headerItem, headerIndex) => {
              const element = dataItem.values[headerItem.value]

              return (
                <Column
                  align={headerItem.styles.align}
                  grid={headerItem.grid}
                  key={`${headerIndex}-${String(headerItem.label)}`}
                >
                  <>
                    {headerItem.field === 'value' && (
                      <Typography
                        fontType={headerItem.styles.fontType}
                        size={headerItem.styles.fontSize}
                        color={
                          headerItem.styles.color || headerItem.styles.color
                        }
                        limitedText={limited ? true : false}
                      >
                        {typeof element === 'number'
                          ? `R$ ${element}`
                          : element && element}
                      </Typography>
                    )}
                  </>
                </Column>
              )
            })}
          </Row>
          {header.map((headerItem, index) => (
            <BgWhite item={size ? true : false} key={index}>
              {headerItem.field === 'select' && <>{dataItem.select}</>}
              {headerItem.field === 'interaction' && <>{dataItem.action}</>}
            </BgWhite>
          ))}
        </DataRow>
      ))}
    </Container>
  )
}

export default DataGrid
