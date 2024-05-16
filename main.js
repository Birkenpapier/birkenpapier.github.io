  // toggle menu by clicking on hamburger
  function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
  }
// close mobile toggle menu by clicking on LI
  function hidemenubyli(){
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
  }

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul li');

window.addEventListener('scroll', ()=>{
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - 200)){
      current = section.getAttribute('id');
    }
  })

  mobilenavLi.forEach( li => {
    li.classList.remove('activeThismobiletab');
    if(li.classList.contains(current)){
      li.classList.add('activeThismobiletab')
    }
  })
navLi.forEach( li => {
  li.classList.remove('activeThistab');
  if(li.classList.contains(current)){
    li.classList.add('activeThistab')
  }
})
})

// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
// }, false);
// https://github.com/Birkenpapier
document.addEventListener("contextmenu", function(e){
  if (e.target.nodeName === "IMG") {
      e.preventDefault();
  }
}, false);
