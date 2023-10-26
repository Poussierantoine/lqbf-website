
export function description() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.description-line').forEach((line) => {
    let text = line.querySelector('p');
    let img = line.querySelector('img');

    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: line,
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
    }
    });
    
    let imgTranslateX = 200;
    console.log(line.classList)
    if(line.classList.contains('image-on-left')){
      imgTranslateX = -200;
    }
    
    lineTl.from(line, {opacity: 0, ease: "power2"}, "fullTimeAnimation")
    .from(img, {x: imgTranslateX, ease: "power4"}, "fullTimeAnimation")
    .from(text, {fontSize: 20, ease: "power2.out"}, "fullTimeAnimation")
    
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        end: "bottom 20%",
        markers: true,
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