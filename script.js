const navItemCont = document.querySelector(".navItemCont");
const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const navItem = document.querySelectorAll(".navItem");

function getPositionY(el) {
  var rect = el.getBoundingClientRect();
  return rect.y;
}

cross.classList.remove("anim");
menu.classList.remove("anim");

menu.addEventListener("click", () => {
  setTimeout(() => {
    navItemCont.classList.toggle("show");
  }, 500);
  menu.classList.add("anim");
  cross.classList.remove("anim");
});
cross.addEventListener("click", () => {
  setTimeout(() => {
    navItemCont.classList.toggle("show");
  }, 500);
  cross.classList.add("anim");
  menu.classList.remove("anim");
});

navItem.forEach((el) => {
  let itemNum = 0;
  el.addEventListener("click", () => {
    for (let i = 1; i < 6; i++) {
      if (navItemCont.children[i] == el) {
        itemNum = i;
      }
    }
    console.log(itemNum);
    if (itemNum === 1) {
      setTimeout(function () {
        window.scrollTo({
          top: getPositionY(landingScreen),
          left: 0,
          behavior: "smooth",
        });
      }, 400);
    } else if (itemNum === 2) {
      setTimeout(function () {
        window.scrollTo({
          top: getPositionY(prices),
          left: 0,
          behavior: "smooth",
        });
      }, 400);
    } else if (itemNum === 3) {
      setTimeout(function () {
        window.scrollTo({
          top: getPositionY(about),
          left: 0,
          behavior: "smooth",
        });
      }, 400);
    } else if (itemNum === 4) {
      setTimeout(function () {
        window.scrollTo({
          top: getPositionY(reviews),
          left: 0,
          behavior: "smooth",
        });
      }, 400);
    } else if (itemNum === 5) {
      setTimeout(function () {
        window.scrollTo({
          top: getPositionY(contact),
          left: 0,
          behavior: "smooth",
        });
      }, 400);
    }
  });
});
