// creating and functioning the navbar items
let navList = document.getElementById("navbar__list");
navList.classList.add("regular-ul");
let sections = document.querySelectorAll("section");
let navBar = document.querySelector(".navbar__menu");

for (i = 0; i < sections.length; i++) {
  let navItem = document.createElement("li");
  let navLink = document.createElement("a");

  navItem.classList.add("item", "regular-li");
  navLink.classList.add("link", "regular-a");
  navLink.href = `#${sections[i].id}`;
  navLink.innerHTML = sections[i].dataset.nav;

  navItem.appendChild(navLink);
  navList.appendChild(navItem);
}

//custom styling when the number of sections is large
if (sections.length > 4) {
  navList.classList.add("hide-menu");
  let btn = document.createElement("span");
  btn.innerHTML = "Nav";
  btn.style.cssText = `cursor: pointer;
    color: #264653;
    background-color: #fff;
    position: absolute;
    right: 20;
    top: 20;
    border-radius: 20px;
    text-align: center;
    padding: 10px;
    transition: .3s;`;
  navBar.prepend(btn);
  btn.onclick = function () {};
  btn.addEventListener("click", function () {
    navList.classList.toggle("visible");
    btn.classList.toggle("clicked");
    let navItem = document.querySelectorAll(".item");
    let navLink = document.querySelectorAll(".link");
    for (i = 0; i < sections.length; i++) {
      navItem[i].classList.toggle("hide-items");
      navLink[i].style.color = "#fefae0";
    }
  });
}

//scrolling
let navLink = document.querySelectorAll("a");
navLink.forEach((ele, ind) => {
  ele.onclick = function (e) {
    e.preventDefault();
    sections[ind].scrollIntoView({
      behavior: "smooth",
    });
  };
});

// Set sections as active
let activeEle = document.querySelectorAll("li")
window.addEventListener("scroll", function () {
  sections.forEach((elem, ind) => {
    let activeclass = document.querySelector(`a[href="#${elem.id}"]`);
    if (
      elem.getBoundingClientRect().top >= -400 &&
      elem.getBoundingClientRect().top <= 150
    ) {
      elem.classList.add("active-section");
      activeclass.classList.add("active-link");
      activeEle[ind].classList.add("active-li");
    } else {
      elem.classList.remove("active-section");
      activeclass.classList.remove("active-link");
      activeEle[ind].classList.remove("active-li");
    }
  });
});

//scroll to top
let btn = document.querySelector(".top");
window.onscroll = function () {
  if (this.scrollY > 500) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
}
//button functionality
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}