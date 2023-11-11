

const circles = [
    {
        "x": 18.73499359394102,
        "y": 6.66,
        "size": 3.00676084517269,
        "color": "#D58000",
        "rgb": "213,128,0",
    },
    {
        "x": 97.01760205611356,
        "y": 13.32,
        "size": 2.281783999987238,
        "color": "#D58000",
        "rgb": "213,128,0",
    },
    {
        "x": 15.219890042686629,
        "y": 20.0,
        "size": 2.659679240945975,
        "color": "#6E0202",
        "rgb": "110,2,2"
    },
    {
        "x": 2.8667066189868082,
        "y": 26.66,
        "size": 2.4344082713710824,
        "color": "#D58000",
        "rgb": "213,128,0",
    },
    {
        "x": 75.50276407236007,
        "y": 33.32,
        "size": 4.455638626882984,
        "color": "#6E0202",
        "rgb": "110,2,2"
    },
    {
        "x": 82.55811217713322,
        "y": 39.98,
        "size": 1.838483860707477,
        "color": "#6E0202",
        "rgb": "110,2,2"
    },
    {
        "x": 90.71515947419167,
        "y": 44.64,
        "size": 4.555777927504561,
        "color": "#8C4B00",
        "rgb": "179,75,0"
    },
    {
        "x": 18.45811325166336,
        "y": 53.3,
        "size": 3.6051182364853362,
        "color": "#8C4B00",
        "rgb": "179,75,0"
    },
    {
        "x": 92.96213275424995,
        "y": 61.98,
        "size": 2.397588533877015,
        "color": "#D58000",
        "rgb": "213,128,0",
    },
    {
        "x": 6.011785762380089,
        "y": 66.64,
        "size": 3.8820398848108537,
        "color": "#8C4B00",
        "rgb": "179,75,0"
    },
    {
        "x": 20.6232988417679,
        "y": 73.3,
        "size": 3.7263661838784303,
        "color": "#6E0202",
        "rgb": "110,2,2"
    },
    {
        "x": 80.07153959002757,
        "y": 79.98,
        "size": 3.1051775311555896,
        "color": "#6E0202",
        "rgb": "110,2,2"
    },
    {
        "x": 93.15879773973136,
        "y": 86.64,
        "size": 2.9303884212036433,
        "color": "#8C4B00",
        "rgb": "179,75,0"
    },
    {
        "x": 6.906960949273722,
        "y": 93.3,
        "size": 2.3304340568004567,
        "color": "#8C4B00",
        "rgb": "179,75,0"
    },
    {
        "x": 82.06925792396592,
        "y": 99.98,
        "size": 2.4881212197741354,
        "color": "#8C4B00",
        "rgb": "179,75,0"
    }
];

/**
 * 0: light theme
 * 1: dark theme
 */
const themeBackgroundImagePalete = [
  /* "linear-gradient(316deg, #FFF7EF 0%, #FFF6F5 50%)", */
  "linear-gradient(316deg, #FFE6CD 0%, #FFDFDF 70%)",
  "linear-gradient(316deg, #110119 0%, #090113 50%)"
]


/**
 * retourne une div de class circle de taille aléatoire
 * @param {Number} x position x en vw 
 * @param {Number} y position y en px
 * @param {Number} size en vw
 * @param {String} color en hexa
 * @param {String} rgb en rgb
 * @return {HTMLDivElement}
 */
const createCircle = (x, y, size, color, rgb) => {
  /* circle */
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.width = `${size}vw`;
  circle.style.height = `${size}vw`;
  circle.style.left = `${x}vw`;
  circle.style.top = `${y}vh`;
  circle.style.transform = `translate(-50%, -50%)`;
  circle.style.backgroundColor = color;
  circle.style.boxShadow = `
  0 0 ${size * 0.3}vw ${size * 0.3}vw rgba(${rgb}, 0.8),
  0 0 ${size * 0.8}vw ${size * 0.8}vw rgba(${rgb}, 0.2)
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
export default function initBackground () {
  const backgroundDiv = document.querySelector('#background');
  for (let circle of circles) {
    backgroundDiv.append(createCircle(circle.x, circle.y, circle.size, circle.color, circle.rgb));
  }
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
