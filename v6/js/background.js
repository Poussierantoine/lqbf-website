
const colorPalette = [
  "#D67608",
  "#912828",
  "#C18A0A"
]

/**
 * retourne une div de class circle de taille aléatoire
 * @param {Number} x 
 * @param {Number} y 
 * @return {HTMLDivElement}
 */
const createCircle = (x, y, size) => {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.left = `${x}vw`;
  circle.style.top = `${y}px`;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.backgroundColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  return circle;
}


/**
 * 
 * @param {Number} pageHeight - hauteur de la page en px
 * @param {Number} pageWidth - largeur de la page en px
 * @param {Number} nbCircles - nombre de cercles à créer
 * @param {Number} widthFillingPercentage - pourcentage de la largeur de la page à remplir (si le pourcentage est inferieur à 100, le centre de la page ne sera pas rempli)
 * @param {Number} maxCircleSize - taille maximale des cercles en px
 */
export default function createCircles (pageHeight, nbCircles, widthFillingPercentage, maxCircleSize) {
  const sectionHeightSize = pageHeight / nbCircles;
  const sectionPercentageWidth = widthFillingPercentage / 2;
  const circles = [];
   const body = document.querySelector('body');
  for (let i = 0; i < nbCircles; i++) {
    // la ligne suivante permet de choisir de quel coté sera le cercle
    const leftOrRight = Math.floor(Math.random() * 2); 
    // en fonction de sa position droite ou gauche, on calcule la position x du cercle dans la bande de la page
    const x = Math.abs(leftOrRight * (-100) + Math.random() * sectionPercentageWidth);
    const y = Math.random() * sectionHeightSize + sectionHeightSize * i;
    const size = Math.random() * maxCircleSize;
    const circle = createCircle(x, y, size);
    circles.push(circle);
    body.append(circle);
  }
}


