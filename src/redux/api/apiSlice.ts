import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pages-of-time-server.vercel.app/",
  }),
  tagTypes: ["books", "book"],
  endpoints: () => ({}),
});
