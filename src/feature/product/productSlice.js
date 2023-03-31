import apiSlice from "../api/apiSlice";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      providesTags: ["addProducts", "deleteProducts"],
      query: () => `/product/get-product`,
    }),
    getProductPhoto: builder.query({
      query: (id) => `/product/product-photo/${id}`,
    }),
    getAllOrders: builder.query({
      providesTags: ["getAllOrders"],
      query: () => ({
        url: `order/get-allorders`,
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }),
    }),
    updateOrderStatus: builder.mutation({
      invalidatesTags: ["getAllOrders"],
      query: ({ status, id }) => ({
        url: `order/order-status/${id}`,
        method: "PUT",
        body: { status },
        headers: {
          Authorization: localStorage.getItem("token"),
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
      invalidatesTags: ["addProducts"],
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
    updateProduct: builder.mutation({
      query: (product) => {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("category", product.category);
        formData.append("photo", product.photo[0]);
        return {
          url: `product/update-product/${product._id}`,
          method: "PUT",
          body: formData,
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        };
      },
      invalidatesTags: ["addProducts"],
    }),
    deleteProduct: builder.mutation({
      invalidatesTags: ["deleteProducts"],
      query: (id) => ({
        url: `/product/delete-product/${id}`,
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
  useGetAllProductsQuery,
  useGetProductPhotoQuery,
  useOrderProductMutation,
  useGetAllOrdersQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useUpdateOrderStatusMutation,
} = productSlice;
