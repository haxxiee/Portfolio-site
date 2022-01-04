// Hamburger menu toggle /w jQuery
$(".menu-btn").click(() => {
  $(".menu-btn").toggleClass("open");
  $(".menu-items").toggleClass("open");
});

// MODAL POP /w jQuery
// Open modal
$(".carousel-track").click((e) => {
  $(".modal").addClass("open");
  $(".full-img").addClass("open");

  $(".full-img").attr("src", $(e.target).attr("src"));
});

// Closes modal
$(".modal").click((e) => {
  if ($(e.target).hasClass("modal")) {
    $(".modal").removeClass("open");
    $(".full-img").removeClass("open");
  }
});

// Carousel /w vanillaJS
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const dotNavigation = document.querySelector(".carousel-nav");
const dots = Array.from(dotNavigation.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current");
  targetSlide.classList.add("current");
};

// Function for updating dots
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current");
  targetDot.classList.add("current");
};

// Arrange slides next to eachother
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

// Click right, move slide right
nextButton.addEventListener("click", (e) => {
  let currentSlide = track.querySelector(".current");
  let nextSlide = currentSlide.nextElementSibling;
  let currentDot = dotNavigation.querySelector(".current");
  let nextDot = currentDot.nextElementSibling;

  if (nextSlide === null) {
    currentSlide = slides[slides.length - 1];
    nextSlide = slides[0];
    nextDot = dots[0];
  }
  moveToSlide(track, currentSlide, nextSlide);

  updateDots(currentDot, nextDot);
});

// Click left, move slide left
prevButton.addEventListener("click", (e) => {
  let currentSlide = track.querySelector(".current");
  let prevSlide = currentSlide.previousElementSibling;
  let currentDot = dotNavigation.querySelector(".current");
  let prevDot = currentDot.previousElementSibling;

  if (prevSlide === null) {
    currentSlide = slides[0];
    prevSlide = slides[slides.length - 1];
    prevDot = dots[dots.length - 1];
  }

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});
