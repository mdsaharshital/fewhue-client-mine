import apiSlice from "../api/apiSlice";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product/get-product`,
    }),
    getProductPhoto: builder.query({
      query: (id) => `/product/product-photo/${id}`,
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: `order/get-allorders`,
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }),
    }),
    orderProduct: builder.mutation({
      query: (data) => ({
        url: `order/place-order`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductPhotoQuery,
  useOrderProductMutation,
  useGetAllOrdersQuery,
} = productSlice;
