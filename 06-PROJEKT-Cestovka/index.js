const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('menu-btn--open')
    menuOpen = true;
  } else {
    menuBtn.classList.remove('menu-btn--open')
    menuOpen = false;    
  }
})