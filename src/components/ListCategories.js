// ListCategories.js
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";
import { Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchKategoriData } from "../redux/slicer/KategoriSlicer";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  if (nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};

const ListCategories = () => {
  const dispatch = useDispatch();
  const kategoriData = useSelector((state) => state.kategori.data);

  useEffect(() => {
    // Memuat data kategori saat komponen dimuat
    dispatch(fetchKategoriData());
  }, [dispatch]);

  return (
    <Col md={2} className="mt-3">
      <h4>
        <strong>Kategori</strong>
      </h4>
      <hr />
      <ListGroup>
        {kategoriData.map((kat) => (
          <ListGroup.Item key={kat.id}>
            <h5>
              <Icon nama={kat.nama} /> {kat.nama}
            </h5>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

export default ListCategories;
