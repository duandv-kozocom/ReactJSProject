export const appConfig = {
  appName: import.meta.env.VITE_APP_NAME,
  appEnv: import.meta.env.VITE_APP_ENV,
  appUrl: import.meta.env.VITE_APP_URL,
  api: {
    url: import.meta.env.VITE_APP_API_URL,
    wsUrl: import.meta.env.VITE_APP_WS_URL,
  },
}
