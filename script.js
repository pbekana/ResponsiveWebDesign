// Select HTML elements
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");


// Function to open and close the menu
function toggleMenu() {

    // Toggle active class
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Update accessibility state
    const isOpen = menuToggle.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}


// Listen for hamburger button clicks
menuToggle.addEventListener("click", toggleMenu);


// Close menu when a navigation link is clicked
navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        // Remove active class from all links
        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        // Add active class to clicked link
        this.classList.add("active");

        // Close mobile navigation
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// Close menu when clicking outside
document.addEventListener("click", function(event) {

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


// Close menu when pressing Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});