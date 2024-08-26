import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "https://purpleschool.ru";

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: "/pizza-api-demo/products" }),
    }),
    getProductsById: builder.query({
      query: (id) => ({ url: `/pizza-api-demo/products/${id}` }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = pizzaApi;
