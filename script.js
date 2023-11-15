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
    console.log(event.target);
    console.log(nav.contains(event.target));
    if (event.target === menuIcon) {
        showMobileNav();
    }
    else if (!nav.contains(event.target)) {
        console.log('hiding!');
        hideMobileNav();
    }
});

function showHideMenuIcon(windowWidth) {
    if (windowWidth <= 675) {
        menuIcon.style.display = "inline-block";
        nav.classList.add("visually-hidden");
    }
    else {
        menuIcon.style.display = "none";
        nav.classList.remove("visually-hidden");
    }
}

function showMobileNav() {
    nav.classList.add('mobile-nav');
    nav.classList.remove("visually-hidden");
}

function hideMobileNav() {
    nav.classList.add("visually-hidden");
    nav.classList.remove('mobile-nav');
}

