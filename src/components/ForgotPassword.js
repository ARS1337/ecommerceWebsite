//add dropdown in number field

import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
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
import { Email, Number, Password, SubmitButton } from "./utils/FormControls";

function ForgotPassword(props) {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
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
        <Container>
          <Col md={{ offset: 4, span: 4 }}>
            <Container>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Row>
                  <SemiBold22Container>
                    Forgot your password?
                  </SemiBold22Container>
                </Row>
                <Row>
                  <NewRegular13Container>
                    Enter your email or phone number and recover your account
                  </NewRegular13Container>
                </Row>
                <Row>
                  <Regular13Container style={{ paddingBottom: "1em" }}>
                    <Email email={email} setEmail={setEmail} />
                  </Regular13Container>
                </Row>
                <Row>
                  <Regular13Container style={{ paddingBottom: "1em" }}>
                    <Number
                      placeholder="Phone Number"
                      type="tel"
                      required={false}
                      number={number}
                      setNumber={setNumber}
                    />
                  </Regular13Container>
                </Row>
                <Row>
                  <Regular13SemiBold
                    style={{ paddingBottom: "1em", justifyContent: "center" }}
                  >
                    <SubmitButton
                      value="Reset Password"
                      onClick={() => {
                        console.log("sdf");
                      }}
                    />
                  </Regular13SemiBold>
                </Row>
              </form>
            </Container>
          </Col>
        </Container>
      </Container>
    </>
  );
}

export default ForgotPassword;
