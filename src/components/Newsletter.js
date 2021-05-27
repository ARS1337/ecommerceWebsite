import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function Newsletter(props) {
  const newsletters = [letter1(), letter2()];
  let random = Math.floor((Math.random() * 100) % 2);

  return (
    <Container style={{ padding: "1em", paddingTop: "2em" }}>
      {/* {newsletters[random]} */}
      {letter2()}
    </Container>
  );
}

const letter2 = () => {
  return (
    <Container
      style={{
        backgroundImage: "url('/images/newsletter/Mask Group 5.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        padding: "2em",
      }}
    >
      <Row className="d-flex align-items-center">
        <Col md={2}>
          <Container
            style={{
              padding: "0.5em",
              backgroundColor: "#FBB03B",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
              fontFamily: "PoppinsSemiBold",
              fontSize: "30px",
            }}
          >
            -10%
          </Container>
        </Col>
        <Col md={5}>
          {" "}
          <Container
            style={{
              padding: "0.7em",
              fontFamily: "PoppinsRegular",
              fontSize: 26,
              color: "white",
            }}
          >
            Subscribe to our newsletter and receive exclusive offers every week
          </Container>
        </Col>
        <Col md={3}>
          {" "}
          <Container
            style={{
              padding: "15px",
              borderRadius: "40px",
              width: "max-content",
              backgroundColor: "white",
              padding: "1em",
              fontFamily: "PoppinsRegular",
              fontSize: 13,
              paddingRight: "4em",
              color: "#ABABAB",
              whiteSpace: "nowrap",
            }}
          >
            <input placeholder="Enter your email" style={{ border: "0px" }} />
          </Container>
        </Col>
        <Col md={1}>
          <Container
            style={{
              padding: "15px",
              borderRadius: "25px",
              width: "max-content",
              backgroundColor: "#FBB03B",
              padding: "1em",
              fontFamily: "PoppinsSemiBold",
              fontSize: 13,
              color: "black",
            }}
          >
            Get your discount
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const letter1 = () => {
  return (
    <Container
      style={{
        backgroundImage: [
          'url("/images/newsletter/blake-wisz-GFrBMipOd_E-unsplash.png")',
          'url("/images/newsletter/newsletter1.png")',
        ],
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Row>
        <Col md={{ offset: 3, span: 6 }}>
          <Container
            style={{
              padding: "0.7em",
              fontFamily: "PoppinsRegular",
              fontSize: 26,
              color: "white",
            }}
          >
            Subscribe to our newsletter and receive exclusive offers every week
          </Container>
        </Col>
        <Col md={{ offset: 3, span: 6 }}>
          <Row
            style={{
              padding: "2em",
            }}
          >
            <Col md={8}>
              <Container
                style={{
                  padding: "15px",
                  borderRadius: "25px",
                  width: "fit-content",
                  backgroundColor: "white",
                  padding: "1em",
                  fontFamily: "PoppinsRegular",
                  fontSize: 13,
                  paddingRight: "16em",
                  color: "#ABABAB",
                }}
              >
                {" "}
                <input
                  type="text"
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    border: "0px",
                  }}
                />
              </Container>
            </Col>
            <Col md={4}>
              <Container
                style={{
                  padding: "15px",
                  borderRadius: "25px",
                  width: "max-content",
                  backgroundColor: "#FBB03B",
                  padding: "1em",
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 13,
                }}
              >
                Subscribe
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Newsletter;
