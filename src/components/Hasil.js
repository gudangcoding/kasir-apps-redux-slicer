import React, { useEffect } from "react";
import { Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../redux/slicer/CartSlicer";

const Hasil = () => {
  const dispatch = useDispatch();
  const isikeranjang = useSelector((state) => state.cart.isikeranjang);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Col md={3} className="mt-3">
      <h4>
        <strong>Transaksi</strong>
      </h4>
      <hr />

      <Card className="overflow-auto hasil">
        <ListGroup variant="flush">
          {isikeranjang &&
            isikeranjang.map((keranjang) => (
              <ListGroup.Item key={keranjang.id}>
                <Row>
                  <Col xs={2}>
                    <h4>
                      <Badge pill variant="success">
                        1
                      </Badge>
                    </h4>
                  </Col>
                  <Col>
                    <h5>{keranjang.product.nama}</h5>
                    <p>
                      Rp. {numberWithCommas(keranjang.product.harga)} x{" "}
                      {keranjang.jumlah}
                    </p>
                  </Col>
                  <Col>
                    <strong className="float-right">
                      Rp. {numberWithCommas(keranjang.total_harga)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
    </Col>
  );
};

export default Hasil;
