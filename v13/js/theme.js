import { switchBackgroundToDark, switchBackgroundToLight } from "./background.js";

const colorToLight = function () {
  const main = document.querySelector('main');
  main.classList.remove('dark');
  main.classList.add('light');
  switchBackgroundToLight();
}

const colorToDark = function () {
  const main = document.querySelector('main');
  main.classList.remove('light');
  main.classList.add('dark');
  switchBackgroundToDark();
}

const switchToLight = function (toLightAbortController) {
  //suppression de l'evenement pour switcher vers le theme light
  toLightAbortController.abort();
  //changement de la couleur du contenu
  colorToLight();
  //animation sur le bouton
  document.querySelector('#theme-switch-container').classList.toggle('dark-theme');
  const  tl = gsap.timeline();
  tl.to('#theme-switch', {duration: 1, rotation: 0, x: 40, ease: "power2"})
    .to("#sun-icon", {duration: 0.3, opacity: 0, scale: 1, ease: "power2"}, "-=1")
    .to("#moon-icon", {duration: 0.3, opacity: 1, scale: 2, ease: "power2"}, "-=1")
  tl.then(() => {
    //ajout de l'evenement pour switcher vers le theme dark
    const toDarkAbortController = new AbortController();
    const themeToggle = document.querySelector('#theme-switch-container');
    themeToggle.addEventListener('click', () => {
      switchToDark(toDarkAbortController);
    }, { signal: toDarkAbortController.signal })
  })
}

const switchToDark = function (toDarkAbortController) {
  //suppression de l'evenement pour switcher vers le theme dark
  toDarkAbortController.abort();
  //changement de la couleur du contenu
  colorToDark();
  //animation sur le bouton
  document.querySelector('#theme-switch-container').classList.toggle('dark-theme');
  const tl = gsap.timeline();
  tl.to('#theme-switch', {duration: 1, rotation: -180, x: 0, ease: "power2"})
    .to("#sun-icon", {duration: 1, opacity: 1, scale: 2, ease: "power2"}, "-=1")
    .to("#moon-icon", {duration: 1, opacity: 0, scale: 1, ease: "power2"}, "-=1")
  tl.then(() => {
    //ajout de l'evenement pour switcher vers le theme light
    const toLightAbortController = new AbortController();
    const themeToggle = document.querySelector('#theme-switch-container');
    themeToggle.addEventListener('click', () => {
      switchToLight(toLightAbortController);
    }, { signal: toLightAbortController.signal })
  })
}


export default function initThemeToggle(){
  const main = document.querySelector('main');
  const themeToggle = document.querySelector('#theme-switch-container');

  let darkOrLight = true;
  if(!main.classList.contains('dark')) {
    if(!main.classList.contains('light')) {
      main.classList.add('dark');
    } else{
      darkOrLight = false;
    }
  }
  const abortController = new AbortController();
  themeToggle.addEventListener('click', () => {
    if (darkOrLight) {
      switchToLight(abortController);
    } else {
      switchToDark(abortController);
    }
  })
}

