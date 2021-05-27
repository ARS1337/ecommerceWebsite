import React, { useState } from "react";
import { Container, Image, Col, Row, Jumbotron, Figure } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import Favorite from "./Favorite";
import AddToCart from "./AddToCart";

function SelectedProducts(props) {
  const NewFigureCaptionHeading = styled(Figure.Caption)`
    font-family: "PoppinsLight";
    font-size: 16px;
    font-weight: 600;
    color: "black";
  `;
  const NewRow = styled(Row)`
    font-family: "PoppinsRegular";
    font-size: 20px;
  `;
  const PercentContainer = styled(Container)`
    position: absolute;
    top: 1em;
    left: 1em;
    font-family: PoppinsSemiBold;
    font-size: 12px;
    width: max-content;
    padding: 0.8em;
    padding-right: 1em;
    padding-left: 1em;
    background-color: red;
    color: white;
    border-radius: 50%;
  `;
  const NewImage = styled(Image)`
    height: auto;
    width: auto;
  `;
  const RotatedImage = styled(NewImage)`
    transform: rotate(180deg);
  `;
  const TitleRow = styled(Row)`
    font-family: PoppinsLight;
    font-size: 29px;
    padding-top: 1em;
    padding-bottom: 1em;
  `;
  const data = [
    {
      imageSrc: "/images/shirts/AdobeStock_118120200.png",
      heading: "Loose Textured T-Shirt",
      price: "$90.99",
    },
    {
      imageSrc: "/images/shirts/AdobeStock_136908398.png",
      heading: "Loose Textured T-Shirt",
      price: "$90.99",
    },
    {
      imageSrc: "/images/shirts/AdobeStock_173519034.png",
      heading: "Loose Textured T-Shirt",
      price: "$90.99",
    },
    {
      imageSrc: "/images/shirts/AdobeStock_236655481.png",
      heading: "Loose Textured T-Shirt",
      price: "$90.99",
      oldPrice: "$119.99",
      percentOff: 30,
    },
    {
      imageSrc: "/images/shirts/AdobeStock_118120200.png",
      heading: "Loose Textured T-Shirt",
      price: "$90.99",
    },
    {
      imageSrc: "/images/shirts/AdobeStock_136908398.png",
      heading: "Loose Textured T-Shirt",
      price: "$90.99",
    },
    {
      imageSrc: "/images/shirts/AdobeStock_173519034.png",
      heading: "Loose Textured T-Shirt",
      price: "$90.99",
    },
    {
      imageSrc: "/images/shirts/AdobeStock_236655481.png",
      heading: "Loose Textured T-Shirt",
      price: "$90.99",
      oldPrice: "$119.99",
      percentOff: 30,
    },
  ];
  const Figures = (props) => {
    const { imageSrc, heading, price, percentOff, oldPrice } = props;
    return (
      <Figure style={{ position: "relative" }}>
        <Figure.Image alt={heading} src={imageSrc} />
        <NewFigureCaptionHeading>{heading}</NewFigureCaptionHeading>
        <NewRow>
          <Col>
            <Figure.Caption style={{ color: percentOff > 0 ? "red" : "black" }}>
              {price}
            </Figure.Caption>
          </Col>
          <Col>
            {percentOff > 0 ? (
              <Figure.Caption style={{ color: "#CECECE" }}>
                {oldPrice}
              </Figure.Caption>
            ) : null}
          </Col>
        </NewRow>
        {props.children}
      </Figure>
    );
  };
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <NewImage
        src="/images/shirts/right.png"
        className={className}
        onClick={onClick}
        fluid
      />
    );
  };
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <RotatedImage
        src="/images/shirts/right.png"
        className={className}
        onClick={onClick}
        fluid
      />
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container style={{ paddingTop: "3em", paddingBottom: "3em" }}>
        <TitleRow>
          <Container>
            <Container>Selected just for you</Container>
          </Container>
        </TitleRow>
        <Row>
          <Slider {...settings}>
            {data.map((x, idx) => (
              <Container style={{ position: "relative" }}>
                <Figures
                  imageSrc={x.imageSrc}
                  heading={x.heading}
                  price={x.price}
                  percentOff={x.percentOff == undefined ? 0 : x.percentOff}
                  oldPrice={x.oldPrice == undefined ? null : x.oldPrice}
                >
                  <Favorite />
                  {x.percentOff > 0 ? (
                    <PercentContainer>{x.percentOff + "%"}</PercentContainer>
                  ) : null}
                </Figures>
                <Row>
                  <AddToCart />
                </Row>
              </Container>
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
}

export default SelectedProducts;
