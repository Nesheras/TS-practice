import { createBrowserRouter } from "react-router-dom";
import { Menu } from "../components/Pages/Menu/Menu";
import { Cart } from "../components/Pages/Cart/Cart";
import { Layout } from "../layout/Menu/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
