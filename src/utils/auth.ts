export const getAccessTokenFromLS = () => {
  return localStorage.getItem('access_token') || ''
}
