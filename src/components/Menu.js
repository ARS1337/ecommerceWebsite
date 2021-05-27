import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Menu(props) {
  const { menu, showMenu } = props;
  const data = [
    "lifestyle",
    "runnning",
    "soccer",
    "lifestyle",
    "runnning",
    "soccer",
    "runnning",
    "soccer",
  ];

  const temp = () => {
    return data.map((x, idx) => {
      return idx == 0 ? (
        <Row
          style={{
            fontFamily: "PoppinsSemiBold",
            fontSize: 14,
            lineHeight: "3em",
          }}
        >
          {x}
        </Row>
      ) : (
        <Row
          style={{
            fontFamily: "PoppinsRegular",
            fontSize: 13,
            lineHeight: "2em",
          }}
        >
          {x}
        </Row>
      );
    });
  };

  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "white",
          position: "absolute",
          color: "black",
          zIndex: 1,
        }}
        onMouseLeave={() => {
          showMenu("none");
          console.log(menu);
        }}
      >
        <Row>
          <Col md={{ offset: 1, span: 2 }}>
            <Row style={{ height: "3em" }}></Row>
            {["sale", "Best Sellers", "Latest arrivals"].map((x) => (
              <Row
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 14,
                  lineHeight: "2em",
                }}
              >
                {x}
              </Row>
            ))}
          </Col>
          <Col md={6}>
            <Row>
              <Col md={4}>{temp()}</Col>
              <Col md={4}>{temp()}</Col>
              <Col md={4}>{temp()}</Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row style={{ padding: 10 }}>
              <Container>
                <Image src="/images/title/titleMenupic.png" />
              </Container>
            </Row>
            <Row style={{ padding: 10 }}>
              <Container>
                <Image src="/images/title/titleMenupic2.png" />
              </Container>
            </Row>
            <Row style={{ padding: 10 }}>
              <Container>
                <Image src="/images/title/titleMenupic3.png" />
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Menu;
