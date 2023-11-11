import initPhotos from "./js/photos.js";
import initAnimations from "./js/animations.js";
import initGSAPAnimations from "./js/gsapAnims.js";
import initBackground from "./js/background.js";
import initThemeToggle from "./js/theme.js";

document.addEventListener("DOMContentLoaded", () => {
  initPhotos();
  initAnimations();
  initGSAPAnimations();
  initThemeToggle();
  initBackground()
});