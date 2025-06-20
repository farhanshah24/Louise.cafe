window.addEventListener("load", function () {
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500); // matches the CSS transition
  }, 0); // No artificial delay
});

let isdesktop = window.innerWidth >= 1600;
let ismobile = window.innerWidth <= 500;

const images = [
  'url("assets/home-image-1.jpg")',
  'url("assets/home-image-2.jpg")',
  'url("assets/home-image-3.jpg")',
  'url("assets/home-image-4.jpg")',
  'url("assets/home-image-5.jpg")',
];
let index = 0;
const homeSection = document.getElementById("home");

function changeBackground() {
  homeSection.style.backgroundImage = images[index];
  index = (index + 1) % images.length;

  if (isdesktop) {
    if (images[index] === 'url("assets/home-image-1.jpg")') {
      homeSection.style.backgroundPosition = "center -200px";
    } else if (images[index] === 'url("assets/home-image-2.jpg")') {
      homeSection.style.backgroundPosition = "center -130px";
    } else if (images[index] === 'url("assets/home-image-3.jpg")') {
      homeSection.style.backgroundPosition = "center -100px";
    } else if (images[index] === 'url("assets/home-image-4.jpg")') {
      homeSection.style.backgroundPosition = "center -400px";
    } else if (images[index] === 'url("assets/home-image-5.jpg")') {
      homeSection.style.backgroundPosition = "center";
    } else {
      homeSection.style.backgroundPosition = "center";
    }
  } else if (ismobile) {
    if (images[index] === 'url("assets/home-image-2.jpg")') {
      homeSection.style.backgroundPosition = "-400px center";
    } else {
      homeSection.style.backgroundPosition = "center";
    }
  } else {
    homeSection.style.backgroundPosition = "center";
  }
}

changeBackground();
setInterval(changeBackground, 2000);

function toggleNav() {
  document.querySelector(".nav-links").classList.toggle("show");
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".nav-links").classList.remove("show");
  });
});

const navbar = document.querySelector(".navbar"); // Adjust selector as needed
document.documentElement.style.setProperty(
  "--navbar-height",
  navbar.offsetHeight + "px"
);
