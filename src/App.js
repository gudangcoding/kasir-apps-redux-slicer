import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, User, Profil, Kategori, Produk, Order } from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavbarComponents from "./components/NavbarComponents";
function App() {
  return (
    <>
      <NavbarComponents />

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/kategori" element={<Kategori />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
