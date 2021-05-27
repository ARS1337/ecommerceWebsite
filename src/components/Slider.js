import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function desc(props) {
  return (
    <Container className="pl-0 pr-0 pt-4 pb-4">
      <Row>
        <Col md={2}>
          <Image src="images/title/Group 208.png" />
        </Col>

        <Col md={10}>
          <Container
            style={{
              wordWrap: "break-word",
              textAlign: "left",
              paddingLeft: 0,
              paddingRight: 0,
              fontFamily: "PoppinsSemiBold",
              fontSize: 14,
              paddingBottom: "5px",
            }}
          >
            ssssssssssssssssssssssssss
          </Container>
          <Container
            style={{
              wordWrap: "break-word",
              textAlign: "left",
              paddingLeft: 0,
              paddingRight: 0,
              fontFamily: "PoppinsRegular",
              fontSize: 12,
            }}
          >
            fffffffffffffffffffffffffdfgdfgdgdgdgdfgfffffffff
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

function Slider(props) {
  const { setCntr, cntr } = props;

  return (
    <>
      <Container fluid className="pr-0 pl-0">
        <Container fluid className="pr-0 pl-0">
          <Row>
            <Col
              md={9}
              style={{ backgroundColor: "white", borderTopRightRadius: "0%" }}
            >
              <Row>
                <Col md={{ offset: 3, span: 3 }}>{desc()}</Col>
                <Col md={3}>{desc()}</Col>
                <Col md={3}>{desc()}</Col>
              </Row>
            </Col>
            <Col
              md={1}
              style={{
                backgroundColor: "white",
                borderTopRightRadius: "70%",
                width: "50px",
              }}
            ></Col>
            <Col md={3} style={{ maxWidth: "120px", marginLeft: "50px" }}>
              <Row>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black",
                    opacity: 0.2,
                  }}
                  onClick={() => {
                    if (cntr > 0) {
                      setCntr(cntr - 1);
                    }
                    console.log("decr", cntr);
                  }}
                >
                  <div style={{ zIndex: 1, opacity: 1 }}>
                    <Image
                      src="/images/title/noun_Arrow Left White.png"
                      fluid
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "white",
                    marginLeft: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    if (cntr < 2) {
                      setCntr(cntr + 1);
                    }
                    console.log("incr", cntr);
                  }}
                >
                  <div>
                    <Image src="/images/title/noun_Arrow Right.png" fluid />
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Slider;
