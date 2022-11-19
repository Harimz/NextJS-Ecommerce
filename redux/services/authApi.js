import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "/";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (credentials) => ({
        url: "/api/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
