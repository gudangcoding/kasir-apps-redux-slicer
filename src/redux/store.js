import { configureStore } from "@reduxjs/toolkit";
import ProdukReducer from "./slicer/ProdukSlicer";

const store = configureStore({
  reducer: {
    produk: ProdukReducer,
  },
});

console.log("Store Berhasil dipanggil : ", store.getState());

store.subscribe(() => {
  console.log("Store Berhasil dikirim : ", store.getState());
});

export default store;
