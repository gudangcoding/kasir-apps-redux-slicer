// KategoriSlicer.js
import { createSlice } from "@reduxjs/toolkit";
import { getKategori } from "../../services/Kategoriservices";

const KategoriSlice = createSlice({
  name: "kategori",
  initialState: {
    data: [],
  },
  reducers: {
    setKategoriData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setKategoriData } = KategoriSlice.actions;
export default KategoriSlice.reducer;

export const fetchKategoriData = () => async (dispatch) => {
  try {
    const KategoriData = await getKategori();
    dispatch(setKategoriData(KategoriData));
  } catch (error) {
    console.error("Error fetching Kategori data:", error);
  }
};
