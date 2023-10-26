
/**
 * crée les animations des lignes de la description (attribut visible voir CSS)
 * affiche le header quand le landing n'est plus visible
 */
function descriptionAndHeaderAnims (){
  const header = document.querySelector('header')
  const landing = document.querySelector('section#landing')
  const firstLine = document.querySelector('.description-line#first-line');
  const secondLine = document.querySelector('.description-line#second-line');
  const thirdLine = document.querySelector('.description-line#third-line');
  const photosSection = document.querySelector('section#photos');
  /**
   * affichage du header
   */
  const landingObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        header.classList.remove('visible')
      }else{
        header.classList.add('visible');
      }
    });
  });
  landingObserver.observe(landing)
  /**
   * rend visible la premiere ligne
   */
  const secondLineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        firstLine.classList.add('visible');
      }
    })
  })
  secondLineObserver.observe(secondLine);
  //deuxieme ligne
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        secondLine.classList.add('visible');
      }
    })
  })
  observer2.observe(thirdLine);
  //troisieme ligne
  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        thirdLine.classList.add('visible');
      }
    })
  })
  observer3.observe(photosSection);
}

/**
 * cree une animation pour inciter au scroll sur le landing
 */
const scrollInvite = function (){
  const button = document.querySelector('button#arrow-bottom');
  button.addEventListener('click', function () {
    window.scrollTo({
      top: 800,
      left: 0,
      behavior: "smooth",
    });
  })
}

/**
 * cree une animation pour faire apparaitre les contacts les uns apres les autres (voir CSS)
 */
const contactAnim = function () {
  const contact = document.querySelector('section#contacts ul#contacts-list')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        contact.classList.add('visible');
      }else{
        contact.classList.remove('visible')
      }
    });
  });
  observer.observe(contact)
}




export default function initAnimations() {
  scrollInvite();
  descriptionAndHeaderAnims();
  contactAnim();
}