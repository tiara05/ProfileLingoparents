import React from 'react';
import { Carousel } from 'react-bootstrap';


import Image from 'next/image'

const CarouselContainer = () => {
  return (
    <>
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block w-100"
          src="/1.jpg"
          alt="First slide"
          width={2000} height={700}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block w-100"
          src="/2.jpg"
          alt="First slide"
          width={2000} height={700}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block w-100"
          src="/3.jpg"
          alt="First slide"
          width={2000} height={700}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselContainer;