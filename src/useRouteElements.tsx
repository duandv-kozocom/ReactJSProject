import { MainLayout } from "@/components/layouts/MainLayout";
import { ROUTE_PATH } from "@/constants/routes";
import { Home } from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { Suspense, useEffect, useState } from "react";
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
  const [productsInCart, setProductsInCart] = useState<any>();
  const [searchTerm, setSearchTerm] = useState<any>();
  useEffect(() => {
    const storedValue = sessionStorage.getItem("cartItems");
    if (storedValue) {
      const cartItemsArray = JSON.parse(storedValue);
      const itemCount = cartItemsArray ? cartItemsArray.length : 0;
      setProductsInCart(itemCount);
    }
  }, []);
  const routeElements = useRoutes([
    {
      path: "",
      element: "",
      children: [
        {
          path: ROUTE_PATH.HOME.INDEX,
          element: (
            <MainLayout
              productsInCart={productsInCart}
              setSearchTerm={setSearchTerm}
            >
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
        <MainLayout
          productsInCart={productsInCart}
          setSearchTerm={setSearchTerm}
        >
          <Product />
        </MainLayout>
      ),
      children: [
        {
          path: ROUTE_PATH.PRODUCTS.LIST,
          element: (
            <ProductsListing
              setProductsInCart={setProductsInCart}
              searchTerm={searchTerm}
            />
          ),
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
            <Header
              productsInCart={productsInCart}
              setSearchTerm={setSearchTerm}
            >
              <Suspense>
                <Cart setProductsInCart={setProductsInCart} />
              </Suspense>
            </Header>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <MainLayout
          productsInCart={productsInCart}
          setSearchTerm={setSearchTerm}
        >
          <Suspense>
            <NotFound />
          </Suspense>
        </MainLayout>
      ),
    },
  ]);
  return routeElements;
}
