import { createBrowserRouter } from "react-router-dom";

import { Cart } from "../components/Pages/Cart/Cart";
import { Layout } from "../layout/Menu/Layout";
import { Product } from "../components/Pages/Product/Product";
import { lazy, Suspense } from "react";
import { Login } from "../components/Pages/Login/Login";
import { Register } from "../components/Pages/Register/Register";
import { AuthLayout } from "../layout/Auth/AuthLayout";
import { RequireAuth } from "../helpers/RequireAuth";
export const Menu = lazy(() => import("../components/Pages/Menu/Menu"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка</>}>
            <Menu />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
]);
