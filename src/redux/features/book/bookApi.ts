import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),

    getAllBooksWishlist: builder.query({
      query: (userEmail) => `/wishlist/${userEmail}`,
      providesTags: ["books"],
    }),

    SingleBook: builder.query({
      query: (id) => `/book/${id}`,
      providesTags: ["book"],
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    addBookWishlist: builder.mutation({
      query: (data) => ({
        url: `/wishlist`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    deleteBook: builder.mutation({
      query: (data) => ({
        url: `/delete-book`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    updateBook: builder.mutation({
      query: (data) => ({
        url: `/update-book`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useSingleBookQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetAllBooksWishlistQuery,
  useAddBookWishlistMutation,
} = bookApi;
