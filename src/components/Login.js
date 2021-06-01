import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { Eye, EyeOff } from "react-feather";

const Regular13Container = styled(Container)`
  font-family: PoppinsRegular;
  font-size: 13px;
  justify-content: center;
`;
const Regular13SemiBold = styled(Container)`
  font-family: PoppinsSemiBold;
  font-size: 13px;
  justify-content: center;
`;
const NewRegular13Container = styled(Container)`
  padding-bottom: 4em;
  text-align: center;
`;
const SemiBold22Container = styled(Container)`
  font-family: PoppinsSemiBold;
  font-size: 22px;
  padding-bottom: 1em;
  text-align: center;
  justify-content: center;
`;
const Regular14 = styled(Container)`
  font-family: PoppinsRegular;
  font-size: 14px;
`;
const SemiBold14 = styled(Container)`
  font-family: PoppinsSemiBold;
  font-size: 14px;
`;
const Content = styled(Container)`
  padding: 1em;
`;
const RoundContainers = styled(Content)`
  border-radius: 30px;
`;
function Login(props) {
  const [login, showLogin] = useState(false);
  const [token ,setToken] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");

  return (
    <>
      <Container fluid>
        <Row>
          <Container>
            <SemiBold14 style={{ padding: "1em" }}>
              <a href="#">
                <Image
                  src={"/images/title/noun_Arrow Left_Black.png"}
                  className="pr-4"
                />
              </a>
              Back to store
            </SemiBold14>
          </Container>
        </Row>
        <Col md={{ offset: 4, span: 4 }}>
          <Container>
            <Row>
              <SemiBold22Container>Log in</SemiBold22Container>
            </Row>
            <Row>
              <NewRegular13Container>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industr
              </NewRegular13Container>
            </Row>
            <Row>
              <Regular13Container style={{ paddingBottom: "1em" }}>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Regular13Container>
            </Row>
            <Row>
              <Regular13Container
                style={{ paddingBottom: "1em", position: "relative" }}
              >
                <input
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={showPassword ? password : password.replace(/./g, "*")}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <a
                  href="#"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <Eye
                      style={{
                        position: "absolute",
                        right: "2em",
                        top: "0.5em",
                      }}
                    />
                  ) : (
                    <EyeOff
                      style={{ position: "absolute", right: "2em", top: "1em" }}
                    />
                  )}
                </a>
              </Regular13Container>
            </Row>
            <Row>
              <Regular13Container
                style={{ paddingBottom: "1em", justifyContent: "spaceBetween" }}
              >
                <Content fluid className="d-flex justify-content-between" style={{}}>
                  <a href="#" style={{fontWeight:"600"}}>Keep me signed in</a>
                  <a href="#" ><div style={{color:"#808080",fontWeight:"600"}}>Forget password</div></a>
                </Content>
              </Regular13Container>
            </Row>
            <Row style={{ paddingBottom: "1em" }}>
              <Col>
                <a href="#">
                  <RoundContainers
                    style={{
                      backgroundColor: "#3B5998",
                      paddingBottom: "1em",
                      fontFamily: "PoppinsSemiBold",
                      fontSize: "13px",
                      color: "white",
                    }}
                    className="d-flex justify-content-evenly"
                  >
                    <Image src={"/images/title/facebook.png"} />
                    Facebook
                  </RoundContainers>
                </a>
              </Col>
              <Col>
                <a href="#">
                  <RoundContainers
                    style={{
                      border: "1px red  solid",
                      borderColor: "red",
                      borderStyle: "solid",
                      paddingBottom: "1em",
                      fontFamily: "PoppinsSemiBold",
                      fontSize: "13px",
                    }}
                    className="d-flex justify-content-evenly"
                  >
                    {" "}
                    <Image src={"/images/title/gmail.png"} />
                    Gmail
                  </RoundContainers>
                </a>
              </Col>
            </Row>
            <Row>
              <Regular13SemiBold
                style={{ paddingBottom: "1em", justifyContent: "center" }}
              >
                <a href="#">
                  <RoundContainers
                    style={{ textAlign: "center", backgroundColor: "#FBB03B" }}
                  >
                    Sign In
                  </RoundContainers>
                </a>
              </Regular13SemiBold>
            </Row>
            <Row>
              <Container className="d-flex justify-content-around p-1">
                <a href="#">
                  <Regular14 style={{ paddingBottom: "1em" }}>
                    Not a member yet?
                  </Regular14>
                </a>

                <a href="#">
                  <SemiBold14 style={{ paddingBottom: "1em" }}>
                    Sign up
                  </SemiBold14>
                </a>
              </Container>
            </Row>
          </Container>
        </Col>
      </Container>
    </>
  );
}

export default Login;
