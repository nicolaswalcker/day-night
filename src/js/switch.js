const switcher = document.querySelector(".js-switch");
const body = document.querySelector("body");
const clouds = document.querySelector(".js-clouds");
const stars = document.querySelector(".js-stars");

switcher.addEventListener("click", function() {
  body.classList.toggle("t-dark");
  clouds.classList.toggle("is-active");
  stars.classList.toggle("is-active");
});

