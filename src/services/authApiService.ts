import apiClient from './api'

export const authApiService = {
  path: '/auth',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async login(payload: any) {
    const data = await apiClient.post(`${this.path}/login`, payload)
    return data.data
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getMe(params: any = {}) {
    const data = await apiClient.get(`${this.path}/me`, { params })
    return data.data
  },
}

export default authApiService
