import { createElement } from 'react'
import View from './view'
import { IViewProps } from './types'
import { useNavigate } from 'react-router-dom'



const Home = () => {
  const useHandleNavigate = () => {
    const navigate = useNavigate()

    const handleNavigate = (item: string) => {
      navigate(item)
    }
    return handleNavigate
  }
  const handleNavigate = useHandleNavigate()

   const ViewProps: IViewProps = {
    handleNavigate
   }
  return createElement(View, ViewProps)
}

export default Home
