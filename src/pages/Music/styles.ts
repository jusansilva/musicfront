import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 20 20 20 20;
  padding: 10px;
  width: 100%;
  heigth: 100%;
`
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ContainerText = styled.div`
  max-height: 40px;
  margin: 70px 0;
`

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 350px;
  cursor: pointer;
`
export const TextContent = styled.div`
  margin: 60px 0;
  display: flex;
  align-items: center;
`

export const ContainerButton = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`

export const ContentButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ButtonIcon = styled.button`
background-color: DodgerBlue;
border: none;
color: white;
padding: 12px 16px;
font-size: 16px;
cursor: pointer;
width: 30%
`

export const Title = styled.h1`
text-align: center;
font-size: xxx-large;
`

export const TableStyle = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even){background-color: #f2f2f2;}

  tr:hover {background-color: #ddd;}

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
  }
`
export const WrapperDataGrid = styled.div`
  margin: 15px 0 0 0;
  width: 100%;
  height: auto;
`
