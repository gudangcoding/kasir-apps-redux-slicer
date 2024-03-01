// CartSlicer.js
import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../services/Cartservices";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    setCartData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCartData } = CartSlice.actions;
export default CartSlice.reducer;

export const fetchCartData = () => async (dispatch) => {
  try {
    const CartData = await getCart();
    dispatch(setCartData(CartData));
  } catch (error) {
    console.error("Error fetching Cart data:", error);
  }
};
