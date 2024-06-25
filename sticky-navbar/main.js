const _nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    _nav.classList.add("sticky");
  } else {
    _nav.classList.remove("sticky");
  }
});
