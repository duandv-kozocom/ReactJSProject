/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from '@/utils/loadable'
import { LoadingWrapper } from '@/components/ui/LoadingWrapper'
import { LoadingIndicator } from '@/components/ui/LoadingIndicator'

export const Product = lazyLoad(
  () => import('./index'),
  module => module.Product,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
)

export const ProductsListing = lazyLoad(
  () => import('./Listing'),
  module => module.ProductsListing,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
)

export const ProductCreateAndUpdate = lazyLoad(
  () => import('./CreateAndUpdate'),
  module => module.ProductCreateAndUpdate,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
)

export const ProductDetail = lazyLoad(
  () => import('./Detail'),
  module => module.ProductDetail,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
)

