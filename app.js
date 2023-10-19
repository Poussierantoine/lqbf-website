import initPhotos from "./js/photos.js";

const scrollInvite = function (){
  const button = document.querySelector('button#arrow-bottom');
  button.addEventListener('click', function () {
    window.scrollTo({
      top: 800,
      left: 0,
      behavior: "smooth",
    });
  })
}


document.addEventListener("DOMContentLoaded", () => {
  //scrollInvite();
  initPhotos();
});