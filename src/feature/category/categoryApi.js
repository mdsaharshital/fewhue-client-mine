import apiSlice from "../api/apiSlice";

export const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => `/category/getall-category`,
    }),
  }),
});

export const { useGetAllCategoryQuery } = categorySlice;
