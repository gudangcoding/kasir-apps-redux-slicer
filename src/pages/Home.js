// Home.js
import React from "react";

import { Col, Row } from "react-bootstrap";
import ListCategories from "../components/ListCategories";
import Menus from "../components/Menus";
import Hasil from "../components/Hasil";

const Home = () => {
  return (
    <div className="mt-3">
      <Row>
        <ListCategories />
        <Col className="mt-3">
          <h4>
            <strong>Daftar Produk</strong>
          </h4>
          <hr />
          <Row className="overflow-auto menu">
            <Menus />
          </Row>
        </Col>
        <Hasil />
      </Row>
    </div>
  );
};

export default Home;
