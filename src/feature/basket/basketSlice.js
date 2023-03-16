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
      const selectedProduct = state.cart.find(
        (product) => product._id === payload._id
      );
      console.log("sele", selectedProduct);
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: 1 }],
      };
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((c) => c._id !== payload._id);
    },
    emptyCart: (state, { payload }) => {
      state.cart = [];
    },
  },
});
export const { setProductDetails, addToCart } = basketSlice.actions;
export default basketSlice.reducer;
