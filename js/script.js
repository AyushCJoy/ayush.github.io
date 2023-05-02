const container = document.getElementById("container");
if (container) {
// where "container" is the id of the container
  container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container.scrollLeft += 100;
      e.preventDefault();
// prevenDefault() will help avoid worrisome
// inclusion of vertical scroll
    }
    else {
      container.scrollLeft -= 100;
      e.preventDefault();
    }
  });
}


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const headtag = document.querySelector('.headtag');
const sidenav = document.querySelector('.sidenav');
const subtext = document.querySelector('.subtext');
const icon = document.querySelector('.linkedin');
const links = document.querySelectorAll(".menu a");


const originalHeight = sidenav.style.height;
const originalTop = subtext.style.top;


hamburger.addEventListener('click', function() {
  menu.classList.toggle('visible')
  headtag.classList.toggle('visible')
  icon.classList.toggle('visible')
  // Check if the sidenav height has been changed
  if (sidenav.style.height === "80%") {
    // If it has, restore the original height
        sidenav.style.height = originalHeight;
        subtext.style.top = originalTop;
  } else {
    // If it hasn't, set the new height
        sidenav.style.height = "80%";
        subtext.style.top = "80%";
    } 
});

links.forEach(link => {
  link.addEventListener('click', function() {
    menu.classList.remove('visible');
    headtag.classList.remove('visible');
    icon.classList.remove('visible');
    sidenav.style.height = originalHeight;
    subtext.style.top = originalTop;
  });
});



