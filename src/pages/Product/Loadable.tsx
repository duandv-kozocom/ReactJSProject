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

export const ProductCreating = lazyLoad(
  () => import('./Creating'),
  module => module.ProductCreating,
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

export const ProductEditing = lazyLoad(
  () => import('./Editing'),
  module => module.ProductEditing,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
)

