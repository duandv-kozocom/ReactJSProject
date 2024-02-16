import { Outlet } from 'react-router'

export { ProductsListing } from './Listing'

export function Product() {
  return (
    <div className="">
      <Outlet />
    </div>
  )
}
