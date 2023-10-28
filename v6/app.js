import initPhotos from "./js/photos.js";
import initAnimations from "./js/animations.js";
import { carouselAnimation, description } from "./js/gsapAnims.js";
import createCircles from "./js/background.js";
import createEventToDark from "./js/theme.js";



/* if(document.readyState !== "loading") {
  initPhotos();
} */

document.addEventListener("DOMContentLoaded", () => {
  initPhotos()
  initAnimations();
  description();
  carouselAnimation();
  createCircles(4000, 100, 50, 200)
  createEventToDark();
});


window.addEventListener('resize', () => {
  console.log(window.innerWidth)
})