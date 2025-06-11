document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".burger-menu");
  const closeBtn = document.querySelector(".close-btn");

  burger.addEventListener("click", () => {
    burgerMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
  });
});