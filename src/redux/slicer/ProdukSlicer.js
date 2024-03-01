// produkSlicer.js
import { createSlice } from "@reduxjs/toolkit";
import { getProduk } from "../../services/produkServices";

const produkSlice = createSlice({
  name: "produk",
  initialState: {
    data: [],
  },
  reducers: {
    setProdukData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProdukData } = produkSlice.actions;
export default produkSlice.reducer;

export const fetchProdukData = () => async (dispatch) => {
  try {
    const produkData = await getProduk();
    dispatch(setProdukData(produkData));
  } catch (error) {
    console.error("Error fetching produk data:", error);
  }
};
