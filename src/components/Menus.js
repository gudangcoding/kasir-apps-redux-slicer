import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdukData } from "../redux/slicer/ProdukSlicer";

const Menus = () => {
  const dispatch = useDispatch();
  const produkData = useSelector((state) => state.produk.data);

  useEffect(() => {
    // Memuat data produk saat komponen dimuat
    dispatch(fetchProdukData());
  }, [dispatch]);

  return (
    <>
      {produkData &&
        produkData.map((item) => (
          <Col key={item.id} md={4} xs={6} className="mb-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img
                variant="top"
                src={`assets/images/${item.category.nama.toLowerCase()}/${
                  item.gambar
                }`}
              />
              <Card.Body>
                <Card.Title>{item.nama}</Card.Title>
                <Card.Text>Rp {item.harga.toLocaleString("id-ID")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default Menus;
