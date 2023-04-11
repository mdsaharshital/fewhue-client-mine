import { createSlice } from "@reduxjs/toolkit";
const storedCart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  filter: {
    category: {
      sortByTag: [],
    },
  },
  productDetails: {},
  cart: storedCart || [],
  isLoading: false,
  isError: false,
  error: "",
};

export const basketSlice = createSlice({
  initialState,
  name: "basket",
  reducers: {
    categorySortByTag: (state, { payload }) => {
      if (!state.filter.category.sortByTag.includes(payload)) {
        return {
          ...state,
          filter: {
            category: {
              sortByTag: [...state.filter.category.sortByTag, payload],
            },
          },
        };
      } else {
        return {
          ...state,
          filter: {
            category: {
              sortByTag: state.filter.category.sortByTag.filter(
                (tag) => tag !== payload
              ),
            },
          },
        };
      }
    },
    resetCategoryFilter: (state) => {
      state.filter = {
        ...state.filter,
        category: {
          sortByTag: [],
        },
      };
    },
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

        // Update the cart in localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return { ...state, cart: updatedCart };
      } else {
        const updatedCart = [...state.cart, { ...productToAdd, quantity: 1 }];

        // Update the cart in localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

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

          // Save the updated cart to localStorage
          localStorage.setItem("cart", JSON.stringify(updatedCart));

          return {
            ...state,
            cart: updatedCart,
          };
        }
      } else {
        const updatedCart = state.cart.filter(
          (product) => product._id !== payload._id
        );

        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return {
          ...state,
          cart: updatedCart,
        };
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((c) => c._id !== payload._id);

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    emptyCart: (state) => {
      state.cart = [];

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});
export const {
  setProductDetails,
  addToCart,
  removeFromCart,
  decreaseCartProduct,
  emptyCart,
  categorySortByTag,
  resetCategoryFilter,
} = basketSlice.actions;
export default basketSlice.reducer;
