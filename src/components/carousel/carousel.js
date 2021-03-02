import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import "./carouselStyle.scss";
import testimonImg from "./img/testimonial.png";

export default class Carousels extends Component {
  render() {
    return (
      <div className="carousels ">
        <h2 className="carusel-title">
          Die Facharbeit in wenigen Schritten schreiben
        </h2>
        <p className="carusel-text">
          In den nächsten Abschnitten liest Du, wie eine Facharbeit Schritt für
          Schritt erstellt wird.
          <br /> Ein Tipp vorweg: Die Länge der wissenschaftlichen Arbeit
          beträgt i.d.R. zwischen zehn und 12 Seiten.
        </p>
        <Carousel>
          <Carousel.Item>
            <img className="first" src={testimonImg} alt="First slide" />
            <img className="tow" src={testimonImg} alt="First slide" />
            <img className="free" src={testimonImg} alt="First slide" />
            <Carousel.Caption className="carousel-bloc"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="first" src={testimonImg} alt="Second slide" />
            <img className="tow" src={testimonImg} alt="Second slide" />
            <img className="free" src={testimonImg} alt="Second slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="first" src={testimonImg} alt="Third slide" />
            <img className="tow" src={testimonImg} alt="Third slide" />
            <img className="free" src={testimonImg} alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h3 className="carusel-text-h3">Feedback hinzufügen</h3>
      </div>
    );
  }
}
