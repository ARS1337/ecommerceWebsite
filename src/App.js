import { Col, Container, Row, Image } from "react-bootstrap";
import Title from "./components/Title";
import "./App.css";
import React from "react";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";
import SelectedProducts from "./components/SelectedProducts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <>
      {/* <Title color={"white"} />
      <SelectedProducts />
      <Banner />
      <WhyChoose />

      <Newsletter />

      <Footer /> */}
      {/* <Login/> */}
      {<SignUp/>}
      {/* <ForgotPassword/> */}
    </>
  );
}

export default App;
