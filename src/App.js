import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuUtama } from "./components/MenuUtama";
import { Home, User, Profil, Kategori, Produk, Order } from "./pages";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <>
      <MenuUtama />
      <Container className="mb-5" variant="fluid">
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
      </Container>
    </>
  );
}

export default App;
