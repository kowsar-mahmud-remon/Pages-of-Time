import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
    }),

    SingleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
  }),
});

export const { useGetAllBooksQuery, useSingleBookQuery } = bookApi;
