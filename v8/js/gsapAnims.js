
const descriptionAnim = () => {
  gsap.utils.toArray('.description-line').forEach((line) => {
    let text = line.querySelector('p');
    let img = line.querySelector('img');
    
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    })
    
    textTl.to(text, {
      fontWeight: 700, 
      duration: 1,
      onUpdate: function() {
      text.style.fontVariationSettings = "'wght' " + text.style.fontWeight;
    },
  })
  .to(text, {
      fontWeight: 400, 
      onUpdate: function() {
      text.style.fontVariationSettings = "'wght' " + text.style.fontWeight;
    },
  }, ">80%")
})
}


const carouselAnimation = () => {
  const container = document.querySelector('.carousel__container');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 90%",
    }
  })
  tl.from(container, {x:-1500, ease: "power1", duration: 2.5})
}


const headerAnim = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#landing',
      start: "bottom 50%",
      end: "bottom 35%",
      markers: true,
      scrub: true,
    }
  })

    tl.from('header', {y:-100, duration: 0.5})
}



export default function initGSAPAnimations () {
  gsap.registerPlugin(ScrollTrigger);
  headerAnim();
  descriptionAnim();
  carouselAnimation();
}