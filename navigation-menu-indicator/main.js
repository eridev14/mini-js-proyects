const list = document.querySelectorAll(".menu__item");

function activeLink(e) {
  list.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
}

list.forEach((item) => {
  item.addEventListener("click", activeLink);
});