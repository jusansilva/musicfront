import { getApiHeader, getApiInstance } from '@services/api'
import { endpoints } from '..'
import { AxiosResponse } from 'axios'
import { translateUrlParam } from 'src/utils/urlUtil'

export const MusicService = {
  createMusic: async (values: any): Promise<any> => {
    const api = getApiInstance()

    const header = getApiHeader()

    const url = translateUrlParam(endpoints.URL.music.getAll, {})

    const formData = new FormData()

    formData.append('name', String(values.name))
    formData.append('nationality', String(values.nationality))
    formData.append('site', String(values.site))
    formData.append('file', values.file ?? '')

    header.headers['Content-Type'] = 'multipart/form-data'

    const response: AxiosResponse = await api.post(url, formData, header)

    if (200 !== response.status) {
      console.error('Error' + response.status)
      return { success: false, response: response }
    }

    return { success: true, response: response.data }
  },

  updateMusic: async (values: any): Promise<any> => {
    const api = getApiInstance()
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    }

    const formData = new FormData()
    formData.append('name', String(values.name))
    formData.append('nationality', String(values.nationality))
    formData.append('site', String(values.site))

    if (values.file !== null) formData.append('file', values.file)

    const response: AxiosResponse = await api.put(
      endpoints.URL.music.update,
      formData,
      config,
    )

    if (200 !== response.status) {
      console.error('Error' + response.status)
      return { success: false, response: response }
    }

    return { success: true, response: response.data }
  },

  getMusic: async (): Promise<any> => {
    const api = getApiInstance()

    const header = getApiHeader()

    const response: AxiosResponse = await api.get(
      endpoints.URL.music.getAll,
      header,
    )

    return response.data
  },

  getBannerById: async (id: string): Promise<any> => {
    const api = getApiInstance()

    const header = getApiHeader()

    const url = translateUrlParam(endpoints.URL.music.getByid, { id })

    const response: AxiosResponse = await api.get(url, header)

    return response.data
  },

  deleteBanner: async (id: string) => {
    const api = getApiInstance()

    const url = translateUrlParam(endpoints.URL.music.delete, {
      id,
    })

    const response: AxiosResponse = await api.delete(url)

    return response.data
  },
}
