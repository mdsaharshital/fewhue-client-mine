import apiSlice from "../api/apiSlice";

export const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      providesTags: ["deleteCategory", "addCategory"],
      query: () => `/category/getall-category`,
    }),
    addCategory: builder.mutation({
      invalidatesTags: ["addCategory"],
      query: (name) => ({
        url: `/category/create-category`,
        method: "POST",
        body: { name },
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }),
    }),
    updateCategory: builder.mutation({
      invalidatesTags: ["addCategory"],
      query: ({ name, id }) => ({
        url: `/category/update-category/${id}`,
        method: "PUT",
        body: { name },
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }),
    }),
    deleteCategory: builder.mutation({
      invalidatesTags: ["deleteCategory"],
      query: (id) => ({
        url: `/category/delete-category/${id}`,
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categorySlice;
