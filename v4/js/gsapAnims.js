
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
  
  
})


}