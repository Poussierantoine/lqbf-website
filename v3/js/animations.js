
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
   * classe active sur la premiere ligne
   */
  const landingObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        header.classList.remove('visible')
        firstLine.classList.add('active')
        secondLine.classList.remove('active')
      }else{
        header.classList.add('visible');
        firstLine.classList.remove('active')
        secondLine.classList.add('active')
      }
    });
  });
  landingObserver.observe(landing)
  /**
   * activation de la troisieme ligne
   */
  const firstLineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        thirdLine.classList.remove('active')
      }else{
        secondLine.classList.remove('active')
        thirdLine.classList.add('active')
      }
    });
  })
  firstLineObserver.observe(firstLine)
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
  const thirdLineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        secondLine.classList.add('visible');
      }
    })
  })
  thirdLineObserver.observe(thirdLine);
  //troisieme ligne
  const photosSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        thirdLine.classList.add('visible');
      }
    })
  })
  photosSectionObserver.observe(photosSection);
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