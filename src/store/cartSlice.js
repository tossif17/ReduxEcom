// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    plus(state, action) {
      // Find the product in the state and increment its quantity
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        // Ensure that quantity is initialized before incrementing
        product.quantity = (product.quantity || 0) + 1;
      }
    },
  },
});

export const { add, plus } = cartSlice.actions;
export default cartSlice.reducer;
