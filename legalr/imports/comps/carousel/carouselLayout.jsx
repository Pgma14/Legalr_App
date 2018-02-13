import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import USmap from './USA.jsx';
import EUmap from './EU.jsx';

import './carouselLayoutStyle.css';

export default class DemoCarousel extends Component {
  render() {

    return (
  <div className="container" id="carousel-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={75}
        totalSlides={3}
      >
        <Slider onFocus="null">
          <Slide index={0}><USmap /></Slide>
          <Slide index={1}><EUmap /></Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack><i className="fa fa-chevron-left" id="left-chevron"></i></ButtonBack>
        <ButtonNext><i className="fa fa-chevron-right" id="right-chevron" ></i></ButtonNext>
      </CarouselProvider>
  </div>
    );
  }
}