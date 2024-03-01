import { configureStore } from "@reduxjs/toolkit";
import KategoriReducer from "./slicer/KategoriSlicer";
import ProdukReducer from "./slicer/ProdukSlicer";
import CartReducer from "./slicer/CartSlicer";

const store = configureStore({
  reducer: {
    produk: ProdukReducer,
    kategori: KategoriReducer,
    cart: CartReducer,
  },
});

// console.log("Store Berhasil dipanggil : ", store.getState());

// store.subscribe(() => {
//   console.log("Store Berhasil dikirim : ", store.getState());
// });

export default store;
