import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Slide.module.css';
import Image from 'next/image'

export default class CarouselSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: black; color: red`
        );
      }
    };
    return (
      <div className={styles.jarak}>
        <Slider {...settings} >
          <div >
            <Image className={styles.warna} src="/1.jpg" alt="site logo" width={200} height={100} />
          </div>
          <div>
            <Image className={styles.warna} src="/1.jpg" alt="site logo" width={200} height={100} />
          </div>
          <div>
          <Image className={styles.warna} src="/1.jpg" alt="site logo" width={200} height={100} />
          </div>
          <div>
          <Image className={styles.warna} src="/1.jpg" alt="site logo" width={200} height={100} />
          </div>
          <div>
          <Image className={styles.warna} src="/1.jpg" alt="site logo" width={200} height={100} />
          </div>
          <div>
          <Image className={styles.warna} src="/1.jpg" alt="site logo" width={200} height={100} />
          </div>
          <div>
          <Image className={styles.warna} src="/1.jpg" alt="site logo" width={200} height={100} />
          </div>
        </Slider>
      </div>
    );
  }
}