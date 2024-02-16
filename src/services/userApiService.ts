import http from '@/services/api'

const URL = 'users'

export const userApiService = {
  getUsers(params: { user_state: string }) {
    return http.get(URL, {
      params,
    })
  },
  getUser(id: string) {
    return http.get(`${URL}/${id}`)
  },
  createUsers(body: any) {
    return http.post(URL, body)
  },
  updateUser(id: string, body: any) {
    return http.put(`${URL}/${id}`, body)
  },
}

export default userApiService
