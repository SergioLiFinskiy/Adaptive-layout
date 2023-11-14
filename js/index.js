const menuList = document.querySelectorAll(".link[data-goto]");
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__nav");

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.body.classList.add("_touch");
  let menuArrows = document.querySelectorAll(".menu-arroy");
  console.log(menuArrows);
  if (menuArrows.length > 0) {
    for (index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function () {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

if (menuList.length > 0) {
  menuList.forEach((menuList) => {
    menuList.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const goValue =
        gotoBlock.getBoundingClientRect().top -
        document.querySelector("header").offsetHeight;
      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }
      window.scrollTo({
        top: goValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
