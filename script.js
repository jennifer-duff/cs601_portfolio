let menuIcon = document.getElementById("menu-icon");
console.log(menuIcon);

let nav = document.getElementsByTagName("nav")[0];

// Initial setup of menu
let windowWidth = window.innerWidth;
showMenuIcon(windowWidth);

// Monitor for updates
window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    showMenuIcon(windowWidth);
});

function showMenuIcon(windowWidth) {
    if (windowWidth <= 675) {
        menuIcon.style.display = "inline-block";
        nav.classList.add("visually-hidden");
    }
    else {
        menuIcon.style.display = "none";
        nav.classList.remove("visually-hidden");
    }
}