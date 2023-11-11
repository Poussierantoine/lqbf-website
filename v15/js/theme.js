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

const switchToLight = function () {
  //changement de la couleur du contenu
  colorToLight();
  //animation sur le bouton
  document.querySelector('#theme-switch-container').classList.toggle('dark-theme');
  const  tl = gsap.timeline();
  tl.to('#theme-switch', {duration: 1, rotation: 360, x: 21, ease: "power1.inOut"})
  .to('#theme-switch', {backgroundColor: "#FFE1C7", ease: "power2"}, "-=1")
  .to('header', {duration: 1, backgroundColor: '#FFE1C7', ease: 'power2'}, "-=1")
  .to('header h2', {duration: 1, color: 'black', ease: 'power2'}, "-=1")
  .to("#sun-icon", {duration: 1, scale: 2, ease: "power1"}, "-=1")
  .to("#sun-icon", {duration: 1, opacity: 1, ease: "power1.in"}, "-=1")
  .to("#moon-icon", {duration: 1, opacity: 0, scale: 1, ease: "power2"}, "-=1")
  //ajout de l'evenement pour switcher vers le theme dark
  const themeToggle = document.querySelector('#theme-switch-container');
  themeToggle.addEventListener('click', () => {
    tl.kill();
    switchToDark();
  }, { once: true })
}

const switchToDark = function () {
  //changement de la couleur du contenu
colorToDark();
  //animation sur le bouton
  document.querySelector('#theme-switch-container').classList.toggle('dark-theme');
  const tl = gsap.timeline();
  tl.to('#theme-switch', {duration: 1, rotation: 0, x: "-1px", ease: "power1.inOut"})
  .to('#theme-switch', {backgroundColor: "black", ease: "power2"}, "-=1")
  .to('header', {duration: 1, backgroundColor: 'black', ease: 'power2'}, "-=1")
  .to('header h2', {duration: 1, color: 'white', ease: 'power2'}, "-=1")
  .to("#sun-icon", {duration: 1, opacity: 0, scale: 1, ease: "power2"}, "-=1")
  .to("#moon-icon", {duration: 1, scale: 2, ease: "power1"}, "-=1")
  .to("#moon-icon", {duration: 1, opacity: 1, ease: "power1.in"}, "-=1")
    //ajout de l'evenement pour switcher vers le theme light
    const themeToggle = document.querySelector('#theme-switch-container');
    themeToggle.addEventListener('click', () => {
      tl.kill();
      switchToLight();
    }, { once: true })
}


export default function initThemeToggle(){
  const themeSwitch = document.querySelector('#theme-switch-container');
  themeSwitch.addEventListener('click', () => {
      switchToLight();
  }, {once: true})
}

