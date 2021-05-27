import React, { useState } from "react";
import { Container, Image, Col, Row, Jumbotron, Figure } from "react-bootstrap";

function AddToCart(props) {
  const { productId } = props;
  const AddToCartfunction = () => {
    //add to main store
    console.log("before click:" + productId);
  };
  return (
    <>
      <Container className="d-flex justify-content-start clickable">
        <Image
          src="/images/shirts/noun_cart_2102832 (4).png"
          fluid
          onClick={AddToCartfunction}
        />
        <Container>Add to cart</Container>
      </Container>
    </>
  );
}

export default AddToCart;
