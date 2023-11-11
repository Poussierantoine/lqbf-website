import Carousel from "./Carousel.js";

const descriptionAnim = () => {
  gsap.utils.toArray('.description-line').forEach((line) => {
    let text = line.querySelector('p');
    
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 100%",
        end: "bottom 10%",
        scrub: true,
      }
    })
    
    textTl.to(text, {
      fontWeight: 500, 
      onUpdate: function() {
        text.style.fontVariationSettings = "'wght' " + text.style.fontWeight + "'wdth' 100, 'opsz' 50, 'GRAD' 0, 'XTRA' 550, 'YTLC' 500, 'YTDE' -340, 'YTAS' 800, 'XOPQ' 120, 'YOPQ' 60, 'YTFI' 800, 'YTUC' 800";

      },
      duration: 1,
    })
    .to(text, {
      duration: 2.5,
    })
    .to(text, {
      fontWeight: 400, 
      onUpdate: function() {
        text.style.fontVariationSettings = "'wght' " + text.style.fontWeight + "'wdth' 100, 'opsz' 50, 'GRAD' 0, 'XTRA' 550, 'YTLC' 500, 'YTDE' -340, 'YTAS' 800, 'XOPQ' 120, 'YOPQ' 60, 'YTFI' 800, 'YTUC' 800"
      },
      duration: 1,
  })
})
}

/**
 * 
 * @param {Carousel} carousel le carousel a utiliser
 */
export function carouselAnimation (carousel) {
  const container = carousel.container;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 90%",
    }
  })
  tl.from(container, {x:-2000, ease: "power3.inOut", duration: 3, delay: 0.5})
  .then(() => {
    carousel.movingAlone = true;
    setTimeout(() => {
      carousel.moveAlone();
    }, 3000);
  })
}


const headerAnim = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#landing',
      start: "bottom 50%",
      end: "bottom 35%",
      scrub: true,
    }
  })

    tl.from('header', {y:-100, duration: 0.5})
}



export default function initGSAPAnimations () {
  gsap.registerPlugin(ScrollTrigger);
  headerAnim();
  descriptionAnim();
}