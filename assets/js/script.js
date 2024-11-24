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
