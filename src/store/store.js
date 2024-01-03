import { configureStore } from "@reduxjs/toolkit";
import cardreducer from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cardreducer,
    product: productReducer,
  },
});
export default store;
