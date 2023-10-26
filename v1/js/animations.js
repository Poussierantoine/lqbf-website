

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

const headerAnim = function (){
  const header = document.querySelector('header')
  const landing = document.querySelector('section#landing')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting){
        header.classList.add('visible');
      }else{
        header.classList.remove('visible')
      }
    });
  });
  observer.observe(landing)
}

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




export default function initAnimations () {
  scrollInvite();
  headerAnim();
  contactAnim();
}

