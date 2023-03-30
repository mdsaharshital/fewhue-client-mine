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
    addProduct: builder.mutation({
      query: (product) => {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("category", product.category);
        formData.append("photo", product.photo[0]);
        return {
          url: `product/create-product`,
          method: "POST",
          body: formData,
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductPhotoQuery,
  useOrderProductMutation,
  useGetAllOrdersQuery,
  useAddProductMutation,
} = productSlice;
