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
  //changement de l'icone du bouton
  const img = document.querySelector('#theme-toggle img');
  img.setAttribute('src', '../images/icons/moon.svg');
  //ajout de l'evenement pour switcher vers le theme dark
  const toDarkAbortController = new AbortController();
  const themeToggle = document.querySelector('#theme-toggle');
  themeToggle.addEventListener('click', () => {
    switchToDark(toDarkAbortController);
  }, { signal: toDarkAbortController.signal })
}

const switchToDark = function (toDarkAbortController) {
  //suppression de l'evenement pour switcher vers le theme dark
  toDarkAbortController.abort();
  //changement de la couleur du contenu
  colorToDark();
  //changement de l'icone du bouton
  const img = document.querySelector('#theme-toggle img');
  img.setAttribute('src', '../images/icons/sun.svg');
  //ajout de l'evenement pour switcher vers le theme light
  const toLightAbortController = new AbortController();
  const themeToggle = document.querySelector('#theme-toggle');
  themeToggle.addEventListener('click', () => {
    switchToLight(toLightAbortController);
  }, { signal: toLightAbortController.signal })
}


export default function initThemeToggle(){
  const main = document.querySelector('main');
  const themeToggle = document.querySelector('#theme-toggle');

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

