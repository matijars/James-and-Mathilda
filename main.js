// HERO BACKGROUND CHANGE
let jamesBg = document.getElementById("james-btn");
let mathildaBg =document.getElementById("mathilda-btn");
let heroBg = document.getElementsByClassName("hero");	

jamesBg.addEventListener("click", function () {
  heroBg[0].style.backgroundImage = "url('assets/home-1.jpg')"
});

mathildaBg.addEventListener("click", function () {
  heroBg[0].style.backgroundImage = "url('assets/home-3.jpg')"
});

// NAVIGATION SCROLL BACKGROUND
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

