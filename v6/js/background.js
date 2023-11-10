
const darkThemeColorPalette = [
  "#D67608",
  "#912828",
  "#C18A0A"
]

const lightThemeColorPalette = [
"#FF9822",
"#E62525",
"#FFC12F"
]

const themeBackgroundImagePalete = [
  "linear-gradient(316deg, #e0b0ee 0%, #f0e5b3 50%)",
  "linear-gradient(316deg, #291e47 0%, #120e17 50%)",
]

/**
 * retourne une div de class circle de taille aléatoire
 * @param {Number} x 
 * @param {Number} y 
 * @return {HTMLDivElement}
 */
const createCircle = (x, y, size, theme) => {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.left = `${x}vw`;
  circle.style.top = `${y}px`;
  circle.style.width = `${size}vw`;
  circle.style.height = `${size}vw`;
  if(theme === 'light'){
    circle.style.backgroundColor = lightThemeColorPalette[Math.floor(Math.random() * lightThemeColorPalette.length)];
  }else{
    circle.style.backgroundColor = darkThemeColorPalette[Math.floor(Math.random() * darkThemeColorPalette.length)];
  }
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
  const circles = [];
   const body = document.querySelector('body');
   const theme = body.querySelector('main').classList.contains('dark') ? 'dark' : 'light';
  for (let i = 0; i < nbCircles; i++) {
    // la ligne suivante permet de choisir de quel coté sera le cercle
    const leftOrRight = Math.floor(Math.random() * 2); 
    // en fonction de sa position droite ou gauche, on calcule la position x du cercle dans la bande de la page
    const x = Math.abs(leftOrRight * (-100) + Math.random() * sectionPercentageWidth);
    const y = Math.random() * sectionHeightSize + sectionHeightSize * i;
    const size = Math.random() * maxCircleSizeInPercentage;
    const circle = createCircle(x, y, size, theme);
    circles.push(circle);
    body.append(circle);
  }
}


export default function initBackground () {
  const circleSizeInWidthViewPortPercentage = 15;
  const body = document.querySelector('body');
  const height = body.offsetHeight - circleSizeInWidthViewPortPercentage * body.offsetWidth / 100;
  createCircles(height, 50, 50, circleSizeInWidthViewPortPercentage)
}



export function switchBackgroundToDark (){
  const body = document.querySelector('body');
  body.style.backgroundImage = themeBackgroundImagePalete[1];
  const circles = body.querySelectorAll('.circle');
  circles.forEach(circle => {
    circle.style.backgroundColor = darkThemeColorPalette[Math.floor(Math.random() * darkThemeColorPalette.length)];
  })
}

export function switchBackgroundToLight (){
  const body = document.querySelector('body');
  body.style.backgroundImage = themeBackgroundImagePalete[0];
  const circles = body.querySelectorAll('.circle');
  circles.forEach(circle => {
    circle.style.backgroundColor = lightThemeColorPalette[Math.floor(Math.random() * lightThemeColorPalette.length)];
  })
}

