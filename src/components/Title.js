import React, { useState } from "react";
import { Container, Image, Col, Row, Jumbotron } from "react-bootstrap";
import Menu from "./Menu";
import Slider from "./Slider";

function Title(props) {
  const [search, setSearch] = useState(false);
  const mainImagesurl = [
    "/images/title/joao-silas-SfkLX6fUObk-unsplash@2x.png",
    "/images/title/beautiful-beauty-casual-2829173.png",
    "/images/title/beautiful-beauty-casual-2830170.png",
  ];
  const [cntr, setCntr] = useState(0);
  const [menu, showMenu] = useState("none");
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: [
            `url("/images/title/beautiful-clothing-fashion-2498791.png")`,
            `url(${mainImagesurl[cntr]})`,
          ],
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Container
          style={{
            color: menu !== "none" ? "black" : "white",
            paddingTop: "1.5em",
            paddingBottom: "1.5em",
            backgroundColor: menu === "none" ? "" : "white",
          }}
          fluid
        >
          <Row>
            <Col md={2}>
              <Row>
                <Col md={4}></Col>
                <Col md={8} className="d-flex align-items-center">
                  <Image
                    src={
                      menu === "none"
                        ? "/images/title/noun_cloth_white.png"
                        : "/images/title/noun_cloth_black.png"
                    }
                    className="mr-3"
                  />
                  <div style={{ color: menu === "none" ? "white" : "#FBB03B" }}>
                    E-
                  </div>
                  <div>Shop</div>
                </Col>
              </Row>
            </Col>
            <Col md={8}>
              <Row
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 14,
                  height: "100%",
                }}
                className="d-flex align-items-center"
              >
                <Col md={4}></Col>

                <Col md={4}>
                  <Row>
                    <Col
                      onMouseEnter={() => {
                        showMenu("men");
                        console.log(menu);
                      }}
                    >
                      Men
                    </Col>
                    <Col
                      onMouseEnter={() => {
                        showMenu("women");
                        console.log(menu);
                      }}
                    >
                      Women
                    </Col>
                    <Col
                      onMouseEnter={() => {
                        showMenu("kids");
                        console.log(menu);
                      }}
                    >
                      kids
                    </Col>
                  </Row>
                </Col>
                <Col md={4}></Col>
              </Row>
              <Col md={4}></Col>
            </Col>
            <Col md={2} className="d-flex align-items-center">
              <Row>
                <Col md={2}></Col>
                <Col>
                  <Row>
                    <Col md={4}>
                      <Container className="pr-0 pl-0">
                        {search ? (
                          <Container
                            style={{
                              position: "absolute",
                              right: "50px",
                              top: "-10px",
                              backgroundColor: search ? "white" : null,
                              color: "#808080",
                              fontFamily: "PoppinsRegular",
                              fontSize: 13,
                              width: "max-content",
                              padding: "1em",
                              borderRadius: "30px",
                            }}
                          >
                            <input
                              style={{ border: "0px", width: "15em" }}
                              type="text"
                              placeholder="Enter the product you are looking for"
                            />
                          </Container>
                        ) : (
                          ""
                        )}
                        <Image
                          src={
                            menu === "none"
                              ? "/images/title/noun_Search_white.png"
                              : "/images/title/noun_Search_black.png"
                          }
                          onClick={() => {
                            setSearch(!search);
                          }}
                        />
                      </Container>
                    </Col>
                    <Col md={4}>
                      <Image
                        src={
                          menu === "none"
                            ? "/images/title/noun_cart_white.png"
                            : "/images/title/noun_cart_black.png"
                        }
                      />
                    </Col>
                    <Col md={4}>
                      <Image
                        src={
                          menu === "none"
                            ? "/images/title/noun_avatar_white.png"
                            : "/images/title/noun_avatar_black.png"
                        }
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={2}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid className="pr-0 pl-0">
          {menu !== "none" ? <Menu menu={menu} showMenu={showMenu} /> : null}
          <Col
            md={{ offset: 3, span: 4 }}
            style={{
              fontFamily: "PoppinsBold",
              color: "white ",
              fontSize: 66,
              lineHeight: 1.1,
              paddingTop: "2em",
              position: "relative",
            }}
          >
            Sale of the summer collection
          </Col>
        </Container>
        <Container
          fluid
          className="pr-0 pl-0 mt-2"
          style={{ paddingBottom: "50px" }}
        >
          <Col md={{ offset: 3, span: 2 }}>
            <Row>
              <Col className="d-flex  align-items-center">
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#FBB03B",
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Image src="/images/title/noun_Arrow Right White.png" />
                </div>
                <div
                  style={{
                    color: "white",
                    paddingLeft: "20px",
                    fontFamily: "PoppinsSemiBold",
                    fontSize: 13,
                  }}
                >
                  Shop now
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
        <Slider setCntr={setCntr} cntr={cntr} />
      </Container>
    </>
  );
}

export default Title;
