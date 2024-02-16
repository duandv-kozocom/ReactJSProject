import { toast } from 'react-toastify'

export const reporter = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(error: any) {
    const message = error?.message || error?.response?.data?.message || 'An error has occurred'
    // eslint-disable-next-line
    console.error(error)
    toast.error(typeof message === 'string' ? message : JSON.stringify(message))
  },
  success(message: string) {
    toast.success(message)
  },
  debug(message: string) {
    console.debug(message)
  },
  info(message: string) {
    console.info(message)
  },
}

export default reporter
