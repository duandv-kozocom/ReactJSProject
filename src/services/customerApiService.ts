import apiClient from './api'

export const customerApiService = {
  async create(payload: any) {
    const data = await apiClient.post(`/customers`, payload)
    return data.data
  },
}

export default customerApiService
