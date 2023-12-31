
/**
 * @description cercles de l'animation de fond qui montent
 */
const ascArray = [
    {
        "x": 15.219890042686629,
        "y": 20,
        "size": 2.659679240945975,
        "color": "#6E0202",
        "rgb": "110,2,2"
    },
    {
        "x": 75.50276407236007,
        "y": 33.32,
        "size": 4.455638626882984,
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
        "rgb": "213,128,0"
    },
    {
        "x": 6.011785762380089,
        "y": 66.64,
        "size": 3.8820398848108537,
        "color": "#8C4B00",
        "rgb": "179,75,0"
    },
    {
        "x": 80.07153959002757,
        "y": 79.98,
        "size": 3.1051775311555896,
        "color": "#6E0202",
        "rgb": "110,2,2"
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
]

/**
 * @decription cercles de l'animation de fond qui descendent
 */
const descArray = [
    {
        "x": 18.73499359394102,
        "y": 6.66,
        "size": 3.00676084517269,
        "color": "#D58000",
        "rgb": "213,128,0"
    },
    {
        "x": 97.01760205611356,
        "y": 13.32,
        "size": 2.281783999987238,
        "color": "#D58000",
        "rgb": "213,128,0"
    },
    {
        "x": 2.8667066189868082,
        "y": 26.66,
        "size": 2.4344082713710824,
        "color": "#D58000",
        "rgb": "213,128,0"
    },
    {
        "x": 82.55811217713322,
        "y": 39.98,
        "size": 1.838483860707477,
        "color": "#6E0202",
        "rgb": "110,2,2"
    },
    {
        "x": 20.6232988417679,
        "y": 73.3,
        "size": 3.7263661838784303,
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
]


/**
 * @description retourne une div de class circle avec deux div enfant imbriquées de classes spotlight et spotlight2
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
 * @description à partir des tableaux ascArray et descArray (haut du fichier),
 * crée les cercles et les ajoute aux divs #asc et #desc dans la div #background 
 */
export default function initBackground () {
  const descDiv = document.querySelector('#desc')
  const ascDiv = document.querySelector('#asc')
  for (let circle of ascArray) {
    ascDiv.append(createCircle(circle.x, circle.y, circle.size, circle.color, circle.rgb));
  }
  for (let circle of descArray) {
    descDiv.append(createCircle(circle.x, circle.y, circle.size, circle.color, circle.rgb));
  }
}



