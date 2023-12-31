

/**
 * @description crée une animation pour inciter au scroll sur le landing
 */
const scrollInvite = function (){
  const button = document.querySelector('button#arrow-bottom');
  button.addEventListener('click', function () {
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: "smooth",
    });
  })
}

/**
 * @description cree une animation pour faire apparaitre les contacts les uns apres les autres
 * l'animation est en css, cette fonction sert juste a toggle la classe visible
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



/**
 * @description initialise les animations d'invite de scroll du landing et des contacts
 */
export default function initAnimations() {
  scrollInvite();
  contactAnim();
}