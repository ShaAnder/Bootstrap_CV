// query selector for the header toggle button
const headerToggleBtn = document.querySelector(".header-toggle");
const scrollToTopBtn = document.querySelector(".scroll-to-top");

// Toggles the header from shown to hidden.
function handleHeaderToggle() {
  // find our header element and adds a toggle state for the three classes
  document.querySelector("#header").classList.toggle("header-show");
  headerToggleBtn.classList.toggle("bi-list");
  headerToggleBtn.classList.toggle("bi-x");
}

// add an avent listener to the toggle button to make it clickable
headerToggleBtn.addEventListener("click", handleHeaderToggle);

// Hide the nav bar
document.querySelectorAll("#nav a").forEach((nav) => {
  nav.addEventListener("click", () => {
    if (document.querySelector(".header-show")) {
      handleHeaderToggle();
    }
  });
});

// event listener for showing and hiding our scroll to top button
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Calculate the trigger point as a percentage of the viewport height
  let triggerPoint = window.innerHeight * 1.1; // Adjust this fraction as needed (e.g., 0.5 for 50%)

  if (scrollPosition >= triggerPoint) {
    scrollToTopBtn.classList.add("scroll-visible"); // Show the div when scrolled past the trigger point
  } else {
    scrollToTopBtn.classList.remove("scroll-visible"); // Show the div when scrolled past the trigger point
  }
});

document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typed", {
    strings: [
      "Fitness Enjoyer",
      "Video Editor",
      "Music Lover",
      "Programming Enthusiast",
      "Web Developer...",
    ],
    typeSpeed: 40, // Speed in milliseconds for typing each character
    backSpeed: 20, // Speed in milliseconds for backspacing
    backDelay: 1500, // Delay before starting to backspace
    startDelay: 500, // Delay before starting the animation
    loop: true, // Whether the animation should loop
    showCursor: true, // Whether to show the cursor
    cursorChar: "|", // Character for the cursor
    autoInsertCss: true, // Automatically insert CSS for cursor and animations
  });
});

// age calc function we only want to run this on page load because it's not gonna change between refreshes
document.addEventListener("DOMContentLoaded", () => {
  const birthDate = new Date("1990-07-19"); // Replace with your birthdate
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Adjust if the birthday hasn't occurred this year yet
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  document.querySelector(".age").textContent = age;
});

// initiate our isotope and glightbox for portfolio items
document.addEventListener("DOMContentLoaded", () => {
  const portfolioContainer = document.querySelector(".portfolio-container");
  const iso = new Isotope(portfolioContainer, {
    itemSelector: ".portfolio-item",
    layoutMode: "masonry",
  });

  // Filter buttons
  const filters = document.querySelectorAll(".portfolio-filters li");
  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // Change active class
      filters.forEach((btn) => btn.classList.remove("filter-active"));
      this.classList.add("filter-active");

      // Filter portfolio items
      const filterValue = this.getAttribute("data-filter");
      iso.arrange({ filter: filterValue });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = GLightbox({
    selector: ".glightbox", // Matches the 'glightbox' class
    touchNavigation: true,
    loop: true,
    zoomable: true,
  });
});
