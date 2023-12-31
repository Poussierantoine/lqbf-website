

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
