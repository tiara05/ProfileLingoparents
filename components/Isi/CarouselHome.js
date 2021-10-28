import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../styles/Slide.module.css';
import Carousel from 'nuka-carousel';
import Image from 'next/image'

export default class CarouselHome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image className={styles.warna} src="/assets/1.jpg" alt="site logo" width={2000} height={900} />
          </div>
          <div>
            <Image className={styles.warna} src="/assets/1.jpg" alt="site logo" width={2000} height={900} />
          </div>
          <div>
            <Image className={styles.warna} src="/assets/1.jpg" alt="site logo" width={2000} height={900} />
          </div>
          <div>
            <Image className={styles.warna} src="/assets/1.jpg" alt="site logo" width={2000} height={900} />
          </div>
        </Slider>
      </div>
    );
  }
}