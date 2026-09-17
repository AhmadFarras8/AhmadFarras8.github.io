// function to switch which section is shown
function showPage(pageId) {
  // hide all pages
  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active");
  }

  // show the one we clicked
  document.getElementById(pageId).classList.add("active");

  // update the active menu link style
  var links = document.getElementsByClassName("menu-link");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
  document.querySelector('[data-page="' + pageId + '"]').classList.add("active");
}

// simple script to show current year in footer
var year = new Date().getFullYear();
document.getElementById("footer-text").innerHTML = "CV Website made by Ahmad Farras Favian Al Efasi - " + year;
