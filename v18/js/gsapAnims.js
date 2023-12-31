
/**
 * @description initialise l'animation au scroll pour le gras du texte
 */
const descriptionAnim = () => {
  gsap.utils.toArray('.description-line').forEach((line) => {
    let text = line.querySelector('p');
    
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      }
    })
    
    textTl
    .from(text, {
      fontWeight: 400, 
      opacity: 0.8,
    })
    .to(text, {
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
      opacity: 0.8,
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


export function scrollInviteAnim () {
  const button = document.querySelector('#arrow-bottom');
  const icon = button.querySelector('img');
  const tl = gsap.timeline();
  tl.to(icon, {y: -40, scale: 1.4, duration: 0.9, ease: 'power2.in'})
  .to(icon, {y: -30, scale: 1.1, duration: 0.5, ease: 'power2.out'})
  .to(icon, {y: -40, scale: 1.4, duration: 1.2, ease: 'power2.inOut'})
  .then(() => {
    button.addEventListener('mouseenter', () => {
      tl.clear();
      tl.to(icon, {scale: 1.7, duration: 0.5, ease: 'power2.inOut'})
      console.log('hover')
    })
    button.addEventListener('mouseleave', () => {
      tl.clear();
      tl.to(icon, {scale: 1.4, duration: 0.5, ease: 'power2.inOut'})
    })
  })
}
