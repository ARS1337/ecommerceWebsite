import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

function Banner(props) {
  const banners = [banner1(), banner2(), banner3(), banner4()];
  let random = Math.floor((Math.random() * 100) % 4);
  return (
    <Container style={{ padding: "1em", paddingTop: "2em" }}>
      {banners[random]}
      {console.log(random)}
    </Container>
  );
}

const banner4 = () => {
  return (
    <Container
      style={{
        backgroundImage: 'url("/images/banner/Mask Group 10.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        backgroundColor: "#F9B700",
        padding: "2em",
      }}
    >
      <Container style={{ color: "white", fontFamily: "PoppinsSemiBold" }}>
        <Col md={{ offset: 1, span: 5 }}>
          <Container style={{ fontSize: 13 }}>
            Shop the classic collection
          </Container>
        </Col>
        <Col>
          <Row className="d-flex align-items-center">
            <Col md={{ offset: 1, span: 4 }}>
              <Container style={{ fontSize: 37 }}>Sale up to 80%</Container>
            </Col>
            <Col md={2}>
              <Container style={{ fontSize: 13 }}>
                <Container
                  style={{
                    padding: "15px",
                    borderRadius: "25px",
                    width: "max-content",
                    backgroundColor: "black",
                  }}
                >
                  Limited time only!
                </Container>
              </Container>
            </Col>
            <Col md={{ offset: 2, span: 2 }}>
              <Container style={{ fontSize: 14 }}>
                Shop now
                <Image
                  src="/images/banner/noun_Arrow Right.png"
                  fluid
                  style={{ paddingLeft: "10px" }}
                />
              </Container>
            </Col>
          </Row>
        </Col>
      </Container>
    </Container>
  );
};

const temp = (imageSrc, headingText, buttonText, textPos, heading) => {
  return (
    <Container
      fluid
      className="pr-0 pl-0 d-flex  justify-content-start align-items-end"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Row>
        <Col
          md={
            textPos == "left"
              ? { span: 6 }
              : textPos == "right"
              ? { offset: 6, span: 6 }
              : ""
          }
        >
          <Container
            className="d-flex  justify-content-start align-items-end"
            style={{ height: "100%" }}
            fluid
          >
            <Col>
              {heading && heading.length > 0 ? (
                <Row>
                  <Container
                    style={{
                      fontFamily: "PoppinsSemiBold",
                      fontSize: 14,
                      color: "#0008FF",
                      paddingTop: "0em",
                    }}
                  >
                    {heading}
                  </Container>
                </Row>
              ) : null}
              {headingText ? (
                <Row>
                  <Container
                    style={{
                      fontFamily: "PoppinsRegular",
                      fontSize: 25,
                      paddingTop: "4.5em",
                    }}
                  >
                    {headingText}
                  </Container>
                </Row>
              ) : null}

              {buttonText ? (
                <Row>
                  <Col md={6}>
                    <Container
                      style={{
                        fontFamily: "PoppinsSemiBold",
                        fontSize: 13,
                        backgroundColor: "white",
                        padding: "15px",
                        borderRadius: "30px",
                        width: "max-content",
                        marginTop: "3em",
                        marginBottom: "3em",
                        padding: "1em",
                      }}
                    >
                      {buttonText}
                    </Container>
                  </Col>
                </Row>
              ) : null}
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
const banner3 = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          {temp(
            "/images/banner/adult-black-clothes-dark-1040421.png",
            "New arrivals are now in!",
            "Show collection",
            "left",
            ""
          )}
        </Col>
        <Col md={3}>
          {temp(
            "/images/banner/beach-black-pants-black-shirt-2001293.png",
            "Basic t-shirts $29,99",
            "More details",
            "left",
            ""
          )}
        </Col>
        <Col md={3}>
          {temp(
            "/images/banner/person-sale-sign-1785138.png",
            "Sale this summer",
            "VIEW ALL",
            "left",
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
};

const banner2 = () => {
  return (
    <Container
      style={{
        backgroundImage: `url('/images/banner/ship.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3em",
        zIndex: 0,
      }}
    >
      <Row className="d-flex justify-content-start align-items-center">
        <Col
          md={{ offset: 1, span: 4 }}
          style={{ fontFamily: "PoppinsRegular", fontSize: 25, color: "white" }}
        >
          New summer collection
        </Col>
        <Col md={6}>
          <Container
            className="d-flex justify-content-start align-items-center"
            style={{
              fontFamily: "PoppinsSemiBold",
              fontSize: 12,
              color: "white",
              position: "relative",
              zIndex: 1,
            }}
          >
            For Men and Women
          </Container>
          <Container
            style={{
              height: "3em",
              backgroundColor: "black",
              opacity: 0.24,
              position: "absolute",
              top: "-70%",
              borderRadius: "30px",
              width: "max-content",
            }}
          >
            For Men and Women
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const banner1 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} style={{ backgroundColor: "#E5E5E5" }}>
            <Container
              className="pr-0 pl-0"
              style={{
                backgroundImage: "url('/images/banner/Mask Group 1.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Row>
                <Col md={{ offset: 6, span: 6 }}>
                  <Container className="d-flex  justify-content-start ">
                    <Col>
                      <Row>
                        <Container
                          style={{
                            fontFamily: "PoppinsSemiBold",
                            fontSize: 14,
                            color: "#0008FF",
                            paddingTop: "4em",
                          }}
                        >
                          Women
                        </Container>
                      </Row>
                      <Row>
                        <Container
                          style={{
                            fontFamily: "PoppinsSemiBold",
                            fontSize: 25,
                            paddingTop: "0.5em",
                          }}
                        >
                          dfdsfdsfdsfg
                        </Container>
                      </Row>
                      <Row>
                        <Container
                          style={{ fontFamily: "PoppinsLight", fontSize: 25 }}
                        >
                          dfd
                        </Container>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Container
                            style={{
                              fontFamily: "PoppinsSemiBold",
                              fontSize: 13,
                              backgroundColor: "white",
                              padding: "15px",
                              borderRadius: "30px",
                              width: "max-content",
                              marginTop: "3em",
                              marginBottom: "5em",
                              padding: "1em",
                            }}
                          >
                            dsf sdfg
                          </Container>
                        </Col>
                      </Row>
                    </Col>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
          {/* 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
          <Col md={6} style={{ backgroundColor: "#ECECEC" }}>
            <Container
              className="pr-0 pl-0"
              style={{
                backgroundImage: "url('/images/banner/Mask Group 2.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Row>
                <Col md={{ offset: 6, span: 6 }}>
                  <Container className="d-flex  justify-content-start ">
                    <Col>
                      <Row>
                        <Container
                          style={{
                            fontFamily: "PoppinsSemiBold",
                            fontSize: 14,
                            color: "#0008FF",
                            paddingTop: "4em",
                          }}
                        >
                          Women
                        </Container>
                      </Row>
                      <Row>
                        <Container
                          style={{
                            fontFamily: "PoppinsSemiBold",
                            fontSize: 25,
                            paddingTop: "0.5em",
                          }}
                        >
                          dfdsfdsfdsfg
                        </Container>
                      </Row>
                      <Row>
                        <Container
                          style={{ fontFamily: "PoppinsLight", fontSize: 25 }}
                        >
                          dfd
                        </Container>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Container
                            style={{
                              fontFamily: "PoppinsSemiBold",
                              fontSize: 13,
                              backgroundColor: "white",
                              padding: "15px",
                              borderRadius: "30px",
                              width: "max-content",
                              marginTop: "3em",
                              marginBottom: "5em",
                              padding: "1em",
                            }}
                          >
                            dsf sdfg
                          </Container>
                        </Col>
                      </Row>
                    </Col>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Banner;
