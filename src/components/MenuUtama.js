import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const MenuUtama = () => {
  return (
    <Navbar expand="lg" className=" bg-primary text-white">
      <Container>
        <Navbar.Brand href="/">Kasirku</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
            <Nav.Link href="/kategori">Kategori</Nav.Link>
            <Nav.Link href="/produk">Produk</Nav.Link>
            <Nav.Link href="/order">Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
