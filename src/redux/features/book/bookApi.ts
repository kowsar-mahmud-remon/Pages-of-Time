import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
    }),

    SingleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllBooksQuery, useSingleBookQuery, useAddBookMutation } =
  bookApi;
