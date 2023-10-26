import initPhotos from "./js/photos.js";
import initAnimations from "./js/animations.js";






/* if(document.readyState !== "loading") {
  initPhotos();
} */

document.addEventListener("DOMContentLoaded", () => {
  initPhotos()
  initAnimations();
});

window.addEventListener('resize', ()=>{
  console.log(window.innerWidth);
})