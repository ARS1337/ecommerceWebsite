import React from "react";
import { Container, Image, Col, Row, Jumbotron } from "react-bootstrap";

function WhyChoose(props) {
  const imageData = [
    "/images/whyChoose/Group 179.png",
    "/images/whyChoose/noun_guarantee_2519048.png",
    "/images/whyChoose/noun_materials_308312.png",
    "/images/whyChoose/noun_payment_2281176.png",
  ];
  const Title = ({ x }) => {
    return (
      <Container
        style={{
          fontsize: 16,
          fontFamily: "PoppinsSemiBold",
          paddingTop: "1em",
        }}
      >
        {x}
      </Container>
    );
  };
  const Content = ({ x }) => {
    return (
      <Container
        style={{
          wordWrap: "break-word",
          fontFamily: "PoppinsRegular",
          fontSize: 13,
          paddingTop: "1em",
          color: "#808080",
        }}
      >
        {x}
      </Container>
    );
  };
  const Images = ({ x }) => {
    return (
      <Container>
        <Image src={x} style={{ padding: "1em", backgroundColor: "#FFF3DF" }} />
      </Container>
    );
  };
  return (
    <>
      <Container style={{ paddingTop: "1em", paddingBottom: "1em" }}>
        <Col>
          <Container
            style={{
              fontFamily: "PoppinsLight",
              fontSize: 29,
              textAlign: "center",
              paddingBottom: "2em ",
              paddingTop: "1em",
            }}
          >
            Why should you choose us?
          </Container>
        </Col>
        <Col>
          <Row>
            {imageData.map((x) => (
              <Col md={3}>
                <Container className="pr-0 pl-0">
                  <Images x={x} />
                  <Title x={"Long Title fadfsdfsd"} />
                  <Content
                    x={
                      "sdfsdfsfsfsdfssdsssssssssdddd ddddddddddddddddddasdadasddadasd "
                    }
                  />
                </Container>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default WhyChoose;
