import initPhotos from "./js/photos.js";
import initAnimations from "./js/animations.js";
import { description } from "./js/gsapAnims.js";



/* if(document.readyState !== "loading") {
  initPhotos();
} */

document.addEventListener("DOMContentLoaded", () => {
  initPhotos()
  initAnimations();
  description();
});


window.addEventListener('resize', () => {
  console.log(window.innerWidth)
})