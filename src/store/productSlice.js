import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

export const Status = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: Status.IDLE,
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload; // Assuming action.payload is an array
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
  return async function fetchProductThunk(dispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(setProduct(data));
      //   console.log(data);
      dispatch(setStatus(Status.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
