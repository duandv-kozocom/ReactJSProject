import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Auth/Login'
import { ErrorPage } from '@/pages/ErrorPage'
import { About } from '@/pages/About'
import { MainLayout } from '@/components/layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

export function Routes() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  )
}
