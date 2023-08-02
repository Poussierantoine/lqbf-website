
import Carousel from './Carousel.js';

export default function initPhotos() {
  initCarousel();
}




const initCarousel = () => {
  const carouselContainer = document.querySelector('#carousel')
  console.log("c1");
  let c1 = new Carousel(carouselContainer, {
    slidesToScroll: 2,
    slidesVisible: 2,
    rightIcon: "./images/icons/chevron-right.svg",
    leftIcon: "./images/icons/chevron-left.svg",
    carouselBackgroundColor: "red",
    loop: true,
  });

  console.log(c1);
};


