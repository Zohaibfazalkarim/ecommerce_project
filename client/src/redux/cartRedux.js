import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
     removeProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex((p) => p._id === productId);
      if (productIndex > -1) {
        const product = state.products[productIndex];
        state.products.splice(productIndex, 1);
        state.quantity -= product.quantity;
        state.total -= product.price * product.quantity;
      }
    },
      clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct,removeProduct,clearCart } = cartSlice.actions;
export default cartSlice.reducer;