import initPhotos from "./js/photos.js";
import initAnimations from "./js/animations.js";
import initGSAPAnimations, { scrollInviteAnim } from "./js/gsapAnims.js";
import initBackground from "./js/background.js";


async function imageLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete){
      img.onload = () => {
        resolve(img.src);
      }
    }else{
      resolve(img.src);
    }
  });
}

async function loaderDisabling() {
    const imageLoadedPromises = [];
    const imgs = [];
    document.querySelectorAll("img").forEach((img) => {
      if(img.loading !== "lazy"){
        imgs.push(img);
      }
    })
    imgs.forEach((img) => {
      imageLoadedPromises.push(imageLoaded(img));
    });
    Promise.all(imageLoadedPromises).then(() => {
      document.querySelector("#loader").remove();
      setTimeout(() => {
        scrollInviteAnim();
      }, 1000);
    })
}


document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector("#loader img");
  loader.fetchPriority = 'high';
  loaderDisabling();
  initPhotos();
  initAnimations();
  initGSAPAnimations();
  initBackground()
});