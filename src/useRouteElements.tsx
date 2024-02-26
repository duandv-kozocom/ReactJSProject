import { MainLayout } from "@/components/layouts/MainLayout";
import { ROUTE_PATH } from "@/constants/routes";
import { Home } from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import {
  Product,
  ProductCreateAndUpdate,
  ProductDetail,
  ProductsListing,
} from "./pages/Product/Loadable";
import { Cart } from "@/pages/Cart";
import Header from "./components/layouts/Header";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "",
      element: "",
      children: [
        {
          path: ROUTE_PATH.HOME.INDEX,
          element: (
            <MainLayout>
              <Suspense>
                <Home />
              </Suspense>
            </MainLayout>
          ),
        },
      ],
    },
    {
      path: "",
      element: (
        <MainLayout>
          <Product />
        </MainLayout>
      ),
      children: [
        {
          path: ROUTE_PATH.PRODUCTS.LIST,
          element: <ProductsListing />,
        },
        {
          path: ROUTE_PATH.PRODUCTS.CREATE,
          element: <ProductCreateAndUpdate />,
        },
        {
          path: ROUTE_PATH.PRODUCTS.EDIT,
          element: <ProductCreateAndUpdate />,
        },
        {
          path: ROUTE_PATH.PRODUCTS.DETAIL,
          element: <ProductDetail />,
        },
      ],
    },
    {
      path: "",
      element: "",
      children: [
        {
          path: ROUTE_PATH.CART.INDEX,
          element: (
            <Header>
              <Suspense>
                <Cart />
              </Suspense>
            </Header>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <MainLayout>
          <Suspense>
            <NotFound />
          </Suspense>
        </MainLayout>
      ),
    },
  ]);
  return routeElements;
}
