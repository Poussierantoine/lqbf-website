

const darkThemeColorPalette = [
  "#7D5700",
  "#6E0202",
  "#8C4B00"
]

/**
 * 0: light theme
 * 1: dark theme
 */
const themeBackgroundImagePalete = [
  "linear-gradient(316deg, #FFF7EF 0%, #FFF6F5 50%)",
  "linear-gradient(316deg, #110119 0%, #090113 50%)"
]


function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function toRgbaString (r, g, b, a) {
 return `rgba(${r}, ${g}, ${b}, ${a})`;
}


/**
 * retourne une div de class circle de taille aléatoire
 * @param {Number} x 
 * @param {Number} y 
 * @return {HTMLDivElement}
 */
const createCircle = (x, y, size, theme) => {
  /* circle */
  const circle = document.createElement('div');
  circle.classList.add('circle');
    circle.style.width = `${size}vw`;
    circle.style.height = `${size}vw`;
    circle.style.left = `${x}vw`;
    circle.style.top = `${y}px`;
  const color = darkThemeColorPalette[Math.floor(Math.random() * darkThemeColorPalette.length)];
  circle.style.backgroundColor = color;
  const rgb = hexToRgb(color);
  circle.style.boxShadow = `
  0 0 ${size * 0.3}vw ${size * 0.3}vw ${toRgbaString(rgb.r, rgb.g, rgb.b, 0.8)},
  0 0 ${size * 0.8}vw ${size * 0.8}vw ${toRgbaString(rgb.r, rgb.g, rgb.b, 0.2)}
  `
  /* spotlight */
  const spotlight = document.createElement('div');
  spotlight.classList.add('spotlight');
  circle.append(spotlight);
  const spotlight2 = document.createElement('div');
  spotlight2.classList.add('spotlight2');
  spotlight.append(spotlight2);
  return circle;
}


/**
 * 
 * @param {Number} pageHeight - hauteur de la page en px
 * @param {Number} pageWidth - largeur de la page en px
 * @param {Number} nbCircles - nombre de cercles à créer
 * @param {Number} widthFillingPercentage - pourcentage de la largeur de la page à remplir (si le pourcentage est inferieur à 100, le centre de la page ne sera pas rempli)
 * @param {Number} maxCircleSizeInPercentage - taille maximale des cercles en px
 */
const createCircles = function (pageHeight, nbCircles, widthFillingPercentage, maxCircleSizeInPercentage) {
  const sectionHeightSize = pageHeight / nbCircles;
  const sectionPercentageWidth = widthFillingPercentage / 2;
  const body = document.querySelector('body');
  const theme = body.querySelector('main').classList.contains('dark') ? 'dark' : 'light';
  const backgroundDiv = document.querySelector('#background');
  for (let i = 0; i < nbCircles; i++) {
    // la ligne suivante permet de choisir de quel coté sera le cercle
    const leftOrRight = Math.floor(Math.random() * 2); 
    // en fonction de sa position droite ou gauche, on calcule la position x du cercle dans la bande de la page
    const x = Math.abs(leftOrRight * (-100) + Math.random() * sectionPercentageWidth);
    console.log(x)
    const y = Math.random() * sectionHeightSize + sectionHeightSize * i;
    const size = Math.random() * maxCircleSizeInPercentage;
    const circle = createCircle(x, y, size, theme);
    backgroundDiv.append(circle);
  }
}


export default function initBackground () {
  const circleSizeInWidthViewPortPercentage = 7;
  const height = window.innerHeight;
  createCircles(height, 15, 50, circleSizeInWidthViewPortPercentage)
}



export function switchBackgroundToDark (){
  const body = document.querySelector('body');
  body.style.backgroundImage = themeBackgroundImagePalete[1];
  const backgroundDiv = body.querySelector('#background');
  backgroundDiv.innerHTML = '';
  body.classList.remove('light');
  body.classList.add('dark');
  initBackground();
}

export function switchBackgroundToLight (){
  const body = document.querySelector('body');
  body.style.backgroundImage = themeBackgroundImagePalete[0];
  const backgroundDiv = body.querySelector('#background');
  backgroundDiv.innerHTML = '';
  body.classList.remove('dark');
  body.classList.add('light');
}
