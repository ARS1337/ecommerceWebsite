import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import styled from "styled-components";

function Footer(props) {
  const data = [
    "sfsfsdf",
    "sdfsdfsfs",
    "sfdsf",
    "sfsfsdf",
    "sdfsdfsfs",
    "sfdsf",
  ];
  const ImageData = [
    "/images/footer/002-facebook-logo.png",
    "/images/footer/004-linkedin-logo.png",
    "/images/footer/005-youtube.png",
    "/images/footer/Group 25.png",
    "/images/footer/instagram (1).png",
  ];
  const Title = ({ x }) => {
    return (
      <Container
        className="clickable"
        style={{
          fontFamily: "PoppinBold",
          fontSize: 16,
          paddingBottom: "1.5em",
          fontWeight: "600",
        }}
      >
        {x}
      </Container>
    );
  };

  const Contents = ({ x }) => {
    return (
      <Container
        className="clickable"
        style={{
          fontFamily: "PoppinRegular",
          fontSize: 13,
          paddingBottom: "0.5em",
          fontWeight: 500,
        }}
      >
        {x}
      </Container>
    );
  };

  const Temp = () => {
    return (
      <Container>
        {data.map((x, idx) =>
          idx == 0 ? <Title x={x} /> : <Contents x={x} />
        )}
      </Container>
    );
  };
  const Images = ({ x }) => {
    return (
      <NewImages
        src={x}
        style={{ paddingRight: "1.5em" }}
        className="clickable"
      />
    );
  };
  const NewImages = styled(Image)`
    background-color: "orange";
    padding-right: "1.5em";
  `;
  return (
    <>
      <Container style={{ paddingTop: "2em", paddingBottom: "2em" }}>
        <Row>
          <Col md={5}>
            <Row style={{ paddingBottom: "2em" }}>
              <Col>
                <Container className="d-flex justify-content-start align-items-center clickable">
                  <Image src="/images/footer/noun_cloth_2129414.png" fluid />
                  <div style={{ color: "#FBB03B", paddingLeft: "10px" }}>
                    E-
                  </div>
                  <div>Shop</div>
                </Container>
              </Col>
            </Row>
            <Container style={{ color: "#808080" }}>
              House My Brand designs clothing for the young, the old & everyone
              in between – but most importantly, for the fashionable
            </Container>
            <Row style={{ paddingTop: "2em" }}>
              <Container>
                <Container>
                  {ImageData.map((x) => (
                    <Images x={x} />
                  ))}
                </Container>
              </Container>
            </Row>
          </Col>
          <Col md={{ offset: 1, span: 6 }}>
            <Row>
              <Col md={4}>
                <Temp />
              </Col>
              <Col md={4}>
                <Temp />
              </Col>
              <Col md={4}>
                <Temp />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ paddingTop: "3em", paddingBottom: "2em" }}>
          <Container
            style={{
              fontFamily: "PoppinRegular",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
