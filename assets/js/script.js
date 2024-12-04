// INITIALIZE ALL FUNCTIONS //
// we use an iife to init all functions at once, so they are activated on load
(function init() {
  // --- QUERY SELECTORS / VARS --- //

  // header toggle button for our side nav
  const headerToggleBtn = document.querySelector(".header-toggle");
  // button for scrolling to the top
  const scrollToTopBtn = document.querySelector(".scroll-to-top");
  // filters to feed into our isotope init
  const filters = document.querySelectorAll(".portfolio-filters li");
  // get our portfolio containter for filters
  const portfolioContainer = document.querySelector(".portfolio-container");

  // get our items for the pagination
  const portfolioItems = document.querySelectorAll(".portfolio-item"); // All portfolio items
  const pageButtons = document.querySelectorAll(".page-btn");

  // VARS //

  // date vars for dynamic birthday calculation //
  const birthDate = new Date("1990-07-19"); // Replace with your birthdate
  const today = new Date();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  let age = today.getFullYear() - birthDate.getFullYear();

  // pagination vars
  const itemsPerPage = 6; // Number of items per page

  // init our lightbox
  const lightbox = GLightbox({
    selector: ".glightbox", // Matches the 'glightbox' class
    touchNavigation: true,
    loop: true,
    zoomable: true,
  });

  // --- FUNCTIONS TO INIT --- //

  // INIT TYPED TEXT //
  handleTypedText = () => {
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
  };

  // INIT AGE CALCULATION //
  handleAgeCalc = () => {
    // Adjust if the birthday hasn't occurred this year yet
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    document.querySelector(".age").textContent = age;
  };

  // INIT HEADER TOGGLE //
  handleHeaderToggle = () => {
    // find our header element and adds a toggle
    document.querySelector("#header").classList.toggle("header-show");
    headerToggleBtn.classList.toggle("bi-list");
    headerToggleBtn.classList.toggle("bi-x");
    // Hide the nav bar
    document.querySelectorAll("#nav a").forEach((nav) => {
      nav.addEventListener("click", () => {
        if (document.querySelector(".header-show")) {
          handleHeaderToggle();
        }
      });
    });
  };

  // INIT WINDOW SCROLL //
  handleWindowScroll = () => {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    // Calculate the trigger point as a percentage of the viewport height
    let triggerPoint = window.innerHeight * 1.1; // Adjust this fraction as needed (e.g., 0.5 for 50%)
    if (scrollPosition >= triggerPoint) {
      scrollToTopBtn.classList.add("scroll-visible"); // Show the div when scrolled past the trigger point
    } else {
      scrollToTopBtn.classList.remove("scroll-visible"); // Show the div when scrolled past the trigger point
    }
  };

  // INIT ISOTOPE FILTER //
  handleIsotopeInit = () => {
    const iso = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
      layoutMode: "masonry",
    });
    // Filter buttons
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
  };

  // INIT PAGINATION //
  handleInitPagination = () => {
    // Show our selected items
    function showPage(pageNumber) {
      // Calculate start and end number of items to display
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      // Hide all portfolio items
      portfolioItems.forEach((item) => (item.style.display = "none"));
      // Show only the items for the current page
      for (let i = startIndex; i < endIndex; i++) {
        if (portfolioItems[i]) {
          portfolioItems[i].style.display = "block";
        }
      }
      // Set active class on the clicked page button
      pageButtons.forEach((button) => button.classList.remove("active"));
      const activeButton = document.querySelector(
        `.page-btn[data-page="${pageNumber}"]`
      );
      if (activeButton) {
        activeButton.classList.add("active");
      }
    }
    // Attach click event to each page button
    pageButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const pageNumber = parseInt(this.getAttribute("data-page"));
        showPage(pageNumber);
      });
    });

    // Show the first page initially
    showPage(1);
  };

  // --- EVENT LISTENERS --- //
  headerToggleBtn.addEventListener("click", handleHeaderToggle);
  window.addEventListener("scroll", handleWindowScroll);
  document.addEventListener("DOMContentLoaded", handleTypedText);
  document.addEventListener("DOMContentLoaded", handleAgeCalc);
  document.addEventListener("DOMContentLoaded", handleIsotopeInit);
  document.addEventListener("DOMContentLoaded", handleInitPagination);
})();
