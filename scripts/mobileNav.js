const MOBILE_WIDTH_BREAKPOINT = 675;

let menuIcon = document.getElementById("menu-icon");
let nav = document.getElementsByTagName("nav")[0];

// Initial setup of menu
let windowWidth = window.innerWidth;
showHideMenuIcon(windowWidth);

// Monitor for updates
window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    showHideMenuIcon(windowWidth);
});

// Handle clicks on/off the mobile menu/navigation
document.addEventListener("click", (event) => {
    if (windowWidth <= MOBILE_WIDTH_BREAKPOINT) {
        // Shows mobile navigation modal when the menu icon is clicked
        if (event.target === menuIcon) {
            showMobileNav();
        }
        // Hides the mobile navigation if clicks occur
        // that are NOT within the mobile navigation modal
        else if (!nav.contains(event.target)) {
            hideMobileNav();
        }
    }
});

// Toggles visability of the menu icon based on browser width
function showHideMenuIcon(windowWidth) {
    if (windowWidth <= MOBILE_WIDTH_BREAKPOINT) {
        menuIcon.style.display = "inline-block";
        nav.classList.add("visually-hidden");
    }
    else {
        menuIcon.style.display = "none";
        nav.classList.remove("visually-hidden");
    }
}

// Shows the mobile navigation modal
function showMobileNav() {
    nav.classList.add('mobile-nav');
    nav.classList.remove("visually-hidden");
}

// Hides the mobile navigation modal
function hideMobileNav() {
    nav.classList.add("visually-hidden");
    nav.classList.remove('mobile-nav');
}
