import React, { Component } from "react";
import { ImageWrapper, SliderImage, ImageTitle } from "./style";
import { Link } from "./../link/Link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categoryImages = [
  {
    name: "Kittens",
    alt: "Kittens",
    url:
      "https://images.unsplash.com/photo-1561372248-61311d2c2e6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    categoryUrl: " "
  },
  {
    name: "Adult kitties",
    alt: "Adult kitties",
    url:
      "https://images.unsplash.com/photo-1503777119540-ce54b422baff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    categoryUrl: " "
  },
  {
    name: "Indoor kitties",
    alt: "Indoor kitties",
    url:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    categoryUrl: " "
  },
  {
    name: "Sterilized",
    alt: "Sterilized",
    url:
      "https://images.unsplash.com/photo-1602192239865-3c6492cfe879?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGNhdHxlbnwwfDF8MHw%3D&auto=format&fit=crop&w=500&q=60",
    categoryUrl: " "
  }
];

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      className: "slides"
    };

    return (
      <Slider {...settings}>
        {categoryImages.map((categoryImage) => {
          return (
            <ImageWrapper>
              <Link to={categoryImage.categoryUrl}>
                <SliderImage src={categoryImage.url} alt={categoryImage.alt} />
                <ImageTitle>{categoryImage.name}</ImageTitle>
              </Link>
            </ImageWrapper>
          );
        })}
      </Slider>
    );
  }
}
