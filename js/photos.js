
import Carousel from './Carousel.js';

/**
 * @description initialise le carousel avec les options adaptées
 */
export default function  initCarousel () {
  const carouselContainer = document.querySelector('#carousel')
  const c1 = new Carousel(carouselContainer, {
    slidesToScroll: 2,
    slidesVisible: 2,
    rightIcon: "./images/icons/chevron-right.svg",
    leftIcon: "./images/icons/chevron-left.svg",
    infinite: true,
    mobileTouch: true,
    carouselBackgroundColor: "transparent",
    movingAlone: true,
    maxMobileWidth: 900,
  });
};


