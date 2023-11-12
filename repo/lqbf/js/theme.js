
/**
 * les gradients qui servent de fond pour le body
 * 0: light theme
 * 1: dark theme
 */
const themeBackgroundImagePalete = [
  /* "linear-gradient(316deg, #FFF7EF 0%, #FFF6F5 50%)", */
  "linear-gradient(316deg, #FFE6CD 0%, #FFDFDF 70%)",
  "linear-gradient(316deg, #110119 0%, #090113 50%)"
]

/**
 * @description change le background du body pour le dark theme
 */
function switchBackgroundToDark (){
  const body = document.querySelector('body');
  body.style.backgroundImage = themeBackgroundImagePalete[1];
  const backgroundDiv = body.querySelector('#background');
  backgroundDiv.style.visibility = 'visible';
}

/**
 * @description change le background du body pour le light theme
 */
function switchBackgroundToLight (){
  const body = document.querySelector('body');
  body.style.backgroundImage = themeBackgroundImagePalete[0];
  const backgroundDiv = body.querySelector('#background');
  backgroundDiv.style.visibility = 'hidden';
}

/**
 * @description change la class du main pour que les couleurs
 * du contenu correspondent au light theme
 */
const switchColorToLight = function () {
  const main = document.querySelector('main');
  main.classList.remove('dark');
  main.classList.add('light');
}

/**
 * @description change la class du main pour que les couleurs
 * du contenu correspondent au dark theme
 */
const switchColorToDark = function () {
  const main = document.querySelector('main');
  main.classList.remove('light');
  main.classList.add('dark');
}

/**
 * @description change le theme de la page pour le light theme
 * anime le bouton et le header pour la transition
 * et met un evenement sur le bouton pour switcher vers le dark theme
 */
const switchToLightTheme = function () {
  //changement de la couleur du contenu
  switchBackgroundToLight()
  switchColorToLight()
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
  const themeSwitch = document.querySelector('#theme-switch-container');
  themeSwitch.addEventListener('click', () => {
    tl.kill();
    switchToDarkTheme();
  }, { once: true })
}

/**
 * @description change le theme de la page pour le dark theme
 * anime le bouton et le header pour la transition
 * et met un evenement sur le bouton pour switcher vers le light theme
 */
const switchToDarkTheme = function () {
  //changement de la couleur du contenu
switchBackgroundToDark()
switchColorToDark()
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
    const themeSwitch = document.querySelector('#theme-switch-container');
    themeSwitch.addEventListener('click', () => {
      tl.kill();
      switchToLightTheme();
    }, { once: true })
}

/**
 * @description initialise l'evenement pour le changement de theme
 */
export default function initThemeToggle(){
  const themeSwitch = document.querySelector('#theme-switch-container');
  themeSwitch.addEventListener('click', () => {
      switchToLightTheme();
  }, {once: true})
}

