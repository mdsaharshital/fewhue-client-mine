import apiSlice from "../api/apiSlice";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product/get-product`,
    }),
    getProductPhoto: builder.query({
      query: (id) => `/product/product-photo/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductPhotoQuery } = productSlice;
