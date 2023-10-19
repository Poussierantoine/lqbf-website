
import Carousel from './Carousel.js';

export default function initPhotos() {
  initCarousel();
}




const initCarousel = () => {
  const carouselContainer = document.querySelector('#carousel')
  let c1 = new Carousel(carouselContainer, {
    slidesToScroll: 2,
    slidesVisible: 2,
    rightIcon: "./images/icons/chevron-right.svg",
    leftIcon: "./images/icons/chevron-left.svg",
    infinite: false,
    mobileTouch: false,
    pagination: false
  });

  console.log(c1);
};

