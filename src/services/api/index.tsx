import axios, { AxiosInstance } from 'axios'


import { ApiGateway } from './configs/GatewayConfig'

let instance: null | AxiosInstance = null

export const getApiHeader = (args: any[] = []) => {
  const header = { headers: {} }

  if (!args.length) return header

  const arrayArgValues = [

  ]

  args.forEach((arg: any) => {
    if (!arrayArgValues[arg.index]) return

    header.headers[arg.field] = arrayArgValues[arg.index]
  })

  return header
}

const checkInstanceAuth = (instanceItem: AxiosInstance) => {
  instanceItem.interceptors.request.use(
    async (config) => {
      if (!config.headers) return Promise.reject(config.headers)

      return Promise.resolve(config)
    },
    async (error) => {
      return Promise.reject(error)
    },
  )
}

const checkResponseAuth = (instanceItem: AxiosInstance) => {
  instanceItem.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response === undefined) {
        return Promise.reject({
          message: error.message,
          config: error.config,
        })
      }
    },
  )
}

export const getApiInstance = () => {
  if (instance) {
    checkInstanceAuth(instance)
    checkResponseAuth(instance)

    return instance
  }

  const INITIAL_SETTING = ApiGateway()

  instance = axios.create(INITIAL_SETTING)

  checkInstanceAuth(instance)
  checkResponseAuth(instance)

  return instance
}
