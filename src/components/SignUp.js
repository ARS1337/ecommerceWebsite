import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Eye, EyeOff } from "react-feather";
import styled from "styled-components";
import { Email, Password, SubmitButton } from "./utils/FormControls";
import {
  RoundContainers,
  Content,
  SemiBold14,
  Regular14,
  SemiBold22Container,
  NewRegular13Container,
  Regular13SemiBold,
  Regular13Container,
} from "./utils/styledComponents";

function SignUp(props) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
              Back to shop
            </SemiBold14>
          </Container>
        </Row>
        <Col md={{ offset: 4, span: 4 }}>
          <Container>
            <form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <SemiBold22Container>
                  Create an account and discover the benefits
                </SemiBold22Container>
              </Row>
              <Row>
                <NewRegular13Container>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </NewRegular13Container>
              </Row>
              <Row>
                <Regular13Container style={{ paddingBottom: "1em" }}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    id="validationCustom01"
                    value={firstName}
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    style={{ borderRadius: "50px" }}
                  />
                  <div class="valid-feedback">Looks good!</div>
                </Regular13Container>
              </Row>
              <Row>
                <Regular13Container style={{ paddingBottom: "1em" }}>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    required
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    style={{ borderRadius: "50px" }}
                  />
                </Regular13Container>
              </Row>
              <Row>
                <Regular13Container style={{ paddingBottom: "1em" }}>
                  <Email email={email} setEmail={setEmail} />
                </Regular13Container>
              </Row>
              <Row>
                <Regular13Container style={{ paddingBottom: "1em" }}>
                  <Password
                    password={password}
                    setPassword={setPassword}
                    setShowPassword={setShowPassword}
                    showPassword={showPassword}
                  />
                </Regular13Container>
              </Row>
              <Row>
                <Regular13Container
                  style={{ paddingBottom: "2em", paddingTop: "1em" }}
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      required
                      id="defaultCheck1"
                      value={agree}
                      onChange={(e) => {
                        setAgree(!agree);
                      }}
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      I agree to the Google Terms of Service and Privacy Policy
                    </label>
                  </div>
                </Regular13Container>
              </Row>
              <Row>
                <Regular13SemiBold
                  style={{ paddingBottom: "1em", justifyContent: "center" }}
                >
                  <SubmitButton value="Sign In" onClick={() => {}} />
                </Regular13SemiBold>
              </Row>
              <Row>
                <Regular13Container className="d-flex justify-content-center">
                  <a href="#">Are you already a member?</a>
                </Regular13Container>
              </Row>
            </form>
          </Container>
        </Col>
      </Container>
    </>
  );
}

export default SignUp;
