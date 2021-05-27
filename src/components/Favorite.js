import React, { useState } from "react";
import { Container, Image, Col, Row, Jumbotron, Figure } from "react-bootstrap";

import styled from "styled-components";

function Favorite(props) {
  const [favorite, setFavorite] = useState(false);
  const ImageContainer = styled(Container)`
    position: absolute;
    right: 0.1em;
    top: 0.1em;
    width: max-content;
    padding: 13px;
    margin: 10px;
    border-radius: 50%;
    z-index: 2;
    background-color: ${(props) => (props.favorite ? "#FBB03B" : "white")};
  `;
  return (
    <>
      {favorite ? (
        <ImageContainer
          // style={{ backgroundColor: "red" }}
          className="clickable"
          favorite
          onClick={() => {
            setFavorite(!favorite);
          }}
        >
          <Image src="/images/shirts/noun_Heart_2102871 (1).png" fluid />
        </ImageContainer>
      ) : (
        <ImageContainer
          // style={{ backgroundColor: "red" }}
          className="clickable"
          onClick={() => {
            setFavorite(!favorite);
          }}
        >
          <Image src="/images/shirts/noun_Heart_2102871 (1).png" fluid />
        </ImageContainer>
      )}
    </>
  );
}

export default Favorite;
