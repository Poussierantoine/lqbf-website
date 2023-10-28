import initPhotos from "./js/photos.js";
import initAnimations from "./js/animations.js";
import { carouselAnimation, description } from "./js/gsapAnims.js";



/* if(document.readyState !== "loading") {
  initPhotos();
} */

document.addEventListener("DOMContentLoaded", () => {
  initPhotos()
  initAnimations();
  description();
  carouselAnimation();
});


window.addEventListener('resize', () => {
  console.log(window.innerWidth)
})