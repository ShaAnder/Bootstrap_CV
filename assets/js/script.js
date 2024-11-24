// query selector for the header toggle button
const headerToggleBtn = document.querySelector(".header-toggle");

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
