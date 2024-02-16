import { getAccessTokenFromLS } from '@/utils/auth'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

function convertToSnakeCase(config: AdaptAxiosRequestConfig) {
  const { params, data } = config
  if (data) {
    config.data = decamelizeKeys(data)
  }

  if (params) {
    config.params = decamelizeKeys(params)
  }

  return config
}

function convertToCamelCase(res: AxiosResponse) {
  res.data = camelizeKeys(res.data)
  return res
}

class Http {
  instance: AxiosInstance
  private accessToken: string

  constructor() {
    this.accessToken = getAccessTokenFromLS()

    this.instance = axios.create({
      baseURL: import.meta.env.VITE_APP_API_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.instance.interceptors.response.use(
      response => {
        return response
      },

      (error: AxiosError) => {
        console.log('error', error)
        return Promise.reject(error)
      },
    )

    this.instance.interceptors.request.use(
      config => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },

      error => {
        console.log('error', error)
        // return Promise.reject(error)
      },
    )
  }
}

const http = new Http().instance

http.interceptors.request.use(convertToSnakeCase)
http.interceptors.response.use(convertToCamelCase)

export default http
