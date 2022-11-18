import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.escuelajs.co/api/v1";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
