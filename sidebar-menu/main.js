const _toggle = document.querySelector(".toggle");
const _aside = document.querySelector(".aside");
const _menu = document.querySelector(".menu");

_toggle.addEventListener("click", () => {
  _toggle.classList.toggle("active");
  _aside.classList.toggle("active");
});

_menu.addEventListener("click", (e) => {
  let target = e.target.closest(".menu__item");
  if (!target) {
    return;
  }

  let allList = _menu.querySelectorAll(".menu__item");
  allList.forEach((item) => {
    item.classList.remove("active");
  });

  target.classList.add("active");
});
