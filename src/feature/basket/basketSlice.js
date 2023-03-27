import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetails: {},
  cart: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const basketSlice = createSlice({
  initialState,
  name: "basket",
  reducers: {
    setProductDetails: (state, { payload }) => {
      if (state.productDetails) {
        state.productDetails = {};
        state.productDetails = payload;
      } else {
        state.productDetails = payload;
      }
    },
    addToCart: (state, { payload }) => {
      const productToAdd = payload;
      const existingProductIndex = state.cart.findIndex(
        (product) => product._id === productToAdd._id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map((product, index) =>
          index === existingProductIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return { ...state, cart: updatedCart };
      } else {
        const updatedCart = [...state.cart, { ...productToAdd, quantity: 1 }];
        return { ...state, cart: updatedCart };
      }
    },
    decreaseCartProduct: (state, { payload }) => {
      const productIndex = state.cart.findIndex(
        (product) => product._id === payload._id
      );
      const product = state.cart[productIndex];
      if (product.quantity > 1) {
        if (productIndex !== -1) {
          const updatedProduct = {
            ...state.cart[productIndex],
            quantity: state.cart[productIndex].quantity - 1,
          };

          const updatedCart = [...state.cart];
          updatedCart.splice(productIndex, 1, updatedProduct);

          return {
            ...state,
            cart: updatedCart,
          };
        }
      } else {
        return {
          ...state,
          cart: state.cart.filter((product) => product._id !== payload._id),
        };
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((c) => c._id !== payload._id);
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});
export const {
  setProductDetails,
  addToCart,
  removeFromCart,
  decreaseCartProduct,
  emptyCart,
} = basketSlice.actions;
export default basketSlice.reducer;