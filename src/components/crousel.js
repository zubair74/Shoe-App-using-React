import React from "react";
import Navbar from "./navbar";
import "./landingpage.css";

import nike10 from "./nike10.jpg";
import nike6 from "./nike6.jpg";
import nike9 from "./nike9.jpg";

export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="shoeimg d-block w-100" src={nike9} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="shoeimg d-block w-100" src={nike6} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="shoeimg d-block w-100" src={nike10} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
