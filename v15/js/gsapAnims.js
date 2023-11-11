
/**
 * @description initialise l'animation au scroll pour le gras du texte
 */
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
 * @description initialise l'animation d'apparition pour le header
 */
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

/**
 * @description initialise l'animation au scroll pour le background
 */
const backgroundAnim = () => {
  const ascDiv = document.querySelector('#asc');
  const descDiv = document.querySelector('#desc');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: 'body',
      start: "top 0%",
      end: "bottom 100%",
      scrub: true,
    }
  })
    tl.fromTo(ascDiv, {y: 35}, {y: -35, ease: 'none'})
    .fromTo(descDiv, {y: -35}, {y: 35, ease: 'none'}, '<')
}

/**
 * @description initialise les animations pour le texte de la description, le
 * header et le background
 */
export default function initGSAPAnimations () {
  gsap.registerPlugin(ScrollTrigger);
  headerAnim();
  descriptionAnim();
  backgroundAnim();
}
