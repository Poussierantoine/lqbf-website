
export function description() {
  gsap.registerPlugin(ScrollTrigger);

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
  }, ">90%")
})
}


export function carouselAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const container = document.querySelector('.carousel__container');



  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
    }
  })
  
  tl.from(container, {x:-1500, ease: "power1", duration: 2.5})

}