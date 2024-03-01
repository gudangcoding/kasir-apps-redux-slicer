// Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdukData } from "../redux/slicer/ProdukSlicer";
import { Card, Col, Row } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const produkData = useSelector((state) => state.produk.data);

  useEffect(() => {
    // Memuat data produk saat komponen dimuat
    dispatch(fetchProdukData());
  }, [dispatch]);

  return (
    <Col className="mt-8" md={12} mr-auto>
      <h4>
        <strong>Daftar Produk</strong>
      </h4>
      <hr />
      <Row className="overflow-auto menu">
        {produkData.map((item) => (
          <Card style={{ width: "18rem" }} key={item.id}>
            <Card.Img
              variant="top"
              src={
                "assets/images/" +
                item.category.nama.toLowerCase() +
                "/" +
                item.gambar
              }
            />
            <Card.Body>
              <Card.Title>Rp {item.harga.toLocaleString("id-ID")}</Card.Title>
              <Card.Text>{item.nama}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Col>
  );
};

export default Home;
