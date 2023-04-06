const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 50) {
    nav.classList.add("grey");
  } else {
    nav.classList.remove("grey");
  }
});

//nav link highlight on scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .links li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 6) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

const image = document.querySelectorAll(".image");
const more = document.querySelectorAll(".more");
for (let i = 0; i < image.length; i++) {
  image[i].addEventListener("mouseover", function () {
    more[i].style.transform = "translate(-50%,-89%)";
    more[i].style.opacity = 1;
  });
  image[i].addEventListener("mouseout", function () {
    more[i].style.transform = "translate(-50%)";
    more[i].style.opacity = 0;
  });
}

//top page button
mybutton = document.getElementById("scroll-up-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 175 ||
    document.documentElement.scrollTop > 175
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
